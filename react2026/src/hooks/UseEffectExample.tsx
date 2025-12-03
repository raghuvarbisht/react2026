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