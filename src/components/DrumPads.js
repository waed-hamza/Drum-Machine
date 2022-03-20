import { useEffect } from "react";
import "./DrumPads.css";

function DrumPads(props) {
  const keyCode = [81, 87, 69, 65, 83, 68, 90, 88, 67];

  const handleClick = (e) => {
    props.handleDisplay(e.target.id);

    e.target.classList.add("activeStyle");

    const sound = e.target.children[0];
    sound.currentTime = 0;
    sound.play();
    setTimeout(() => {
      e.target.classList.remove("activeStyle");
    }, 100);
  };

  const handlekeyPress = (e) => {
    if (props.power === false && keyCode.includes(e.keyCode)) {
      const sound = document.getElementById(e.key.toUpperCase());
      props.handleDisplay(sound.parentElement.id);

      sound.parentElement.classList.add("activeStyle");
      sound.currentTime = 0;
      sound.play();
      setTimeout(() => {
        sound.parentElement.classList.remove("activeStyle");
      }, 100);
    }
  };

  useEffect(() => {
    window.addEventListener("keydown", handlekeyPress);

    return () => {
      window.removeEventListener("keydown", handlekeyPress);
    };
  }, [props.power]);

  return (
    <div id="drum-pads-container">
      {props.bankNumber.map((el, idx) => {
        return (
          <button
            className={props.power ? "disable" : "drum-pad"}
            id={el.id}
            key={idx}
            onClick={handleClick}
            value={el.keyTrigger}
            disabled={props.power}
          >
            {el.keyTrigger}
            <audio src={el.url} id={el.keyTrigger} className="clip"></audio>
          </button>
        );
      })}
    </div>
  );
}

export default DrumPads;
