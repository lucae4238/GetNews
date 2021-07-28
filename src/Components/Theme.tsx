import { createTheme, ThemeProvider } from "@material-ui/core/styles";
import React, { useState } from "react";
import Switch from "@material-ui/core/Switch";
import App from "./App";
import { Typography, CssBaseline } from "@material-ui/core";
import { purple } from "@material-ui/core/colors";
import { blue } from "@material-ui/core/colors";

type palletI = 'dark' | 'light'

const SwitchTheme = () => {
  const [state, setState] = useState<boolean>(true);
  const palletType: palletI = state ? "dark" : "light";
  const handleThemeChange = () =>  setState(!state)

  const theme = createTheme({
    palette: {
      type: palletType,
      primary: state ? purple : blue,
      secondary: state ? purple : blue,
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />



      <div className="toggle">
        <Typography>
          {palletType === "light" ? "dark mode" : "light mode"}
        </Typography>
        <Switch checked={state} onChange={handleThemeChange} />
      </div>


      <App />
    </ThemeProvider>
  );
};

export default SwitchTheme;
