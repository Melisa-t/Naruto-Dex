import { characters } from "./characters.js";
import "./App.css";
import { useState } from "react";
export default function App() {
  const [characterList, setCharacterList] = useState(characters);
  const [score, setScore] = useState(0);
  const [bestScore, setBestScore] = useState(0);

  const gameOver =
    characterList.some((char) => Object.hasOwn(char, `isClicked`)) &&
    characterList.some((char) => char.isClicked === false);

  const shuffle = (array, id) => {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }

    setCharacterList(
      characterList.map((char) =>
        char.id === id ? { ...char, isClicked: !char.isClicked } : char
      )
    );

    if (!gameOver) setScore((s) => s + 1);
  };

  const characterEl = characterList.map((char) => (
    <div className="card-container">
      <img
        onClick={() => shuffle(characterList, char.id)}
        key={char.id}
        className="card-img"
        src={char.src}
        alt={"A picture of " + char.name}
      ></img>
      <div className="container">
        <h3>{char.name}</h3>
      </div>
    </div>
  ));

  return (
    <>
      {bestScore >= 12 ? (
        <div className="win-msg">
          <p>
            Congratulations!
            <br></br>
            Whoa, you got some memory.
          </p>
          <button
            onClick={() => {
              setCharacterList(characters);
              setScore(0);
              if (gameOver && score > bestScore) setBestScore(score);
            }}
            className="retry-btn"
          >
            Play Again?
          </button>
        </div>
      ) : gameOver ? (
        <div className="game-over-msg">
          <p>
            You clicked a character twice.
            <br></br>
            Your score was {score}.<br></br> Try again!
          </p>
          <button
            onClick={() => {
              setCharacterList(characters);
              setScore(0);
              if (gameOver && score > bestScore) setBestScore(score);
            }}
            className="retry-btn"
          >
            Let's Go!
          </button>
        </div>
      ) : (
        <>
          <div className="scores">
            <p>Current Score: {score}</p>
            <p>Best Score: {bestScore}</p>
          </div>
          <h1 className="primary-heading">Naruto Memo</h1>
          <p className="introductory-text">
            Welcome!
            <br></br>
            Choose each character only once. Let's see your memory game!
          </p>
          <div className="game-container">{characterEl}</div>
        </>
      )}
    </>
  );
}
