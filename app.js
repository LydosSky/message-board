const path = require('node:path');
const express = require('express');
const dotenv = require('dotenv');
dotenv.config();

const indexRouter = require('./routes/indexRouter');

const app = express();

app.set('view engine', 'ejs');
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.urlencoded({ extended: true }));

app.use('/', indexRouter);

app.listen(3000, function () {
  console.log(`Server is running on the port 3000`);
});
