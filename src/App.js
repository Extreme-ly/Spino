import Navbar from "./components/Navbar";
import { createTheme } from '@mui/material/styles';
import { ThemeProvider } from "@emotion/react";


let theme = createTheme({
  palette: {
    common: {
      white: "#FEFBF3"
    },
    primary: {
      main: '#F9F3DF',
    },
    secondary: {
      main: '#edf2ff',
    },
  },
});


function App() {
  return (
    (
      <ThemeProvider theme={theme}>
        <Navbar />
      </ThemeProvider>
    )
  );
}

export default App;
