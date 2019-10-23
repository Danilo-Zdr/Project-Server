const db = require('../config/database');
const Match = db.matches;

exports.create = (req, res) => {
 let match = req.body;
 Match.create(match)
 .then(result => {
  res.json(result);
  })
  .catch(err => console.log(err));
};

exports.findAll = (req, res) => {
 Match.findAll()
 .then(matches => {
  res.json(matches);
  })
  .catch(err => console.log(err));
};

exports.findById = (req, res) => {
 Match.findByPk(req.params.id)
 .then(match => {
  res.json(match);
  })
  .catch(err => console.log(err));
};

exports.update = (req, res) => {
 let match = req.body;
 let id = req.body.id;
 Match.update(match, { where: { id: id } })
 .then(() => {
  res.status(200).json({ msg: "updated successfully the match with id = " + id });
  })
  .catch(err => console.log(err));
};

exports.delete = (req, res) => {
 const id = req.params.id;
 Match.destroy({
  where: { id: id }
  })
  .then(() => {
  res.status(200).json({ msg: 'deleted successfully the match with id = ' + id });
  });
};