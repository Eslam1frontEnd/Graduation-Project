import React from 'react'
import {Link , NavLink} from 'react-router-dom'
import '../Components/Navbar.css'
import { useState , useRef } from 'react'
import logo from '../Assets/Logo.jpg' 

// import '/node_modules/bootstrap/dist/css/bootstrap.min.css'

function Navbar (){
    const[active,setActive] = useState(false);
    const navRef = useRef();

    const showNavbar = () => {
        navRef.current.classList.toggle('responsive_nav');
    };

    return(
        <div className='navbar-container'>
            <div className='navbar-primary row-col-10'>
                    <div className="left-side col-lg-4 col-sm-2 justify-content-between">
                        <button className="ltr">English</button>
                    </div>
                    <div className="row right-side col-lg-8 col-sm-10 justify-content-end">
                        <div className="call-center col-lg-3 col-sm-4">
                            <i className="fa-solid fa-phone"></i><a href="#">+953 012 3654 896</a>
                        </div>
                        <div className="appointment col-lg-2 col-sm-4">
                            <a href="#">Book Appointment</a>
                        </div>
                    </div>
            </div>
            <div className='nav row-col-12'>
                <div className='logo-container col-1'>
                   <img src={logo} />
                </div>
                <ul className="col-8 justify-content-center mb-0" ref={navRef}>
                    <NavLink className='link' exact='true' to='/'>Home</NavLink>
                    <NavLink className='link' to='/about'>About</NavLink>
                    <NavLink className='link' to='/department'>Department</NavLink>
                    <NavLink className='link' to='/doctors'>Doctors</NavLink>
                    <NavLink className='link' to='/news'>News</NavLink>
                    <NavLink className='link' to='/contact'>Contact</NavLink>
                </ul>
                <div className={active?'search-container active':'search-container'}  onClick={()=> setActive(!active)}>
                    <i className="fa-solid fa-magnifying-glass"></i>
                    <input className='search-input' type="text" placeholder="search..." />
                    <i className="fa-solid fa-xmark"></i>
                </div>
                <button className='nav-btn' onClick={showNavbar}>
                        <i className="fa-solid fa-bars"></i>
                </button>
            </div>
            
        </div>
    )
}

// {active?'search-container active':'div'}

export default Navbar