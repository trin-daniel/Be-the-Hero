const express = require('express');
const routes = express.Router();

const OngController = require('./controllers/OngController');
const IncidentController = require('./controllers/IncidentController');

const SessionController = require('./controllers/SessionController');
const ProfileController = require('./controllers/ProfileController');

routes.get('/ongs', OngController.index);
routes.post('/ongs', OngController.create);
routes.post('/sessions', SessionController.create);
routes.get('/incidents', IncidentController.index);
routes.get('/profile', ProfileController.index);
routes.post('/incidents', IncidentController.create);
routes.delete('/incidents/:id', IncidentController.delete);

module.exports = routes;