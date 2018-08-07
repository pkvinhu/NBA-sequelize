const Sequelize = require('sequelize');
const NBA = new Sequelize(process.env.DATABASE_URL, { logging:false });
const { playerz, teamz, eraz, countriez } = require('./users');
module.exports = NBA;
const models = require('./model');

const init = async () => {
  await NBA.sync()

  	const play = await models.Player.bulkCreate(playerz)
  	const all = await Player.findAll()
  	console.log(all);
}

init();

console.log(NBA);