/*
 * useState Hook Example
 * Definition 1: useState is a React Hook that lets you add state to functional components.
 * Definition 2: It returns an array with a state variable and a function to update it.
 * Definition 3: The state is mutable and triggers re-render when updated using setState.
 * Definition 4: Multiple useState hooks can be used in a single component for different state variables.
 */

import { useState } from "react";
const UseStateExample  = () => {
    const [counter, setCounter] = useState(0)
    const  increaseCounter = () => {
        setCounter(counter + 1)
    }
    
    return (
        <div>
            <h2>Counter value : {counter}</h2>
            <button onClick={increaseCounter}> Increased Counter</button>
            <button 
                onClick={()=>counter ? setCounter(counter - 1) : 0}> 
                Decrease Counter
            </button>
        </div>

    )
}

export default UseStateExample;