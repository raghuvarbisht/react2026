import { useState } from "react";
const HideShow = () => {
    const [display ,setDisplay] =useState(false)

    return (
        <div>
            <h1>show hide component</h1>

            <button onClick={() => setDisplay(!display)}> Toggle Me</button>
            
            {
                display ? 
                <div>show div</div> :
                null 
            }
            
        </div>
    )
}

export default HideShow;