const db = require('../config/database');
const Scoreline = db.scorelines;

exports.create = (req, res) => {
 let scoreline = req.body;
 Scoreline.create(scoreline)
 .then(result => {
  res.json(result);
  })
  .catch(err => console.log(err));
};

exports.findAll = (req, res) => {
 Scoreline.findAll()
 .then(scorelines => {
  res.json(scorelines);
  })
  .catch(err => console.log(err));
};

exports.findById = (req, res) => {
 Scoreline.findByPk(req.params.id)
 .then(scoreline => {
  res.json(scoreline);
  })
  .catch(err => console.log(err));
};

exports.update = (req, res) => {
 let scoreline = req.body;
 let id = req.body.id;
 Scoreline.update(scoreline, { where: { id: id } })
 .then(() => {
  res.status(200).json({ msg: "updated successfully the scoreline with id = " + id });
  })
  .catch(err => console.log(err));
};

exports.delete = (req, res) => {
 const id = req.params.id;
 Scoreline.destroy({
  where: { id: id }
  })
  .then(() => {
   res.status(200).json({ msg: 'deleted successfully the scoreline with id = ' + id });
   });
};