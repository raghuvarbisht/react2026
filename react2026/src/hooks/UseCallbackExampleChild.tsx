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