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

app.get('/api/messages/users', (req, res, next) => {

  const sql = `
  select "dogName",
  "messageContent",
  "recipientId",
  "senderId",
  "imageUrl",
  "sentAt"
  from "users"
  JOIN "messages" ON "users"."userId" = "messages"."senderId"
  `;

  db.query(sql)
    .then(result => res.status(200).json(result.rows))
    .catch(err => next(err));
});

app.get('/api/messages', (req, res, next) => {
  const sql = `
  select *
  from "messages"
  `;

  db.query(sql)
    .then(result => res.json(result.rows))
    .catch(err => next(err));
});

app.post('/api/messages', (req, res, next) => {
  const sender = req.body.senderId;
  const recipient = req.body.recipientId;
  const message = req.body.messageContent;

  const sql = `
  insert into "messages" ("recipientId","senderId", "messageContent", "sentAt")
  values($1, $2, $3, $4)
  returning *
  `;

  const params = [recipient, sender, message, new Date()];

  return db.query(sql, params)
    .then(result => {
      const messageSent = result.rows[0];
      res.status(201).json(messageSent);
    })
    .catch(err => next(err));
});

// User can see list of connection requests

app.get('/api/fren-requests/:recipientId', (req, res, next) => {
  const recipientId = parseInt(req.params.recipientId, 10);

  if (recipientId < 0 || isNaN(recipientId)) {
    throw (new ClientError('Recipient ID must be valid', 400));
  }

  const sql = `
    select "u"."dogName" as "requesterName",
           "u"."imageUrl" as "requesterImage",
           "fr"."requestId",
           "fr"."isAccepted"
      from "frenRequests" as "fr"
      join "users" as "u" on "u"."userId" = "fr"."senderId"
     where "fr"."recipientId" = $1 and
           "fr"."isAccepted" = false;
  `;

  const params = [recipientId];

  db.query(sql, params)
    .then(result => {
      if (result.rows.length === 0) {
        next(new ClientError(`Id ${recipientId} returned no messages`, 404));
      } else {
        res.status(200).json(result.rows);
      }
    })
    .catch(error => next(error));
});
// User can log in to account

app.get('/api/login', (req, res, next) => {
  db.query('select "userName", "userId" from "users"')
    .then(result => {
      res.status(200).json(result.rows);
    })
    .catch(err => next(err));
});

// User Can View All their Frens
app.get('/api/frens/:userId', (req, res, next) => {
  const userId = parseInt(req.params.userId, 10);
  const params = [userId];
  const query = `select "u"."dogName" as "name",
    "u"."imageUrl" as "image",
    "u"."location" as "location",
    "fr"."isAccepted",
    "u". "userId"
    from "frenRequests" as "fr"
    join "users" as "u" on "u"."userId" = "fr"."senderId"
    where "fr"."recipientId" = $1 and
    "fr"."isAccepted" = true;  `;

  db.query(query, params)
    .then(result => {
      if (!result) {
        return next(new ClientError('No frens yet. Let\'s find some!', 404));
      } else {
        return res.status(200).json(result.rows);
      }
    })
    .catch(err => console.error(err));
});

app.use('/api', (req, res, next) => {
  next(new ClientError(`cannot ${req.method} ${req.originalUrl} `, 404));
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
