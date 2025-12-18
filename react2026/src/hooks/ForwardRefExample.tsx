/*
 * ForwardRef Hook Example
 * Definition 1: forwardRef is a React API that allows functional components to receive refs from parent components.
 * Definition 2: By default, functional components do not accept ref props; forwardRef enables this functionality.
 * Definition 3: It is commonly used with useRef to access DOM elements directly from parent components.
 * Definition 4: The ref parameter is the second argument in the component function, after props.
 */

import { useRef } from "react"
import ForwardRefExampleChild from "./ForwardRefExampleChild";
const ForwardRefExample = () => {

    const inputRef = useRef<HTMLInputElement | null>(null);
    const updateInput = () => {
        if(inputRef.current){
            inputRef.current.value = "100";
            inputRef.current.focus();
            inputRef.current.style.color= "red";
        }        
    }

    return (
        <div>
            <h1>FordRefExample</h1>
            <ForwardRefExampleChild ref={inputRef}/>
            <button onClick={updateInput}>Click on </button>
        </div>
    )

}

export default ForwardRefExample;