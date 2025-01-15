const { Router } = require('express');

const indexController = require('../controllers/indexController');

const indexRouter = Router();

indexRouter.get('', indexController.getAllMessages);
indexRouter.get('/new', indexController.getDisplayForm);
indexRouter.get('/detail/:id', indexController.getMessageById);
indexRouter.post('/new', indexController.postMessage);
indexRouter.get('/delete/:id', indexController.deleteMessageById);

module.exports = indexRouter;
