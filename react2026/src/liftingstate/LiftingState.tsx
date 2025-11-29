/*
Lifting State-
Moving state from a child component up to their nearest common parent, so that the 
data can be shared by multiple components.
This happens when two or more components need the same state, or when a parent must 
control data coming from a child.
Instead of each child having its own separate state, the parent owns the state and passes 
it down via props.
*/

import { useState } from "react";
import AComponent from "./AComponent";
import BComponent from "./BComponent";


const LiftingState = () => {
    const [name, setName] = useState('');

    return (
        <div>
            <div>
               Parent component name is {name}

            </div>
            
            <AComponent name={name} setName={setName}/>
            <BComponent name={name} setName={setName}/>            
        </div>
    )

}

export default LiftingState;