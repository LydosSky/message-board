const { Router } = require('express');
const crypto = require('node:crypto');

const indexRouter = Router();

const messages = [
  {
    id: 'a2e87d96-3c41-409b-b8ad-263c8b6d4650',
    text: 'Hi there!',
    user: 'Amando',
    added: new Date(),
  },
  {
    id: 'a2e87d96-3c41-409b-b8ad-263c8b6d4650',
    text: 'Hello World!',
    user: 'Charles',
    added: new Date(),
  },
];

indexRouter.get('', function (req, res) {
  res.render('index', {
    title: 'Mini Messageboard',
    messages,
  });
});

indexRouter.get('/new', function (req, res) {
  res.render('form');
});

indexRouter.get('/:id', function (req, res) {
  const message = messages.reduce(
    (prev, curr) => (curr.id === req.params.id ? curr : prev),
    null,
  );
  res.render('detail', { title: 'Message Detail', message });
});

indexRouter.post('/new', function (req, res) {
  const { messageText, messageUser } = req.body;
  messages.push({
    id: crypto.randomUUID(),
    text: messageText,
    user: messageUser,
    added: new Date(),
  });
  res.redirect('/');
});

module.exports = indexRouter;
