module.exports = function(app) {

    var matches = require('../controllers/matches.controller');
    var scorelines = require('../controllers/scorelines.controller');
    var teams = require('../controllers/teams.controller');
    var types = require('../controllers/types.controller');

    // Match Routes

    // Create a new Match
    app.post('/api/matches', matches.create);
    // Retrieve all Matches
    app.get('/api/matches', matches.findAll);
    // Retrieve a single Match by Id
    app.get('/api/matches/:id', matches.findById);
    // Update a Match with Id
    app.put('/api/matches', matches.update);
    // Delete a Match with Id
    app.delete('/api/matches/:id', matches.delete);

    //------------------------------------------------------

    // Scoreline Routes

    // Create a new Scoreline
    app.post('/api/scorelines', scorelines.create);
    // Retrieve all Scorelines
    app.get('/api/scorelines', scorelines.findAll);
    // Retrieve a single Scoreline by Id
    app.get('/api/scorelines/:id', scorelines.findById);
    // Update a Scoreline with Id
    app.put('/api/scorelines', scorelines.update);
    // Delete a Scoreline with Id
    app.delete('/api/scorelines/:id', scorelines.delete);

    //------------------------------------------------------

    // Team Routes

    // Create a new Team
    app.post('/api/teams', teams.create);
    // Retrieve all Teams
    app.get('/api/teams', teams.findAll);
    // Retrieve a single Team by Id
    app.get('/api/teams/:id', teams.findById);
    // Update a Team with Id
    app.put('/api/teams', teams.update);
    // Delete a Team with Id
    app.delete('/api/teams/:id', teams.delete);

    //------------------------------------------------------

    // Type Routes

    // Create a new Type
    app.post('/api/types', types.create);
    // Retrieve all Typess
    app.get('/api/types', types.findAll);
    // Retrieve a single Type by Id
    app.get('/api/types/:id', types.findById);
    // Update a Type with Id
    app.put('/api/types', types.update);
    // Delete a Type with Id
    app.delete('/api/types/:id', types.delete);

    //------------------------------------------------------
}