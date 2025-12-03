import { forwardRef } from "react";
const ForwardRefExampleChild = ( _props: any, ref : any) => {

    return (
        <div>
            <input type="text" ref={ref}/>
        </div>
    )

}

export default forwardRef(ForwardRefExampleChild);