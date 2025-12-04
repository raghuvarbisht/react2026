
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