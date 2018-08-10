const express = require('express');
const app = express();
const db = require('./db');
const { Player, Team, Country } = db.models;
const path = require('path');


const PORT = process.env.PORT || 3000;

app.use(express.static(path.join(process.cwd(), 'public')));

const indexFile = path.join(process.cwd(), './public/index.html');
const mainFile = path.join(process.cwd(), './public/main.js');

const init = ()=> {
  db.syncAndSeed();
  // app.listen(PORT, ()=> {
  // 	console.log(`it's....ALIVE`);
  // })
}

init();

// app.get('/', (req, res, next) => {
//   res.status(200).sendFile(indexFile);
// })

app.get('/nba/players', (req, res, next)=> {
  Player.findAll({
  	include: [ Team ]
  })
  .then((players)=>{res.send(players)})
})

app.get('/nba/teams', (req, res, next)=> {
  Team.findAll()
  .then((teams)=> {res.send(teams)})
})


app.listen(PORT);