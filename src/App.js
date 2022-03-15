import { useState } from "react";
import "./App.css";
import DrumPads from "./components/DrumPads";
import SwitchElement from "./components/SwitchElement";

function App() {
  const [bankNumber, setBankNumber] = useState(true);
  const [power, setPower] = useState(false);
  const [display, setDisplay] = useState("");

  const handleBankNumber = (e, val) => {
    setBankNumber(val);
  };

  const handlePower = () => {
    setPower(!power);
  };

  const handleDisplay = (e) => {
    setDisplay(e);
  };

  return (
    <div className="App">
      <h1>Drum Machine</h1>

      <div id="drum-machine">
        <DrumPads
          bankNumber={bankNumber}
          power={power}
          handleDisplay={handleDisplay}
        />

        <div id="display-container">
          <SwitchElement labelText="power" onChange={handlePower} />
          <div id="display">{display}</div>
          <SwitchElement labelText="Bank" onChange={handleBankNumber} />
        </div>
      </div>
    </div>
  );
}

export default App;
