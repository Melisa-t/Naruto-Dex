import { characters } from "./characters.js";
import "./App.css";
export default function App() {
  return (
    <>
      <div className="card-container">
        {characters.map((char) => (
          <card>
            <img
              className="card-img"
              src={char.src}
              alt={"A picture of " + char.name}
            ></img>
            <div className="container">
              <h3>{char.name}</h3>
            </div>
          </card>
        ))}
      </div>
    </>
  );
}
