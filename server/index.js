require('dotenv/config');
const express = require('express');

const db = require('./database');
const ClientError = require('./client-error');
const staticMiddleware = require('./static-middleware');
const sessionMiddleware = require('./session-middleware');

const app = express();

app.use(staticMiddleware);
app.use(sessionMiddleware);

app.use(express.json());

app.get('/api/health-check', (req, res, next) => {
  db.query('select \'successfully connected\' as "message"')
    .then(result => res.json(result.rows[0]))
    .catch(err => next(err));
});

app.use('/api', (req, res, next) => {
  next(new ClientError(`cannot ${req.method} ${req.originalUrl}`, 404));
});

app.get('/api/users', (req, res, next) => {
  const users = `
    select "userName",
          "imageUrl",
          "location",
          "dogName"
    from "users"
  `;
  db.query(users)
    .then(userInfo => {
      const totalUsers = `
    select count(*) from "users"`;
      return db.query(totalUsers).then(total => {
        if (total.rows[0].count === 1) {
          res.status(404).json({
            error: 'No Doggos Nearby'
          });
        } else {
          const allData = {
            userName: userInfo.rows[0].userName,
            dogName: userInfo.rows[0].dogName,
            imageUrl: userInfo.rows[0].imageUrl,
            location: userInfo.rows[0].location,
            totalUsers: total.rows[0].count
          };
          return allData;
        }
      });
    })
    .then(result => res.json(result))
    .catch(err => next(err));
});

app.use((err, req, res, next) => {
  if (err instanceof ClientError) {
    res.status(err.status).json({ error: err.message });
  } else {
    console.error(err);
    res.status(500).json({
      error: 'an unexpected error occurred'
    });
  }
});

app.listen(process.env.PORT, () => {
  // eslint-disable-next-line no-console
  console.log('Listening on port', process.env.PORT);
});
