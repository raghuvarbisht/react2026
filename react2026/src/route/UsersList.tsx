import { useParams, Link } from "react-router-dom";
const UsersList = () => {
    
    const paramsData = useParams();
    return (
        <div>
           <h1> Users List</h1>
           user id is : {paramsData.id}
           <br/>
           <Link to="/users">Back</Link>
        </div>
    )

}

export default UsersList;