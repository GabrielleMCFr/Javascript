const getUserChoice = userInput => {
    userInput = userInput.toLowerCase();
    if (userInput === "rock" || userInput === "paper" || userInput === "scissors" || userInput === "bomb") {
      return userInput;
    }
    else {
      console.log('Must be rock, paper or scissors.')
    }
  };
  
  function getComputerChoice() {
    // random nb between 0 et 2
    let num = Math.floor(Math.random() * 3);
  
    switch (num) {
      case 0:
        return 'rock';
      case 1:
        return 'paper';
      case 2:
        return 'scissors';
    }
  };
  
  const determineWinner = (userChoice, computerChoice) => {
    if (userChoice === computerChoice) {
      console.log("Tie!")
    }
    else {
      if (userChoice === "rock") {
        if (computerChoice === "paper") {
          console.log("You chose rock against paper. You lost!")
        }
        else {
          console.log("You chose rock against scissors. You win!")
        }
      }
      else if (userChoice === "paper") {
        if (computerChoice === "scissors") {
          console.log("You chose paper against scissors. You lost!")
        }
        else {
          console.log("You chose paper against rock. You win!")
        }
      }
      else if (userChoice === "scissors") {
        if (computerChoice === "rock") {
          console.log(" You chose scissors against rock. You lost!")
        }
        else {
          console.log("You chose scissors against paper. You win!")
        }
      }
  
      else if (userChoice === "bomb") {
        console.log("You win, you cheater.")
      }
    }
  }
  
  const playGame = () => {
    let userChoice = getUserChoice('bomb');
    let computerChoice = getComputerChoice();
    console.log(`User choice: ${userChoice}`);
    console.log(`Computer choice: ${computerChoice}`);
    determineWinner(userChoice, computerChoice);
  }
  
  playGame();
  