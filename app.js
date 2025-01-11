const express = require('express');
const path = require('node:path');

const indexRouter = require('./routes/indexRouter');

const app = express();

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use('/', indexRouter);

app.listen(3000, function () {
  console.log(`Server is running on the port 3000`);
});
