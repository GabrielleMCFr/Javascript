const team = {
    _players: [{firstName: 'Dean', lastName: 'Winchester', age: 30}, 
              {firstName: 'Sam', lastName: 'Winchester', age: 26},
              {firstName: 'Castiel', lastName: 'Novak', age: 35},],
    _games: [{opponent: 'The Darkness', teamPoints: 30, opponentPoints: 45},
            {opponent: 'Abaddon', teamPoints: 50, opponentPoints: 27},
            {opponent: 'Lucifer', teamPoints: 42, opponentPoints: 43},],
    get players() {
      if (this._players) {
        return this._players
      }
      else {
        return 'No players registered.'
      }
    },
    get games() {
      if (this._games) {
        return this._games
      }
      else {
        return 'No games registered.'
      }
    },
    addPlayer(firstName, lastName, age) {
      let player = {
        firstName: firstName,
        lastName: lastName,
        age: age
      }
      this._players.push(player)
    },
    addGame(opponent, teamPoints, opponentPoints) {
      let game = {
        opponent: opponent, teamPoints: teamPoints, opponentPoints: opponentPoints
      }
      this._games.push(game)
    }
  };
  
  // test add player
  team.addPlayer('Charlie', 'Bradburry', 29)
  console.log(team.players)
  
  // test add game
  team.addGame('Crowley', 41, 29),
  team.addGame('Alastair', 56, 45),
  console.log(team.games)