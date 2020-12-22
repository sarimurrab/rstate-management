import React, {useState} from 'react'
import './App.css';
import CounterContext from './CounterContext.js';
import Parent from './parent.js'


function App() {

  let countArray = useState(0);
  return (

        <CounterContext.Provider value={countArray}>

          <div align="center">
          <h1>State Management</h1>
          <Parent />
          
          </div>
        </CounterContext.Provider>
  );
}

export default App;