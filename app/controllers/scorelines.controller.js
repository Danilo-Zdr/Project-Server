const db = require('../config/database');
const Scoreline = db.scorelines;




// Add a Scoreline
exports.create = (req, res) => {
    // Save to MySQL database
    let scoreline = req.body;
    Scoreline.create(scoreline).then(result => {
            // Send created Scoreline to client
            res.json(result);
        })
        .catch(err => console.log(err));
};

// Fetch all Scorelines
exports.findAll = (req, res) => {
    Scoreline.findAll().then(scorelines => {
            res.json(scorelines);
        })
        .catch(err => console.log(err));
};

// Find a Scoreline by Id
exports.findById = (req, res) => {
    // findById() was replaced by findByPk() with Sequelize v5
    Scoreline.findByPk(req.params.id).then(scoreline => {
            res.json(scoreline);
        })
        .catch(err => console.log(err));
};

// Update a Scoreline
exports.update = (req, res) => {
    let scoreline = req.body;
    let id = req.body.id;
    Scoreline.update(scoreline, { where: { id: id } }).then(() => {
            res.status(200).json({ msg: "updated successfully the scoreline with id = " + id });
        })
        .catch(err => console.log(err));
};

// Delete a Scoreline by Id
exports.delete = (req, res) => {
    const id = req.params.id;
    Scoreline.destroy({
        where: { id: id }
    }).then(() => {
        res.status(200).json({ msg: 'deleted successfully the scoreline with id = ' + id });
    });
};