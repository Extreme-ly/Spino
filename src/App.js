import React from "react"

import { styled, alpha } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import InputBase from '@mui/material/InputBase';
import SearchIcon from '@mui/icons-material/Search';

import LightModeIcon from '@mui/icons-material/LightMode';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import { createTheme } from '@mui/material/styles';
import { ThemeProvider, useTheme } from "@emotion/react";

import Sidenav from './components/Sidenav';
import PageDisplay from './components/PageDisplay';
import { IconButton } from "@mui/material";

const getDesignTokens = (mode) => ({
  palette: {
    mode,
    ...(mode === 'light'
      ? {
          // palette values for light mode
          shape: {
            borderRadiusComponent: '20%'
          },
          common: {
            white: '#FEFBF3'
          },
          primary: {
            main: '#F9F3DF',
            bgColor: '#F8EDED',
            type: '#FFDAC7',
            typehover: '#FFA6D5'
          },
          secondary: {
            main: '#edf2ff',
          },
          shapeCustom: {
            radius: {
              unit: "20%"
            }
          }
        }
      : {
          // palette values for dark mode
          common: {
            white: '#FEFBF3'
          },
          primary: {
            main: '#F9F3DF',
            bgColor: '#303A52',
            type: '#6E85B2',
            typehover: '#4A47A3'
          },
          secondary: {
            main: '#edf2ff',
          },
          text: {
            primary: '#F3BDA1',
          },
        }),
  },
});

const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  color: alpha(theme.palette.common.white),
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginLeft: 0,
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(1),
    width: 'auto',
  },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      width: '12ch',
      '&:focus': {
        width: '20ch',
      },
    },
  },
}));

const ColorModeContext = React.createContext({ toggleColorMode: () => {} });

function Navbar() {
  const theme = useTheme();
  const colorMode = React.useContext(ColorModeContext);

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' }, ml: 2 }}
          >
            Spino
          </Typography>
          <IconButton sx={{ ml: 1 }} onClick={colorMode.toggleColorMode} color="inherit">
          { theme.palette.mode === 'dark' ? <DarkModeIcon /> : <LightModeIcon /> }
          </IconButton>
          <Search>
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Search…"
              inputProps={{ 'aria-label': 'search' }}
            />
          </Search>
        </Toolbar>
      </AppBar>
    </Box>
  );
}

function App() {

  const [mode, setMode] = React.useState('light');
  const colorMode = React.useMemo(
    () => ({
      toggleColorMode: () => {
        setMode((prevMode) => (prevMode === 'light' ? 'dark' : 'light'));
      },
    }),
    [],
  );

  const theme = React.useMemo(() => createTheme(getDesignTokens(mode)), [mode]);

  return (
    (
      <ColorModeContext.Provider value={colorMode}>
        <ThemeProvider theme={theme}>
          <Navbar />
          <Sidenav />
          <PageDisplay />
        </ThemeProvider>
      </ColorModeContext.Provider>
    )
  );
}

export default App;
