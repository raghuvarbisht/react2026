import { useContext } from "react";
import { SubjectContext } from "./CreateContext";
const DContextComponent = () => {
    const subject = useContext(SubjectContext);
    return (
        <div style={{backgroundColor:"orange" , padding:"10px"}}>
            Component D
            <br/><br/>
            subject : {subject}
        </div>
    )

}

export default DContextComponent;