import React from 'react';
import './App.css';
import Header from './container/Header';

function App(props) {
  return (
    <div className="App">
      <Header/>
      {props.children}  
    </div>
  );
}

export default App;
