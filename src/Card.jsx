export default function Card({ char, characterList, shuffle }) {
  return (
    <>
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
    </>
  );
}
