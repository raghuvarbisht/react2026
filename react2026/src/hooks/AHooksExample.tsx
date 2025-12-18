/*
 * Hooks Container Example
 * Definition 1: This component serves as a container to import and display various React Hook examples.
 * Definition 2: It demonstrates how different hooks can be integrated and used within a single component.
 * Definition 3: Some imports are commented out to selectively demonstrate specific hooks in the UI.
 * Definition 4: This file acts as a central hub for testing and viewing all React Hook implementations.
 */

/*
import UseStateExample from "./UseStateExample";
import UseEffectExample from "./UseEffectExample";
import UseRefExample from "./UseRefExample";
import ForwardRefExample from "./ForwardRefExample";
import ForwardRefExampleChild from "./ForwardRefExampleChild";
import UserformStatusExample from "./UserformStatusExample";
import UseTransitionExample from "./UseTransitionExample";
*/

import UseCallbackExample from "./UseCallbackExample";
import UseMemoExample from "./UseMemoExample";


const AHooksExample = () => {

    return (
        <>
        {
            /*
                <UseStateExample/>
                <UseEffectExample/>
                <UseRefExample/>
                <ForwardRefExample/>
                <ForwardRefExampleChild/>
                <UserformStatusExample/>
                <UseTransitionExample/>
                <UseMemoExample/>
             */
        }
        
        <UseCallbackExample/>
        </>
        
    )

}

export default AHooksExample;