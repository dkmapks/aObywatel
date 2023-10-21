import { ThemeProvider } from "@mui/material";
import "./App.css";
import customTheme from "./customTheme";
import PetitionButton from "./components/PetitionButton";

function App() {
  return (
    <ThemeProvider theme={customTheme}>
      <PetitionButton>
        <p>Test</p>
      </PetitionButton>
    </ThemeProvider>
  );
}

export default App;
