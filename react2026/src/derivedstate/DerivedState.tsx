
/*
Derived State means:
👉 A value that can be computed from existing state or props, instead of storing it
 separately in state.
In React, you should not store something in state if you can calculate it from other 
state values.

*/

import { useState } from "react";

const DerivedState = () => {

    const [users, setUsers] = useState<string[]>([]);
    const [user, setUser] = useState<string>('');

    const totalUsersCount = users.length;
    const lastUser = users[users.length - 1];
    const uniqueUserCount = [...new Set(users)].length;

    const handleAddUser = () => {

        if (user.trim() === "") return;

        setUsers((prev) => [...prev, user]);
        setUser("");      

    }

    return (
        <div>
            <div>
            <div> Total user count : {totalUsersCount}</div>
            <div> Last user  : {lastUser}</div>
            <div> Unique Total user: {uniqueUserCount} </div>
            </div>

            <input 
            type="text" 
            value={user}
            onChange={(event) => setUser(event.target.value)} 
            placeholder="enter username"/>
            <button onClick={handleAddUser}>Add user</button>
            <br/><br/>
            
            
            <div> User list </div> 
            {
                users.map((item , index) => (
                  
                    <div key={index}> Name: {item }</div>

                ))

            }

        </div>
    )
}

export default DerivedState;