import { Link } from "react-router-dom";

const Users = () => {
    const userList = [
        { id: 1, name: "Amit"},
        { id: 2, name: "Sumit"},
        { id: 3, name: "Rajat"},
        { id: 4, name: "Mohit"}
    ]

    return (
        <div>
           <h1> Users Page</h1>

           {
            userList.map((user) => (
                <div>
                    <Link to={"/users/"+user.id}>{user.name}</Link>
                </div>
            ))
           }
        </div>
    )

}

export default Users;