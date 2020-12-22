import React, { useReducer } from 'react';

import counterReducer from './CounterReducer.js'

const Child2 = () =>{

    let [state, dispatch] = useReducer(counterReducer,0);
    
    
    return(
        <div align="center">
            <hr/>
            <h1>{state}</h1>
            <h3>With Reducer, Child2</h3>
            <button onClick={
                ()=> dispatch('INCREAMENT')
            }>Increase  Reducer</button>
        </div>
    );
}


export default Child2;