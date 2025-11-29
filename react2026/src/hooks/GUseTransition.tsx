import { useTransition } from "react";

const GUseTransition = ()=> {

    const [transition, setTransition] = useTransition();

    const handleSubmit = () => {
        setTransition( async () => {
            await new Promise( (res) => setTimeout(res,5000));
        })
    }


    return (
        <div>
            <div v-if="transition"> loading....</div>
            <button disabled={transition} onClick={handleSubmit}>Click me</button>
        </div>
    )

}

export default GUseTransition;