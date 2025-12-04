import { useState } from "react";
import UseMemoExampleChild from "./UseMemoExampleChild.tsx";

const UseMemoExample = () => {
    const [marks, setMarks] = useState("");
    const [subject, setSubject] = useState("");

    return (
        <div>
            <div>
                Number: <input 
                value={marks}
                onChange={(event) => setMarks(event.target.value)}
                type="number" 
                placeholder="type number"/>
            </div>
            <div>
                Subject: <input 
                value={subject}
                onChange={(event) => setSubject(event.target.value)}
                type="text" 
                placeholder="type number"/>
            </div>
            <UseMemoExampleChild marks={marks} subject={subject}/>
        </div>
    )
}

export default UseMemoExample;