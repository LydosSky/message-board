const pool = require('./pool');

const first = (array) => array[0];

const getAllMessages = () =>
  pool.query('SELECT * FROM messages').then((response) => response.rows);

const getMessageById = (id) =>
  pool
    .query('SELECT * FROM messages WHERE id=$1', [id])
    .then((response) => first(response.rows));

const postMessage = ({ username, usermessage, added }) =>
  pool.query(
    'INSERT INTO messages (username, usermessage, added) VALUES ($1, $2, $3)',
    [username, usermessage, added],
  );

const deleteMessageById = (id) =>
  pool.query('DELETE FROM messages WHERE id=$1', [id]);

module.exports = {
  getAllMessages,
  getMessageById,
  postMessage,
  deleteMessageById,
};
