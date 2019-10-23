module.exports = (sequelize, Sequelize) => {
 var Scoreline = sequelize.define('scoreline', {
  match_id: {
   type: Sequelize.INTEGER,
   allowNull: false
   },
  score: {
   type: Sequelize.STRING,
   allowNull: false
   },
  time: {
   type: Sequelize.DATE,
   allowNull: false
   },
   }, {
    createdAt: false,
    updatedAt: false,
   });

return Scoreline;
}
