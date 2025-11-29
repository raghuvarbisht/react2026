import { useState } from "react"


const UserForm = () => {
    const [value, setValue] = useState('');

    return (
        <div>     
            user text:{value}       
            <input 
                type="text" 
                name="user" 
                value={value} 
                onChange={(event) => setValue(event?.target.value)}/>
            
            <button onClick={() => setValue('')}>Clear</button>
        </div>

    )

}


export default UserForm;

