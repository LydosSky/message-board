const { Router } = require('express');

const indexRouter = Router();

const messages = [
  {
    text: 'Hi there!',
    user: 'Amando',
    added: new Date(),
  },
  {
    text: 'Hello World!',
    user: 'Charles',
    added: new Date(),
  },
];

indexRouter.get('', function (req, res) {
  res.render('index', { title: 'Mini Messageboard', messages });
});

module.exports = indexRouter;
