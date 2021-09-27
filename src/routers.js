const express = require('express');

const routes = express.Router();

const usuario = require('./controllers/usuarios.controller')

routes.get('/', usuario.index);

// rotas de usuarios
routes.post('/api/usuarios', usuario.create);
routes.get('/api/usuarios', usuario.index);
routes.get('/api/usuarios.details', Usuarios.datails);
routes.delete('/api/usuarios', usuario.delete);
routes.put('/api/usuarios', usuario.update)
module.exports = routes;