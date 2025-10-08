import { characters } from "./characters.js";
import "./App.css";
import { useState } from "react";
import Footer from "./Footer.jsx";
import Card from "./Card.jsx";
import Game from "./Game.jsx";
import Player from "./Player.jsx";

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
    <Card char={char} characterList={characterList} shuffle={shuffle}></Card>
  ));

  return (
    <>
      <Game
        characterEl={characterEl}
        characters={characters}
        score={score}
        gameOver={gameOver}
        bestScore={bestScore}
        setBestScore={setBestScore}
        setScore={setScore}
        setCharacterList={setCharacterList}
      ></Game>
      <Footer></Footer>
      <Player gameOver={gameOver}></Player>
    </>
  );
}
