const express = require('express');
const app = express();
const db = require('./db');
const { Player, Team, Country } = db.models;

const PORT = process.env.PORT || 3000;

const init = ()=> {
  db.syncAndSeed();
  app.listen(PORT, ()=> {
  	console.log(`it's....ALIVE`);
  })
}

init();

app.get('/nba/players', (req, res, next)=> {
  Player.findAll({
  	include: [ Team ]
  })
  .then((players)=>{res.send(players)})
})