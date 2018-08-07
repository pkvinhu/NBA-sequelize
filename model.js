const Sequelize = require('sequelize');
const NBA = require('./db');

const Country = NBA.define('countries', {
  name: {
  	type: Sequelize.STRING,
  	allowNull: false
  }
})

const Team = NBA.define('teams', {
  name: {
  	type: Sequelize.STRING,
  	allowNull: false
  },
  city: {
  	type: Sequelize.STRING,
  	defaultValue: ''
  },
  conference: {
  	type: Sequelize.STRING,
  	allowNull: false
  },
  division: {
  	type: Sequelize.STRING,
  },
  players: {
  	type: Sequelize.INTEGER
  }
})

const Player = NBA.define('players', {
  name: {
    type: Sequelize.STRING,
    allowNull: false
  },
  number: {
  	type: Sequelize.BIGINT
  },
  almamater: {
  	type: Sequelize.STRING,
  	defaultValue: ''
  }
})

const Era = NBA.define('eras', {
  time: {
  	type: Sequelize.RANGE(Sequelize.INTEGER),
  	// get() {
  	//   return 'From ' + ${this.getDataValue('time')[0]} + ' to ' + ${this.getDataValue('time')[1] + ''}
  	// }
  }
})

Country.hasMany(Team);
Player.belongsTo(Team);
Player.belongsTo(Era);
// Coach.belongsTo(Team);
// Coach.hasMany(Player);
Team.belongsToMany(Player, { through: 'PlayerTeam' });


module.exports = {
  models: {
  	Country,
  	Team,
  	Player,
  	Era
  }
}