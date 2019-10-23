module.exports = function(app) {

var matches = require('../controllers/matches.controller');
var scorelines = require('../controllers/scorelines.controller');
var teams = require('../controllers/teams.controller');
var types = require('../controllers/types.controller');

app.post('/api/matches', matches.create);
app.get('/api/matches', matches.findAll);
app.get('/api/matches/:id', matches.findById);
app.put('/api/matches', matches.update);
app.delete('/api/matches/:id', matches.delete);

app.post('/api/scorelines', scorelines.create);
app.get('/api/scorelines', scorelines.findAll);
app.get('/api/scorelines/:id', scorelines.findById);
app.put('/api/scorelines', scorelines.update);
app.delete('/api/scorelines/:id', scorelines.delete);

app.post('/api/teams', teams.create);
app.get('/api/teams', teams.findAll);
app.get('/api/teams/:id', teams.findById);
app.put('/api/teams', teams.update);
app.delete('/api/teams/:id', teams.delete);

app.post('/api/types', types.create);
app.get('/api/types', types.findAll);
app.get('/api/types/:id', types.findById);
app.put('/api/types', types.update);
app.delete('/api/types/:id', types.delete);
}