import { forwardRef } from "react";
const EForwardRef = ( _props: any, ref : any) => {

    return (
        <div>
            <input type="text" ref={ref}/>
        </div>
    )

}

export default forwardRef(EForwardRef);