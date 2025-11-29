import { useTransition } from "react";

const GUseTransition = ()=> {

    const [transition, setTransition] = useTransition();

    const handleSubmit = () => {
        setTransition( async () => {
            await new Promise( (res) => setTimeout(res,3000));
        })
    }


    return (
        <div>
            {transition ? <div > loading....</div> : null}
            <button disabled={transition} onClick={handleSubmit}>Click me</button>
        </div>
    )

}

export default GUseTransition;