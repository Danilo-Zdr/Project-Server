const db = require('../config/database');
const Match = db.matches;




// Add a Match
exports.create = (req, res) => {
    // Save to MySQL database
    let match = req.body;
    Match.create(match).then(result => {
            // Send created match to client
            res.json(result);
        })
        .catch(err => console.log(err));
};

// Fetch all Matches
exports.findAll = (req, res) => {
    Match.findAll().then(matches => {
            res.json(matches);
        })
        .catch(err => console.log(err));
};

// Find a Match by Id
exports.findById = (req, res) => {
    // findById() was replaced by findByPk() with Sequelize v5
    Match.findByPk(req.params.id).then(match => {
            res.json(match);
        })
        .catch(err => console.log(err));
};

// Update a Match
exports.update = (req, res) => {
    let match = req.body;
    let id = req.body.id;
    Match.update(match, { where: { id: id } }).then(() => {
            res.status(200).json({ msg: "updated successfully the match with id = " + id });
        })
        .catch(err => console.log(err));
};

// Delete a Match by Id
exports.delete = (req, res) => {
    const id = req.params.id;
    Match.destroy({
        where: { id: id }
    }).then(() => {
        res.status(200).json({ msg: 'deleted successfully the match with id = ' + id });
    });
};