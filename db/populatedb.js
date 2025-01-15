#! /usr/bin/env node

const dotenv = require('dotenv');
dotenv.config();

const { Client } = require('pg');

const SQL = `
CREATE TABLE IF NOT EXISTS messages (
  id INTEGER PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
  username VARCHAR (50) NOT NULL,
  usermessage VARCHAR (250) NOT NULL,
  added DATE NOT NULL
);

INSERT INTO messages (username, usermessage, added) VALUES
('Bob', 'I''m good, thanks! How about you?', '2025-01-01'),
('Alice', 'Doing great! What are you up to?', '2025-01-02'),
('Charlie', 'Hey everyone, what''s happening?', '2025-01-02'),
('Alice', 'Not much, just chatting here.', '2025-01-02'),
('Bob', 'Same here, relaxing at home.', '2025-01-03'),
('Charlie', 'Anyone up for a movie tonight?', '2025-01-03'),
('Alice', 'Sounds fun! Count me in.', '2025-01-03'),
('Bob', 'I''m in too. Let''s decide on the movie.', '2025-01-04'),
('Charlie', 'Great! Let''s meet at 7 PM.', '2025-01-04');
`;

async function main() {
  const client = new Client({
    connectionString: `postgresql://${process.env.DATABASE_USER}:${process.env.DATABASE_PASSWORD}@${process.env.DATABASE_HOST}:${process.env.DATABASE_PORT}/${process.env.DATABASE_DB}`,
  });
  await client.connect();
  await client.query(SQL);
  await client.end();
  console.log('done');
}

main();
