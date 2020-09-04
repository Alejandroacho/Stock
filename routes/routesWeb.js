var express = require('express');
var router = express.Router();
var NoteController = require('controllers/NoteController');

NoteRoutes = function(app) {
    router.get('/', NoteController.index);
    router.get('/cruds/:id', NoteController.findOne);
    router.get('/cruds', NoteController.findAll);
    router.post('/cruds', NoteController.add);
    router.put('/cruds/:id', NoteController.update);
    router.delete('/cruds/:id', NoteController.delete);
    app.use(router);
};
module.exports = NoteRoutes;