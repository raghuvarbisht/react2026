import UserList from "./UserList";

const UserComponent = () => {
     const userObj1 = {
       name: "Raghuvar",
       age: 42
    }
    const userObj2 = {
       name: "Amit Singh",
       age: 40
    }

    const userList = [
    {
        name: "Sumit",
        age:34
    },
    {
        name: "Rajana",
        age: 44
    },

]
    return (
        <>
            <div>
                User Details
            </div>
            <UserList user= {userObj1}/>
            <UserList user= {userObj2}/>
            
            <h1>User list </h1>
            <hr/>
            {
                userList.map((user , index) => (
                    <UserList key={index} user= {user}/>
                
                ))
            }
        </>
    )

}

export default UserComponent;