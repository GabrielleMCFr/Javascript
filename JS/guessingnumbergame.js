let {testNumber} = require('./game.js');

process.stdout.write("I'm thinking of a number from 1 through 10. What do you think it is? \n(Write \"quit\" to give up.)\n\nIs the number ... ");

let playGame = (userInput) => {
  //Input read through the terminal is received as a Buffer object with a new line character at the end, so we’ve converted it to a string and trimmed off the unnecessary new line character.
  let input = userInput.toString().trim();
	testNumber(input);
};

// ask for user input in terminal
process.stdin.on('data', playGame)