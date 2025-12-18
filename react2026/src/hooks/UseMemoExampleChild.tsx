/*
 * useMemo Child Component Example
 * Definition 1: This component demonstrates expensive computations that are memoized to improve performance.
 * Definition 2: The percentageCalculate is wrapped in useMemo to prevent recalculation on every render.
 * Definition 3: The dependency array [props.marks] ensures the calculation only updates when marks change.
 * Definition 4: This pattern prevents unnecessary re-renders and expensive calculations when only other props change.
 */

import { useMemo } from "react";

const UseMemoExampleChild = (props: any) => {

    const percentageCalculate = useMemo(() => {
        console.log('calling percentageCalculate');
        return (Number(props.marks) / 500) * 100;
    }, [props.marks]);  

    return (
        <>
            <div>Marks: {props.marks}</div>
            <div>Subject: {props.subject}</div>
            <div>Percentage: {percentageCalculate}</div> {/* ✅ no () */}
        </>
    );
}

export default UseMemoExampleChild;
