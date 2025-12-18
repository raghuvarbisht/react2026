
/*
 * useCallback Hook Example
 * Definition 1: useCallback is a React Hook that memoizes a callback function and returns the same reference across renders.
 * Definition 2: It prevents unnecessary re-renders of child components that receive the callback as a prop.
 * Definition 3: The dependency array specifies when the callback should be recreated with new references.
 * Definition 4: Without useCallback, a new function is created on every render, causing child components to re-render unnecessarily.
 */

import { useState ,useCallback} from "react";
import UseCallbackExampleChild from "./UseCallbackExampleChild";

const UseCallbackExample = () => {

    const [count, setCount] = useState(0)
   /* without usecallback child componenet render every time
    const incrementCounter = () =>{
       setCount(prevCount => prevCount + 1);
    }
    */
    //with usecallback child componenet not render if 
    const incrementCounter = useCallback(() =>{
       setCount(prevCount => prevCount + 1);
    },[])
    

    

    return (
        <>
        <div>UseCallbackExample</div>
        <div>count : {count}</div>
        <UseCallbackExampleChild incrementCounter={incrementCounter}/>
        </>
    )
}

export default UseCallbackExample;