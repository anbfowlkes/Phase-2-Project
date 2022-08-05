import { Link } from "react-router-dom";
import './Styles/NavBar.css'


const NavBar = () => {
    return (
        <div className='navbar'>
            <h1 id='website-title'><i>{'E & A Budgeting'}</i></h1>

            <img src='../Images/LogoThree.PNG' alt='' title='' />

            <p id='quote'>{'"A state of the art budgeting system. Made by poor people, for poor people."'}</p>

            <ul className='nav-links'>
                <div className='nav-links'>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    {/* <li>
                        <Link to="/login">Login</Link>
                    </li> */}
                    <li>
                        <Link to="/about">About Us</Link>
                    </li>
                    <li>
                        <Link to="/info">Enter Your Information</Link>
                    </li>
                    <li>
                        <Link to="/results">Display Your Results</Link>
                    </li>
                </div>
            </ul>
            <hr></hr>
        </div>
    )
}

export default NavBar