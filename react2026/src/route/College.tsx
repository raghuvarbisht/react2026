import { Link ,NavLink, Outlet } from "react-router-dom";
const College = () => {

    return (
        <div>
           <h1> College Page</h1>
           <NavLink className="link" to="student">Student</NavLink>
           <NavLink className="link" to="department">Department</NavLink>
           {/*outlet display child component in nested route*/}
           <Outlet/>
        </div>
    )

}

export default College;