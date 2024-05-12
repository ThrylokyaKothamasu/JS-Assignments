const secretNumber = Math.floor(Math.random() * 100) + 1;
let attempts = 5;

  while (attempts > 0) {
    // Prompting the user to make a guess
    const guess = parseInt(prompt("Guess the number (between 1 and 100):"));

    // Validating the input
    if (isNaN(guess) || guess < 1 || guess > 100) {
      alert("Please enter a valid number between 1 and 100.");
      continue;
    }

    // Providing feedback based on the guess
    if (guess === secretNumber) {
      alert("Congratulations! You've guessed the number!");
      break; 
    } else if (guess < secretNumber) {
      alert("The number is high");
    } else {
      alert("The number is low");
    }

    attempts--;
  }

  // If all attempts are used up, display the correct number
  alert(`Game over! The correct number was ${secretNumber}.`);
