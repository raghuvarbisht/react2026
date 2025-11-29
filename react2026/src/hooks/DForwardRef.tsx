import { useRef } from "react"
import EForwardRef from "./EForwardRef";
const DForwardRef = () => {

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
            <EForwardRef ref={inputRef}/>
            <button onClick={updateInput}>Click on </button>
        </div>
    )

}

export default DForwardRef;