import express from 'express';
// const express = require('express');
import { tempRouter } from './routes/temp.route.js';
const app = express();
const port = 3000;

app.use('/temp', tempRouter);

app.use((req, res, next) => {
  const err = new BaseError(status.NOT_FOUND);
  next(err);
});
app.use((err, req, res, nect) => {
  console.error(err.data);
  res.locals.error = process.env.NODE_ENV !== 'production' ? err : {};
  res.status(err.data.status).send(err.data);
});

app.listen(port, () => {
  console.log(`${port}번에 실행중`);
});
// const myLogger = (req, res, next) => {
//   console.log('LOG');
//   next();
// };

// app.use(myLogger);

// app.get('/', (req, res) => {
//   console.log('/');
//   res.send('HELLO!!');
// });
// app.get('/hello', (req, res) => {
//   console.log('/hello');
//   res.send('UMC');
// });
