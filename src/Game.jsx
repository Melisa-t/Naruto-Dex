export default function Game({
  characters,
  score,
  gameOver,
  bestScore,
  characterEl,
  setBestScore,
  setScore,
  setCharacterList,
}) {
  return (
    <>
      {score >= characters.length ? (
        <div className="win-msg">
          <p>
            Whoa, congratulations!
            <br></br>
            You got some memory.
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
          <h1 className="primary-heading">Naruto Dex</h1>
          <p className="introductory-text">
            Choose each character only once.
            <br></br>
            Let's see your memory game!
          </p>
          <div className="game-container">{characterEl}</div>{" "}
        </>
      )}{" "}
    </>
  );
}
