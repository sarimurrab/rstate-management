
import React, {useContext} from 'react';
import CounterContext from './CounterContext.js'

const Child = () =>{
    
    let countervalue = useContext(CounterContext);
    console.log(countervalue);
    return(
        <div align="center">
            <h3>With ContextAPI, Value = {countervalue[0]}</h3>
            
            <button onClick ={()=>{
                countervalue[1](countervalue[0]+1)
            }}> Increase</button>

        </div>

    );
}

export default Child;