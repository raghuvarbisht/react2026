import { useState } from "react";

const ArrayUseState = () => {

    const [users,setUsers] = useState([
        { name:"Amit", age:25 },
        { name:"Sumit", age:35 },
    ])

    const updateField = (index : number , field : string, value : string | number) => {
        setUsers( (prev : any) =>
            prev.map((user :any, i : number) =>
                i === index ? {...user, [field]:value} : user
            )
        )
    }


    return (
        <div>
            <h2>Update Array of Objects</h2>
            {
                users.map ((user,index) => (
                    <div key={index}>
                        <input 
                            type="text" 
                            value={user.name}
                            onChange={(event) => updateField(index, 'name',  event.target.value)}
                            placeholder="Enter name"/>

                        <input 
                            type="text" 
                            value={user.age}
                            onChange={(event) => updateField(index, 'age', event.target.value)}
                            placeholder="Enter age"/>
                    </div>
                ))
            }

            <div>
                {JSON.stringify(users)}
            </div>
            

        </div>
    )
}

export default ArrayUseState;