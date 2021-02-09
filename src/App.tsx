import React from 'react';
import {ThemeProvider, createMuiTheme} from '@material-ui/core';
import AppRoutes from './routes/app.routes'
import NavBar from './components/navBar';


function App() {
  const theme = createMuiTheme({
    palette:{
      primary:{
        main: '#34c1b9',        
      },
      secondary:{
        main: '#ff4a4b',
      }
    }
  })


  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <NavBar/>
        <AppRoutes/>
      </ThemeProvider>
    </div>
  );
}

export default App;
