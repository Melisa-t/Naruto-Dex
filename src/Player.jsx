import { useRef, useState } from "react";

export default function Player({ gameOver }) {
  const [isAudioPlaying, setIsAudioPlaying] = useState(false);
  const audioEl = useRef(null);
  return (
    <>
      <img
        className="speaker"
        src={
          !isAudioPlaying
            ? `../src/assets/img/mute.png`
            : `../src/assets/img/speaker.png`
        }
        alt="play"
        onClick={() => {
          if (!isAudioPlaying && !gameOver) {
            audioEl.current.play();
            audioEl.current.volume = 0.2;
          }
          if (isAudioPlaying) audioEl.current.volume = 0;

          setIsAudioPlaying((prev) => !prev);
        }}
      />
      <audio ref={audioEl} loop autoPlay>
        <source src="../src/assets/music/naruto-song.mp3" type="audio/mp3" />
      </audio>
    </>
  );
}
