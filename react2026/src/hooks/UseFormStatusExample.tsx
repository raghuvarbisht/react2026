// useFormStatus work with form only
import {  useFormStatus } from "react-dom";

const UseFormStatusExample = () => {

    const CustomUserForm = () => {
        const {pending} = useFormStatus();
        console.log('pending'+ pending)
        return (
            <div>
                <input type="text" placeholder="Enter name"/>
                <br/><br/>
                <input type="text" placeholder="Enter password"/>
                <br/><br/>
                <button disabled={pending}>{pending ? 'Submitting' : 'Submit'}  </button>
            </div>
        )
    }
    

    const handleSubmit = async () => {
        await new Promise( res => setTimeout(res,2000));
    }

    return (
        <div>
            <form action={handleSubmit}>
                <CustomUserForm/>                
            </form>
        </div>
    )
}

export default UseFormStatusExample;