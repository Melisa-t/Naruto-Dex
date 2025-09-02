import { characters } from "./characters.js";
import "./App.css";
import { useState } from "react";
export default function App() {
  const [characterList, setCharacterList] = useState(characters);
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
  };

  const characterEl = characterList.map((char) => (
    <div>
      <img
        onClick={() => {
          shuffle(characterList, char.id);
        }}
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
      {gameOver ? (
        <div className="game-over-msg">
          <h1>
            You clicked a character already clicked. <br></br>Try again!
          </h1>
          <button
            onClick={() => {
              setCharacterList(characters);
            }}
          >
            Again!
          </button>
        </div>
      ) : (
        <div className="card-container">{characterEl}</div>
      )}
    </>
  );
}
