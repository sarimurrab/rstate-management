import React from 'react'
import './App.css';
import Lunch from './lunch.js'


function App() {
  return (
    <div className="App">
    <Lunch dish1="Kheer" dish2="Puri"/>
    
    <Lunch dish1="Halwa" dish2="Salad"/>
    </div>
  );
}

export default App;
