/*
 * useMemo Hook Example
 * Definition 1: useMemo is a React Hook that memoizes a computed value and returns the same reference across renders.
 * Definition 2: It prevents expensive computations from running on every render by caching the result.
 * Definition 3: The dependency array controls when the memoized value is recalculated.
 * Definition 4: It should be used for expensive calculations or when passing objects/arrays to optimized child components.
 */

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