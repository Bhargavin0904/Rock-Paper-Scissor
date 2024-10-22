import React, { useState } from "react";
import './App.css';

const choices = ["stone", "paper", "scissors"];
const images = {
  stone: "https://abdeali7.github.io/Rock-Paper-Scissors/images/rock.png",  // Replace with an actual image URL
  paper: "https://amanchauhan112.github.io/Luffy.github.io/public/img/StonePaperScissor/paper_final.png",  // Replace with an actual image URL
  scissors: "https://amanchauhan112.github.io/Luffy.github.io/public/img/StonePaperScissor/sciccors_final.png",  // Replace with an actual image URL
};

function App() {
  const [userChoice, setUserChoice] = useState("");
  const [computerChoice, setComputerChoice] = useState("");
  const [result, setResult] = useState("");
  const [userScore, setUserScore] = useState(0);
  const [computerScore, setComputerScore] = useState(0);

  const getResult = (user, computer) => {
    if (user === computer) return "It's a draw!";
    if (
      (user === "stone" && computer === "scissors") ||
      (user === "scissors" && computer === "paper") ||
      (user === "paper" && computer === "stone")
    ) {
      setUserScore(userScore + 1);
      return "You win!";
    } else {
      setComputerScore(computerScore + 1);
      return "Computer wins!";
    }
  };

  const handleClick = (choice) => {
    const computerRandomChoice = choices[Math.floor(Math.random() * 3)];
    setUserChoice(choice);
    setComputerChoice(computerRandomChoice);
    const gameResult = getResult(choice, computerRandomChoice);
    setResult(gameResult);
  };

  const handleRestart = () => {
    setUserChoice("");
    setComputerChoice("");
    setResult("");
    setUserScore(0);
    setComputerScore(0);
  };

  return (
    <div className="App">
      <h1>Stone Paper Scissors Game</h1>
      
      <div className="scoreboard">
        <h2>User Score: {userScore}</h2>
        <h2>Computer Score: {computerScore}</h2>
      </div>

      <div className="choices">
        <button onClick={() => handleClick("stone")}>
          <img src={images.stone} alt="Stone" />
        </button>
        <button onClick={() => handleClick("paper")}>
          <img src={images.paper} alt="Paper" />
        </button>
        <button onClick={() => handleClick("scissors")}>
          <img src={images.scissors} alt="Scissors" />
        </button>
      </div>

      <div className="results">
        <h2>Your Choice: {userChoice}</h2>
        <h2>Computer's Choice: {computerChoice}</h2>
        <h2>Result: {result}</h2>
      </div>

      <button className="restart-btn" onClick={handleRestart}>
        Restart Game
      </button>
    </div>
  );
}

export default App;
