import { createTheme } from '@mui/material/styles';
import { ThemeProvider } from "@emotion/react";

import Navbar from "./components/Navbar";
import Sidenav from './components/Sidenav';
import PageDisplay from './components/PageDisplay';


let theme = createTheme({
  palette: {
    shape: {
      borderRadiusComponent: '20%'
    },
    common: {
      white: '#FEFBF3'
    },
    primary: {
      main: '#F9F3DF',
      pink: '#FFDAC7',
      pinkhover: '#FFADAD'
    },
    secondary: {
      main: '#edf2ff',
    },
    shapeCustom: {
      radius: {
        unit: "20%"
      }
    }
  },
});

function App() {
  return (
    (
      <ThemeProvider theme={theme}>
        <Navbar />
        <Sidenav />
        <PageDisplay/>
      </ThemeProvider>
    )
  );
}

export default App;
