import { Routes , Route , NavLink} from 'react-router-dom';
import Home from './Home';
import Contact from './Contact';
import About from './About';
import PageNotFound from './PageNotFound';
import College from './College';
import Student from './Student';
import Department from './Department';
import Users from './Users';
import UsersList from './UsersList';


const RoutePage = () => {
    return (
        <>
            <NavLink className='link' to="/">Home Page</NavLink> 
            <NavLink className='link' to="/about">About Page</NavLink> 
            <NavLink className='link' to="/contact">Contact Page</NavLink>
            <NavLink className='link' to="/college">College</NavLink>
            <NavLink className='link' to="/users">Users</NavLink>  
            
            
            <Routes>
                <Route path="/" element={<Home/>}></Route>
                <Route path="/about" element={<About/>}></Route>
                <Route path="/contact" element={<Contact/>}></Route>
                <Route path="/users" element={<Users/>}></Route>
                <Route path="/users/:id" element={<UsersList/>}></Route>

                {/* nested route below for college */}
                <Route path="/college" element={<College/>}>
                    {/*<Route path="student" element={<Student/>}></Route>*/}
                    {/** use index for loading student as default child route */}
                    <Route index element={<Student/>}></Route>
                    <Route path="department" element={<Department/>}></Route>
                </Route>
                <Route path="/*" element={<PageNotFound/>}></Route>

            </Routes>
        </>
    )
}

export default RoutePage;