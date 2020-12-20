import React, {useState} from 'react'
import './App.css';
import {Message} from './message.js'


function App() {

  let[count, setCount] = useState(0)
  let[isMorning, setMorning] = useState(false);


  return (
    <div className={`box ${isMorning? 'dayLight' : ''}`} align="center">

    <h1>Day Time = {isMorning?'Morning':'Night'}</h1>
    <Message count = {count}/>
    <hr/>
    <button onClick={
      ()=> setCount(count+1)
      }>Update Counter</button>

    <button onClick={
      ()=> setMorning(!isMorning)
    }>Convert Day</button>
    </div>
  );
}

export default App;
