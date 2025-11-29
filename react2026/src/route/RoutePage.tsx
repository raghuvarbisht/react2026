import { Routes , Route , Link} from 'react-router-dom';
import Home from './Home';
import Contact from './Contact';
import About from './About';
import PageNotFound from './PageNotFound';
import College from './College';
import Student from './Student';
import Department from './Department';


const RoutePage = () => {
    return (
        <>
            <Link className='link' to="/">Home Page</Link> 
            <Link className='link' to="/about">About Page</Link> 
            <Link className='link' to="/contact">Contact Page</Link>
            <Link className='link' to="/college">College</Link>  
            
            <Routes>
                <Route path="/" element={<Home/>}></Route>
                <Route path="/about" element={<About/>}></Route>
                <Route path="/contact" element={<Contact/>}></Route>

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