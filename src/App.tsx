import React from 'react';
import './App.scss';
import MainForm from './components/mainForm';
import {ThemeProvider, createMuiTheme} from '@material-ui/core';

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
        <MainForm/>
      </ThemeProvider>
    </div>
  );
}

export default App;
