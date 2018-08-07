const Sequelize = require('sequelize');
const NBA = new Sequelize(process.env.DATABASE_URL, { logging:false });
const { playerz, teamz, eraz, countriez } = require('./users');
const models = require('./model');
module.exports = NBA;

const init = () => {
  NBA.sync()
  .then(()=> {
  	models.Player.bulkCreate(players)
  })
  .then(() => {
  	return Player.findAll()
  })
  .then((player) => {
  	console.log(player.name)
  })
}

init();

console.log(NBA);