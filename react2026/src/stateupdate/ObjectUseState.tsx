import {useState} from "react";

const ObjectUseState = () => {

    const [user, setUser] = useState({
        name:'',
        email: '',
        address:{
            city:'',
            country: ''
        }
    })

    const updateField = (field : string, value : string) => {
        setUser(prev => ({
            ...prev,
            [field]: value
        }))
    }

    const updateAddressField = (field : string, value : string) => {
        setUser(prev => ({
            ...prev,
            address:{
                ...prev.address,
                [field]: value
            }
            
        }))
    }

    return (
        <div>
            <input 
                type="text" 
                onChange={(event) => updateField('name', event?.target.value)}
                placeholder="Enter name"
            />
             <br/><br/>
            <input 
                type="text" 
                onChange={(event) => updateField('email', event?.target.value)}
                placeholder="Enter email"
            />
            <br/><br/>
            <input 
                type="text" 
                onChange={(event) => updateAddressField('city', event?.target.value)}
                placeholder="Enter city"
            />
            <br/><br/>
            <input 
                type="text" 
                onChange={(event) => updateAddressField('country', event?.target.value)}
                placeholder="Enter country"
            />
           <h1>User Details</h1>
            <div> {JSON.stringify(user)}</div>
        </div>
    )
}

export default ObjectUseState;