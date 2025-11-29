import { useContext } from "react";
import { SubjectContext } from "./CreateContext";
import DContextComponent from "./DcontextComponent";
const CComponent = () => {
    const subject = useContext(SubjectContext);
    return (
        <div style={{backgroundColor:"orange" , padding:"10px"}}>
            Component C
            <br/><br/>
            subject : {subject}
            <DContextComponent/>
        </div>
    )

}

export default CComponent;