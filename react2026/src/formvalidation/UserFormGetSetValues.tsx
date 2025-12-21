//getValues setValue
//getvalues not rerender like useeffect
/*
 Validation - default values and Nested object

 */
//npm install react-hook-form
//npm install -D @hookform/devtools
import { useForm , useFieldArray} from "react-hook-form";
import {DevTool} from "@hookform/devtools";


let renderCount = 0;
type UserFormValues = {
    username: string;
    email: string;
    city: string;
    age: number;
    dob: Date | null;
    addressList:{ 
        address1 : string , 
        address2 : string
    } []
}
export const UserFormGetSetValues = () => {
    // const form = useForm<UserFormValues>();
    //another way to pass below
    const form = useForm({
        defaultValues: {
            username: 'Rajat',
            email:'',  
            age: 0,   
            dob: null,       
            addressList:[{ address1 : '' , address2 : ''}],
            city: ''
        }
    });
    const {register , control , handleSubmit , formState , getValues} = form;
    const {errors} = formState; // to fetch error object

    //belwo use to work with dynamic field
    const { fields , append , remove} = useFieldArray({
        name: 'addressList',
        control
    })

    const onSubmit = (data : UserFormValues) => {
        console.log('form submitted', data);
    }
    const handleGetValues = () => {
        // different way to get values        
        console.log('Get Values only username=' , getValues('username'));
        console.log('Get Values only username and email=' , getValues(['username' , 'email']));
        console.log('Get Values =' , getValues());
    }

    renderCount++;

    return (
        <>
        <h1>User form </h1>
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
                <label htmlFor="age">Age</label>
                <input
                    type="text"
                    id="city"
                    {...register("age", {
                        valueAsNumber: true, // if we don't add number will display as text
                        required: {
                            value: true,
                            message: "Age is required"
                        }
                    })
                    }/>     
                <p className="error"> {errors.age?.message}</p>
                <label htmlFor="dob">Date of Birth</label>
                <input
                    type="date"
                    id="dob"
                    {...register("dob", {
                        valueAsDate: true, // if we don't add number will display as text
                        required: {
                            value: true,
                            message: "Date is required"
                        }
                    })
                    }/>     
                <p className="error"> {errors.dob?.message}</p>
                <div>
                    <label htmlFor="city">Address List</label>
                    <div className="">
                        {
                            fields.map((field, index) => {
                                return(
                                    <div className="form-control" key={field.id}>
                                        <div> Address1:<input type="text" {...register(`addressList.${index}.address1` as const)} /> </div>
                                        <div>Address2:<input type="text" {...register(`addressList.${index}.address2` as const)} /></div>
                                        {  index > 0 && 
                                            (
                                                <button type="button" onClick={() => remove(index)}> 
                                                Remove
                                                </button>
                                            )
                                        }
                                    </div>
                                )
                            })
                        }
                                                
                    </div>
                    <button 
                        type="button" 
                        onClick= {()=> append({address1:'', address2:''})}> 
                        Add address
                    </button>
                </div>
                <button> Submit</button>
                <button type="button" onClick={handleGetValues}> Get All Values</button>

            </form>
            {/**Devtool for validate */}
            <DevTool control={control}/>
        </div>
        </>
    );
};