/*
 * ForwardRef Child Component Example
 * Definition 1: This component receives a ref as its second parameter using forwardRef.
 * Definition 2: The ref can be used to access DOM elements or imperative methods from parent components.
 * Definition 3: forwardRef is wrapped around the component export to enable ref forwarding.
 * Definition 4: It allows parent components to directly manipulate child DOM elements when necessary.
 */

import { forwardRef } from "react";
const ForwardRefExampleChild = ( _props: any, ref : any) => {

    return (
        <div>
            <input type="text" ref={ref}/>
        </div>
    )

}

export default forwardRef(ForwardRefExampleChild);