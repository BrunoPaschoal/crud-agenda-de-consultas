import React from 'react';
import {ThemeProvider, createMuiTheme} from '@material-ui/core';
import AppRoutes from './routes/app.routes'
import NavBar from './components/navBar';
import {BrowserRouter} from 'react-router-dom';



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
        <BrowserRouter>
          <ThemeProvider theme={theme}>
            <NavBar/>
            <AppRoutes/>
          </ThemeProvider>
        </BrowserRouter>  
    </div>
  );
}

export default App;
