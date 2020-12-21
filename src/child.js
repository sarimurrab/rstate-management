
import React, {useContext} from 'react';
import CounterContext from './CounterContext.js'

const Child = () =>{
    
    let countervalue = useContext(CounterContext);
    console.log(countervalue);
    return(
        <div align="center">
            <h1>The value is {countervalue[0]}</h1>
            <hr/>
            <button onClick ={()=>{
                countervalue[1](countervalue[0]+1)
            }}> Increase</button>
&nbsp;&nbsp;&nbsp;
            <button onClick ={()=>{
                countervalue[1](countervalue[0]-1)
            }}> Decrease</button>

            <br/> <br/>
            <button onClick ={()=>{
                countervalue[1](0)
            }}> Reset</button>
        </div>

    );
}

export default Child;