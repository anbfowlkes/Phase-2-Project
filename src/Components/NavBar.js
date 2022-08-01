import { Link } from "react-router-dom";

const NavBar = () => {
    return (
        <div className='navbar'>
            <h1>{'E & A Budgeting'}</h1>
            <ul>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/login">Login</Link>
                </li>
                <li>
                    <Link to="/about">About Us</Link>
                </li>
                <li>
                    <Link to="/info">Enter Your Information</Link>
                </li>
                <li>
                    <Link to="/results">Display Your Results</Link>
                </li>
            </ul>
        </div>
    )
}

export default NavBar