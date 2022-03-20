import { useState } from "react";
import "./App.css";
import DrumPads from "./components/DrumPads";
import SwitchElement from "./components/SwitchElement";
import { bankOne, bankTwo } from "./data/BanksData";

function App() {
  const [bankNumber, setBankNumber] = useState(true);
  const [power, setPower] = useState(false);
  const [display, setDisplay] = useState("");

  const handleBankNumber = () => {
    setBankNumber(!bankNumber);
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
          bankNumber={bankNumber ? bankOne : bankTwo}
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
