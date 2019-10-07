const db = require('../config/database');
const Type = db.types;




// Add a Type
exports.create = (req, res) => {
    // Save to MySQL database
    let type = req.body;
    Type.create(type).then(result => {
            // Send created type to client
            res.json(result);
        })
        .catch(err => console.log(err));
};

// Fetch all Types
exports.findAll = (req, res) => {
    Type.findAll().then(types => {
            res.json(types);
        })
        .catch(err => console.log(err));
};

// Find a Type by Id
exports.findById = (req, res) => {
    // findById() was replaced by findByPk() with Sequelize v5
    Type.findByPk(req.params.id).then(type => {
            res.json(type);
        })
        .catch(err => console.log(err));
};

// Update a Match
exports.update = (req, res) => {
    let type = req.body;
    let id = req.body.id;
    Type.update(type, { where: { id: id } }).then(() => {
            res.status(200).json({ msg: "updated successfully the type with id = " + id });
        })
        .catch(err => console.log(err));
};

// Delete a Type by Id
exports.delete = (req, res) => {
    const id = req.params.id;
    Type.destroy({
        where: { id: id }
    }).then(() => {
        res.status(200).json({ msg: 'deleted successfully the type with id = ' + id });
    });
};