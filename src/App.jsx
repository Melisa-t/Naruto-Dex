import { characters } from "./characters.js";

export default function App() {
  return (
    <>
      {characters.map((char) => (
        <img src={char.src}></img>
      ))}
    </>
  );
}
