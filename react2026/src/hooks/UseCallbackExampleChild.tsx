/*
 * useCallback Child Component Example
 * Definition 1: This component demonstrates how React.memo prevents unnecessary re-renders when callbacks are memoized.
 * Definition 2: It receives a memoized callback function as a prop from the parent component.
 * Definition 3: Without useCallback in the parent, this component would re-render every time the parent re-renders.
 * Definition 4: React.memo is used alongside useCallback to optimize child component performance.
 */

import React from "react";
const UseCallbackExampleChild = ({incrementCounter} : any) => {

    console.log('UseCallbackExampleChild calling')
    return (
        <div>
            <button onClick={incrementCounter}> Click me</button>
        </div>
    )
}

export default React.memo(UseCallbackExampleChild);