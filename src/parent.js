import React from 'react';
import Child from './child.js'
import Child2 from './child2.js';
import Child3 from './child3.js';


const Parent = () => {
    return(
        <div>
        <Child />
        <Child2 />
        <Child3 />
        </div>
    );
}

export default Parent;