const expect = require('chai').expect;
const db = require('../db/index');
const { sync, NBA } = require('../db/index');
// const { Player, Team } = db.models;
const testFile = require('./sqlmodels')
const Sequelize = require('sequelize');

describe('Models', ()=> {
  beforeEach(()=> {
  	return sync();
  })

  afterEach(()=> {
  	return sync();
  })

  describe('Player Model', ()=> {
    it('has a name and an optional number', ()=> {
      return Promise.all([
      	Player.create({name: 'Kyrie Irving'}),
      	Player.create({name: 'Wendell Carter Jr.', number: 34}),
      	Player.create({name: 'Donovan Mitchell', number: 45})
      ])
      .then(([ UncleDrew, WCJ, Rook ])=>{
      	expect(UncleDrew.name).to.equal('Kyrie Irving');
      	expect(WCJ.number).to.equal(34);
      })
    })

    it('belongs to a team by an id', async()=> {
      const [ SkyHook, MJ, Legend ] = await Promise.all([
      	Player.create({name: 'Kareem Abdul Jabar', number: 33}),
      	Player.create({name: 'Michael Jordan', number: 23}),
      	Player.create({name: 'Bill Russell', number: 6})      	
      ])
      const [ Lakers, Bulls, Celtics ] = await Promise.all([
      	Team.create({name: 'Lakers', conference: 'Eastern'}),
      	Team.create({name: 'Bulls', conference: 'Eastern'}),
      	Team.create({name: 'Celtics', conference: 'Western'})      	
      ])
      SkyHook.setTeam(Lakers);
      MJ.setTeam(Bulls);
      Legend.setTeam(Celtics);
      expect(SkyHook.teamId).to.equal(1);
      expect(Legend.teamId).to.equal(3);
    })
  })

  describe('Team Model', ()=> {
  	it('has a name and conference', ()=> {
  	  return Promise.all([
      	Team.create({name: 'Rockets', conference: 'Western'}),
      	Team.create({name: 'Pacers', conference: 'Eastern'}),
      	Team.create({name: '76ers', conference: 'Eastern'})
      ])
      .then(([ Houston, Indiana, Philly ])=>{
      	expect(Houston.name).to.equal('Rockets');
      	expect(Philly.conference).to.equal('Eastern');
      })
  	})
  	it('has players', async()=> {
	  const [ Lakers, Bulls, Celtics ] = await Promise.all([
      	Team.create({name: 'Lakers', conference: 'Eastern'}),
      	Team.create({name: 'Bulls', conference: 'Eastern'}),
      	Team.create({name: 'Celtics', conference: 'Western'})      	
      ])
      const [ Magic, MJ, Pippen ] = await Promise.all([
		Player.create({name: 'Erving', number: 32}),
      	Player.create({name: 'Michael Jordan', number: 23}),
      	Player.create({name: 'Scottie', number: 33})
      ])  
      Magic.setTeam(Lakers);
      Pippen.setTeam(Bulls);
      MJ.setTeam(Bulls);
      Team.findAll({ where: { name: Bulls }, include: [Player] })
      .then((team)=> {
      	expect(team.players.length).to.equal(2);
      })
  	})
  })
})