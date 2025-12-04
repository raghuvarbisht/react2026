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
