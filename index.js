const express = require('express');

const app = express();

// Middleware #1
app.use((req, res, next) => {
  res.locals.hello = 'Hello World';
  next();
}); 

// Middleware #2
app.get('/', (req, res) => {
  return res.send(res.locals.hello);
});

// Middleware #3
app.get('/', (req, res) => {
  res.send('Eu nunca serei chamado! T.T');
});

app.listen(3000);