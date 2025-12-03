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