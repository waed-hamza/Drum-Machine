import { useEffect } from "react";
import "./DrumPads.css";
const BankTwo = (props) => {
  const keyCode = [81, 87, 69, 65, 83, 68, 90, 88, 67];
  const bankTwo = [
    {
      keyCode: 81,
      keyTrigger: "Q",
      id: "Chord-1",
      url: "https://s3.amazonaws.com/freecodecamp/drums/Chord_1.mp3",
    },
    {
      keyCode: 87,
      keyTrigger: "W",
      id: "Chord-2",
      url: "https://s3.amazonaws.com/freecodecamp/drums/Chord_2.mp3",
    },
    {
      keyCode: 69,
      keyTrigger: "E",
      id: "Chord-3",
      url: "https://s3.amazonaws.com/freecodecamp/drums/Chord_3.mp3",
    },
    {
      keyCode: 65,
      keyTrigger: "A",
      id: "Shaker",
      url: "https://s3.amazonaws.com/freecodecamp/drums/Give_us_a_light.mp3",
    },
    {
      keyCode: 83,
      keyTrigger: "S",
      id: "Open-HH",
      url: "https://s3.amazonaws.com/freecodecamp/drums/Dry_Ohh.mp3",
    },
    {
      keyCode: 68,
      keyTrigger: "D",
      id: "Closed-HH",
      url: "https://s3.amazonaws.com/freecodecamp/drums/Bld_H1.mp3",
    },
    {
      keyCode: 90,
      keyTrigger: "Z",
      id: "Punchy-Kick",
      url: "https://s3.amazonaws.com/freecodecamp/drums/punchy_kick_1.mp3",
    },
    {
      keyCode: 88,
      keyTrigger: "X",
      id: "Side-Stick",
      url: "https://s3.amazonaws.com/freecodecamp/drums/side_stick_1.mp3",
    },
    {
      keyCode: 67,
      keyTrigger: "C",
      id: "Snare",
      url: "https://s3.amazonaws.com/freecodecamp/drums/Brk_Snr.mp3",
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
      {bankTwo.map((el, idx) => {
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

export default BankTwo;
