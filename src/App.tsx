import { JSX } from "react";
import { ColorModeContext, useMode } from "./theme";
import { ThemeProvider } from "@mui/material";

export default function App(): JSX.Element {
  const [theme, colorMode] = useMode();

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <div className="app">
        </div>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}
