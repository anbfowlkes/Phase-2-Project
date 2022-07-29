import { NavLink } from "react-router-dom";

const NavBar = () => {
    return (
        <div className='navbar'>
            <h1>{'E & A Budgeting'}</h1>
            <NavLink to='/login'>Login</NavLink>
        </div>
    )
}

export default NavBar