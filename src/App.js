import React, {useState} from 'react'
import './App.css';
import CounterContext from './CounterContext.js';
import Parent from './parent.js'


function App() {

  let countArray = useState(0);
return (

        <CounterContext.Provider value={countArray}>

          <div >

          <Parent />
          
          </div>
        </CounterContext.Provider>
  );
}

export default App;