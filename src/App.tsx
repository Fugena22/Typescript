import { Box } from "@mui/material";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import ToggleTheme from "./components/ToggleTheme/ToggleTheme";
import ProgressContextProvider from "./contexts/ProgressContext/ProgressContext";
import ThemeContextProvider from "./contexts/ThemeContext/ThemeContext";

function App() {
  return (
    <ThemeContextProvider>
      <ProgressContextProvider>
        <Box sx={{ minHeight: "100vh" }}>
          <Navbar />
          <ToggleTheme />
        </Box>
      </ProgressContextProvider>
    </ThemeContextProvider>
  );
}

export default App;
