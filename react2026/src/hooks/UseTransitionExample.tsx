/*
 * useTransition Hook Example
 * Definition 1: useTransition is a React Hook that lets you update state without blocking the UI.
 * Definition 2: It returns a pending flag and a function to wrap state updates in a transition.
 * Definition 3: During a transition, the UI remains responsive and can show pending states.
 * Definition 4: It is useful for non-urgent updates like search results, filters, or long computations.
 */

import { useTransition } from "react";

const GUseTransition = ()=> {

    const [transition, setTransition] = useTransition();

    const handleSubmit = () => {
        setTransition( async () => {
            await new Promise( (res) => setTimeout(res,3000));
        })
    }


    return (
        <div>
            {transition ? <div > loading....</div> : null}
            <button disabled={transition} onClick={handleSubmit}>Click me</button>
        </div>
    )

}

export default GUseTransition;