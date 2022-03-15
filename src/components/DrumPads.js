import BankOne from "./BankOne";
import BankTwo from "./BankTwo";
import "./DrumPads.css";

function DrumPads(props) {
  return (
    <div id="drum-pads-container">
      {props.bankNumber ? (
        <BankOne power={props.power} handleDisplay={props.handleDisplay} />
      ) : (
        <BankTwo power={props.power} handleDisplay={props.handleDisplay} />
      )}
    </div>
  );
}

export default DrumPads;
