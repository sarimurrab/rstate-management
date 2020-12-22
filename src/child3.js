import React, { useReducer } from 'react'
import Child from './child'
import sarim from './counterReducerTwo.js'

const Child3 = () => {

    let[pehli,dusri] = useReducer(sarim,1);

    return(
        <div align="center">
        <hr/>



        <h2>{pehli}</h2>
        <h3>With Reducer, Child3</h3>

        <button onClick={
            ()=>dusri('codeword')
        }>Child3 Button</button>
        

        </div>
    )
}
export default Child3;