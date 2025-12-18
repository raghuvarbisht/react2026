//npm install react-hook-form
//npm install -D @hookform/devtools
import { useForm } from "react-hook-form";
import {DevTool} from "@hookform/devtools";


let renderCount = 0;
type UserFormValues = {
    username: string
    email: string
    city: string
}
export const UserForm = () => {
    const form = useForm<UserFormValues>();
    const {register , control , handleSubmit} = form;
    //const {name,ref,onChange,onBlur} = register("username")

    const onSubmit = (data : UserFormValues) => {
        console.log('form submitted', data);
    }

    renderCount++;

    return (
        <>
        <h1>User form RenderCount {renderCount/2}</h1>
        <div className="form-wrapper">
            {/**passing onSubmit to handleSubmit */}
            <form onSubmit={handleSubmit(onSubmit)}>
                <label htmlFor="username">UserName</label>
                <input 
                    type="text"
                     id="username"
                     {...register("username")}
                     />

                <label htmlFor="email">email</label>
                <input 
                    type="text" 
                    id="email" 
                    {...register("email")}/>

                <label htmlFor="city">city</label>
                <input 
                    type="text" 
                    id="city" 
                    {...register("city")}/>

                <button> Submit</button>

            </form>
            {/**Devtool for validate */}
            <DevTool control={control}/>
        </div>
        </>
    );
};