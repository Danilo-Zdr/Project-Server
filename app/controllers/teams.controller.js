const db = require('../config/database');
const Team = db.teams;




// Add a Team
exports.create = (req, res) => {
    // Save to MySQL database
    let team = req.body;
    Team.create(team).then(result => {
            // Send created team to client
            res.json(result);
        })
        .catch(err => console.log(err));
};

// Fetch all Teams
exports.findAll = (req, res) => {
    Team.findAll().then(teams => {
            res.json(teams);
        })
        .catch(err => console.log(err));
};

// Find a Team by Id
exports.findById = (req, res) => {
    // findById() was replaced by findByPk() with Sequelize v5
    Team.findByPk(req.params.id).then(team => {
            res.json(team);
        })
        .catch(err => console.log(err));
};

// Update a Team
exports.update = (req, res) => {
    let team = req.body;
    let id = req.body.id;
    Team.update(team, { where: { id: id } }).then(() => {
            res.status(200).json({ msg: "updated successfully the team with id = " + id });
        })
        .catch(err => console.log(err));
};

// Delete a Team by Id
exports.delete = (req, res) => {
    const id = req.params.id;
    Team.destroy({
        where: { id: id }
    }).then(() => {
        res.status(200).json({ msg: 'deleted successfully the team with id = ' + id });
    });
};