/*
 Validation - 

 */
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
export const UserFormCustomValidation = () => {
    const form = useForm<UserFormValues>();
    const {register , control , handleSubmit , formState} = form;
    const {errors} = formState; // to fetch error object
    //const {name,ref,onChange,onBlur} = register("username")

    const onSubmit = (data : UserFormValues) => {
        console.log('form submitted', data);
    }

    renderCount++;

    return (
        <>
        <h1>User form RenderCount {renderCount/2}</h1>
        <div className="form-wrapper">
            {/**passing onSubmit to handleSubmit */
             /**noValidate allow react hook to handle validation instead nomrahl html Validation */
            }
            <form onSubmit={handleSubmit(onSubmit)} noValidate autoComplete="off">
                <label htmlFor="username">UserName</label>
                <input 
                    type="text"
                     id="username"
                     {...register("username", {
                        required: "Username is required",
                     })}
                     />
                <p className="error">{errors.username?.message}</p>     

                <label htmlFor="email">email</label>
                <input
                    type="email"
                    id="email"
                    {...register("email", {
                        pattern: {
                        value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                        message: "Enter a valid email address",
                        }, 
                        // custom validation can add here
                        validate: {
                           notAdmin: (fieldValue) => {
                            return (
                                fieldValue !== 'admin@example.com' ||
                                'Enter a different email'
                            )
                          },
                          notBlackListDomain: (fieldValue) => {
                            return (
                                !fieldValue.endsWith('gmail.com') ||
                                'This gmail domain is not valid'
                            )
                          },

                        }
                    })} />
                <p className="error">{errors.email?.message}</p>
                <label htmlFor="city">city</label>
                <input 
                    type="text" 
                    id="city" 
                    {...register("city", {
                        required: 'City is required'
                    
                    })}/>
                <p className="error">{errors.city?.message}</p>
                <button> Submit</button>

            </form>
            {/**Devtool for validate */}
            <DevTool control={control}/>
        </div>
        </>
    );
};