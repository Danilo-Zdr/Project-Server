const db = require('../config/database');
const Team = db.teams;

exports.create = (req, res) => {
 let team = req.body;
 Team.create(team)
 .then(result => {
  res.json(result);
  })
  .catch(err => console.log(err));
};

exports.findAll = (req, res) => {
 Team.findAll()
 .then(teams => {
  res.json(teams);
  })
  .catch(err => console.log(err));
};

exports.findById = (req, res) => {
 Team.findByPk(req.params.id)
 .then(team => {
  res.json(team);
  })
  .catch(err => console.log(err));
};

exports.update = (req, res) => {
 let team = req.body;
 let id = req.body.id;
 Team.update(team, { where: { id: id } })
 .then(() => {
  res.status(200).json({ msg: "updated successfully the team with id = " + id });
  })
  .catch(err => console.log(err));
};

exports.delete = (req, res) => {
 const id = req.params.id;
 Team.destroy({
  where: { id: id }
  })
  .then(() => {
   res.status(200).json({ msg: 'deleted successfully the team with id = ' + id });
   });
};