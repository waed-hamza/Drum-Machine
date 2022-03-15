import { FormControlLabel, Switch } from "@mui/material";

const SwitchElement = (props) => {
  return (
    <>
      <FormControlLabel
        control={
          <Switch color="secondary" defaultChecked onChange={props.onChange} />
        }
        label={props.labelText}
        style={{
          backgroundColor: "#0f0f0f",
          padding: "5px",
          margin: "0px",
          width: "110px",
        }}
      />
    </>
  );
};

export default SwitchElement;
