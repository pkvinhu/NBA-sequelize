const Sequelize = require('sequelize');
const NBA = new Sequelize(process.env.DATABASE_URL, { logging: false});
const { players, countries, teams } = require('./users');

const sync = () => NBA.sync({force:true});

const syncAndSeed = async()=> {
  await NBA.sync( {force:true} )
  const [ Steph, LBJ, DRose, JimmyBuckets ] = await Promise.all(players.map((player)=>{
  	return Player.create(player);
  }));
  const [ CHI, GSW, LAK, MIN, UTA ] = await Promise.all(teams.map((team)=> {
  	return Team.create(team);
  }));
  DRose.setTeam(MIN);
  Steph.setTeam(GSW);
  LBJ.setTeam(LAK);
  JimmyBuckets.setTeam(MIN);
}

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
  numplayers: {
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


Country.hasMany(Team);
Player.belongsTo(Team);
Team.belongsToMany(Player, { through: 'PlayerTeam' });


module.exports = { 
  sync,
  syncAndSeed,
  models: {
    Player,
    Team,
    Country
  } };