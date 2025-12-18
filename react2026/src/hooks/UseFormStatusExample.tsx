/*
 * useFormStatus Hook Example
 * Definition 1: useFormStatus is a React Hook from react-dom that provides information about form submissions.
 * Definition 2: It returns the pending state of a form submission and the form data being submitted.
 * Definition 3: It must be used inside a form element and is designed for Server Components and Actions.
 * Definition 4: It allows you to show loading states, disable buttons, or display feedback during form submission.
 */

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