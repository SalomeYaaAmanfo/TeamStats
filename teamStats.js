const team = {
  _players:[
    {firstName: 'Bentil',
  lastName: 'Kumi',
  age: 25},{
  firstName: 'Josh',
  lastName: 'Heron',
  age: 20},{firstName: 'Kofi',
  lastName: 'Baah',
  age: 18}
  ],
  _games: [
    {
  opponent: 'Kotoko',
  teamPoints: 50,
  opponentPoints: 35
},
{
  opponent: 'Hearts',
  teamPoints: 33,
  opponentPoints: 15
},
{
  opponent: 'Wise11',
  teamPoints: 60,
  opponentPoints: 15
}
  ],
  get players () {
    return this._players
  },
  get games (){
    return this._games
  },
  addPlayer (firstName, lastName, age) {
    let player = {
      firstName: firstName,
      lastName: lastName,
      age: age
    }
    this.players.push(player);
  },
  addGame (opponentName,teamPoints,opponentPoints){
    let game = {
      opponent: opponentName,
      teamPoints: teamPoints,
      opponentPoints: opponentPoints
    }
    this.games.push(game);
  }
}
team.addPlayer('Steph', 'Curry', 28)
team.addPlayer('Lisa', 'Leslie', 44)
team.addPlayer('Bugs' ,'Bunny',76)
console.log(team.players)

team.addGame('Manchester', 55 ,30)
team.addGame('Liverpool', 50 ,20)
team.addGame('TakoradiTeam', 15 ,8)
console.log(team.games)

