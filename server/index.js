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

app.get('/api/login', (req, res, next) => {
  db.query('select "userName", "userId" from "users"')
    .then(result => {
      res.status(200).json(result.rows);
    })
    .catch(err => next(err));
});

app.get('/api/users/find-frens/list/:location/:userId', (req, res, next) => {
  const userId = parseInt(req.params.userId, 10);
  const location = req.params.location;
  const users = `
    select  "userId",
            "userName",
            "imageUrl",
            "location",
            "dogName"
            from "users"
      where "location" = $1 and "userId" != $2
  `;
  const params = [location, userId];
  db.query(users, params)
    .then(userInfo => {
      const totalUsers = `
    select count(*) as "numberOfUsers"
      from "users"
      where "userId" != ${userId}`;
      return db.query(totalUsers).then(total => {
        const userInt = parseInt(total.rows[0].numberOfUsers);
        if (userInt < 1) {
          res.status(404).json({
            error: 'No Doggos Nearby'
          });
          return;
        }
        const allData = userInfo.rows[0];
        allData.totalUsers = total.rows[0].numberOfUsers;
        return allData;
      });
    })
    .then(result => res.json(result))
    .catch(err => next(err));
});

app.use('/api', (req, res, next) => {
  next(new ClientError(`cannot ${req.method} ${req.originalUrl}`, 404));
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
