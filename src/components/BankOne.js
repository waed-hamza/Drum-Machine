import { useEffect } from "react";
import "./DrumPads.css";
const BankOne = (props) => {
  const keyCode = [81, 87, 69, 65, 83, 68, 90, 88, 67];
  const bankOne = [
    {
      keyCode: 81,
      keyTrigger: "Q",
      id: "Heater-1",
      url: "https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3",
    },
    {
      keyCode: 87,
      keyTrigger: "W",
      id: "Heater-2",
      url: "https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3",
    },
    {
      keyCode: 69,
      keyTrigger: "E",
      id: "Heater-3",
      url: "https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3",
    },
    {
      keyCode: 65,
      keyTrigger: "A",
      id: "Heater-4",
      url: "https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3",
    },
    {
      keyCode: 83,
      keyTrigger: "S",
      id: "Clap",
      url: "https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3",
    },
    {
      keyCode: 68,
      keyTrigger: "D",
      id: "Open-HH",
      url: "https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3",
    },
    {
      keyCode: 90,
      keyTrigger: "Z",
      id: "Kick-n'-Hat",
      url: "https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3",
    },
    {
      keyCode: 88,
      keyTrigger: "X",
      id: "Kick",
      url: "https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3",
    },
    {
      keyCode: 67,
      keyTrigger: "C",
      id: "Closed-HH",
      url: "https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3",
    },
  ];

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
    <>
      {bankOne.map((el, idx) => {
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
    </>
  );
};

export default BankOne;
