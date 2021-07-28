import { createTheme, ThemeProvider } from "@material-ui/core/styles";
import React, { useState } from "react";
import Switch from "@material-ui/core/Switch";
import App from "./App";
import { Typography, CssBaseline } from "@material-ui/core";
import { purple } from "@material-ui/core/colors";
import { blue } from "@material-ui/core/colors";

interface Props {}

const SwitchTheme = (props: Props) => {
  const [darkState, setDarkState] = useState(true);
  const palletType = darkState ? "dark" : "light";
  const theme = createTheme({
    palette: {
      type: palletType,
      primary: darkState ? purple : blue,
      secondary: darkState ? purple : blue,
    },
  });

  const handleThemeChange = () => {
    setDarkState(!darkState);
  };

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <div className="toggle">
        <Typography>
          {palletType === "light" ? "dark mode" : "light mode"}
        </Typography>
        <Switch checked={darkState} onChange={handleThemeChange} />
      </div>
      <App />
    </ThemeProvider>
  );
};

export default SwitchTheme;
