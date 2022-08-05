import { useState } from 'react'
import { Link } from "react-router-dom";
import './Styles/NavBar.css'


const NavBar = () => {
    const [color, changeColor] = useState("#ADD8E6");

    return (
        <div className='navbar' style={{ backgroundColor: color }}>
            <h1 id='website-title' style={{marginBottom: '-5px'}}><i>{'E & A Budgeting'}</i></h1>

            <img src='../Images/LogoThree.PNG' alt='' title='' />

            <p id='quote'>{'"A state of the art budgeting system. Made by poor people, for poor people."'}</p>

            <ul className='nav-links'>
                <div className='nav-links'>
                    <li className='hover'>
                        <Link to="/" onClick={() => changeColor("#ADD8E6")}>Home</Link>
                    </li>
                    {/* <li>
                        <Link to="/login">Login</Link>
                    </li> */}
                    <li className='hover'>
                        <Link to="/about" onClick={() => changeColor("#ADD8E6")}>About Us</Link>
                    </li>
                    <li className='hover'>
                        <Link to="/info" onClick={() => changeColor("#ADD8E6")}>Enter Your Information</Link>
                    </li>
                    <li className='hover'>
                        <Link to="/results" onClick={() => changeColor("#ADD8E6")}>Display Your Results</Link>
                    </li>
                </div>
            </ul>
            <div id='padder'>

            </div>
        </div>
    )
}

export default NavBar