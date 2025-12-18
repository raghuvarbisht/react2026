/*
 * useEffect Hook Example
 * Definition 1: useEffect is a React Hook for performing side effects in functional components.
 * Definition 2: It replaces lifecycle methods like componentDidMount, componentDidUpdate, and componentWillUnmount.
 * Definition 3: The dependency array controls when the effect runs - empty array runs once, undefined runs every render.
 * Definition 4: Return a cleanup function to perform cleanup before the component unmounts or effect runs again.
 */

import { useState , useEffect } from "react";

const UseEffectExample  = () => {
    const [counter, setCounter] = useState(0)
    const [data, setData] = useState(0)
    
 
    useEffect(()=>{
        counterFuntion();
    },[counter])

    const counterFuntion = () => {
        console.log('counter value = ' + counter);
    }

    const dataFuntion = () => {
        console.log('data value = ' + data);
    }
    
    dataFuntion();


    useEffect(()=>{
        return () => {
            console.log('unmount phase only');
        }
    },[])

    return (
        <div>
            <h2>Counter value : {counter}</h2>
            <button onClick={() => setCounter(counter + 1)}> 
                Increased Counter {counter}
            </button>

            <h2>Data value : {data}</h2>
            <button onClick={() => setData(data + 1)}> 
                Data Value {data}
            </button>
           
        </div>

    )
}

export default UseEffectExample;