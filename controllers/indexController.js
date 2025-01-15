const db = require('../db/queries');

function getAllMessages(req, res) {
  db.getAllMessages().then((messages) =>
    res.render('index', { title: 'Mini Messageboard', messages }),
  );
}

function getDisplayForm(req, res) {
  res.render('form');
}

function getMessageById(req, res) {
  db.getMessageById(parseInt(req.params.id)).then((message) =>
    res.render('detail', { title: 'Message Detail', message }),
  );
}

function postMessage(req, res) {
  const { username, usermessage } = req.body;
  db.postMessage({ username, usermessage, added: new Date() }).then(
    (response) => res.redirect('/'),
  );
}

function deleteMessageById(req, res) {
  db.deleteMessageById(parseInt(req.params.id)).then((response) =>
    res.redirect('/'),
  );
}

module.exports = {
  getAllMessages,
  getDisplayForm,
  getMessageById,
  postMessage,
  deleteMessageById,
};
