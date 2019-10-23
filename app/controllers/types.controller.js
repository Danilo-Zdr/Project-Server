const db = require('../config/database');
const Type = db.types;

exports.create = (req, res) => {
 let type = req.body;
 Type.create(type)
 .then(result => {
  res.json(result);
  })
  .catch(err => console.log(err));
};

exports.findAll = (req, res) => {
 Type.findAll()
 .then(types => {
  res.json(types);
  })
  .catch(err => console.log(err));
};

exports.findById = (req, res) => {
 Type.findByPk(req.params.id)
 .then(type => {
  res.json(type);
  })
  .catch(err => console.log(err));
};

exports.update = (req, res) => {
 let type = req.body;
 let id = req.body.id;
 Type.update(type, { where: { id: id } })
 .then(() => {
  res.status(200).json({ msg: "updated successfully the type with id = " + id });
  })
  .catch(err => console.log(err));
};

exports.delete = (req, res) => {
 const id = req.params.id;
 Type.destroy({
  where: { id: id }
  })
  .then(() => {
   res.status(200).json({ msg: 'deleted successfully the type with id = ' + id });
   });
};