import React from 'react';

function Lunch(props){
    return(
        <div>
        <h1>My name is Sarim Chaudhary.</h1>
        <p> Today I will eat {props.dish1} with {props.dish2}</p>
        </div>
    )
}

export default Lunch;