import React from "react";
import { NavLink } from "react-router-dom";
import { useState } from 'react'
import '../Pages/department.css'
import department_bg_1 from '../Assets/dept-8.png'
import department_bg_2 from '../Assets/dept-3.jpg'
import department_bg_3 from '../Assets/dept-4.jpeg'
import department_bg_4 from '../Assets/dept-2.jpg'
import department_bg_5 from '../Assets/dept-5.jpg'
import department_bg_6 from '../Assets/dept-1.jpg'

function Department (){
    const [toggleState, setToggleState] = useState(1);

    const toggleTab = (index) => {
      setToggleState(index);
    };

    // const [fadeProp, setFadeProp] = useState({
    //     fade: 'fade-in',
    // })


 
        
    return(
        <div>
            <div className="header">
                <div className="banner-container">
                        <div className="overlay">
                        <div className="root">
                            <a href="#">Home</a> / <a href="#">Department</a>
                        </div>
                        <h1>DEPARTMENTS</h1>
                        </div>
                </div>
            </div>
            <div className="department-seection">
                    <div className="container">
                        <div className="row">
                            <div className="tab-bar">
                                <ul>
                                    <li class="col-lg-2 col-sm-4"
                                        className={toggleState === 1 ? "li selected" : "li"}
                                        onClick={() => toggleTab(1)}><NavLink activeclassname="selected" exact='true' to="/">Dental Care</NavLink></li>
                                    <li class="col-lg-2 col-sm-4"
                                        className={toggleState === 2 ? "li selected" : "li"}
                                        onClick={() => toggleTab(2)}><NavLink to="/">Urology</NavLink></li>
                                    <li class="col-lg-2 col-sm-4"
                                        className={toggleState === 3 ? "li selected" : "li"}
                                        onClick={() => toggleTab(3)}><NavLink to="/">Cardiology</NavLink></li>
                                    <li class="col-lg-2 col-sm-4"
                                        className={toggleState === 4 ? "li selected" : "li"}
                                        onClick={() => toggleTab(4)}><NavLink to="/">Ophthalmology</NavLink></li>
                                    <li class="col-lg-2 col-sm-4"
                                        className={toggleState === 5 ? "li selected" : "li"}
                                        onClick={() => toggleTab(5)}><NavLink to="/">Plastic Surgery</NavLink></li>
                                    <li class="col-lg-2 col-sm-4"
                                        className={toggleState === 6 ? "li selected" : "li"}
                                        onClick={() => toggleTab(6)}><NavLink to="/">Neurology</NavLink></li>
                                </ul>
                            </div>
                            <div className="department-slider">
                                <div className={toggleState === 1 ? "department-card  active-department-card" : "department-card"} id="dental">
                                    <div className="content">
                                        <h1>Dental Department</h1>
                                        <h3>22 Doctors</h3>
                                        <p>Get consultation about dental problems and help you in taking
                                            effective treatment for your problematic teeth</p>
                                        <a href="#">Emergency</a>
                                        <a href="#">Clinic</a>
                                        <a href="#">Laboratory</a>
                                    </div>
                                    <div className="image">
                                        <img src={department_bg_1} />
                                    </div>
                                </div>
                                <div className={toggleState === 2 ? "department-card  active-department-card" : "department-card"} id="urology">
                                    <div className="content">
                                        <h1>urological Department</h1>
                                        <h3>22 Doctors</h3>
                                        <p>Get consultation about dental problems and help you in taking
                                            effective treatment for your problematic teeth</p>
                                        <a href="#">Emergency</a>
                                        <a href="#">Clinic</a>
                                        <a href="#">Laboratory</a>
                                    </div>
                                    <div className="image">
                                        <img src={department_bg_2} />
                                    </div>
                                </div>
                                <div className={toggleState === 3 ? "department-card  active-department-card" : "department-card"} id="cardiology">
                                    <div className="content">
                                        <h1>Cardiological Department</h1>
                                        <h3>22 Doctors</h3>
                                        <p>Get consultation about dental problems and help you in taking
                                            effective treatment for your problematic teeth</p>
                                        <a href="#">Emergency</a>
                                        <a href="#">Clinic</a>
                                        <a href="#">Laboratory</a>
                                    </div>
                                    <div className="image">
                                        <img src={department_bg_3} />
                                    </div>
                                </div>
                                <div className={toggleState === 4 ? "department-card  active-department-card" : "department-card"} id="eye">
                                    <div className="content">
                                        <h1>Ophthalmological Department</h1>
                                        <h3>22 Doctors</h3>
                                        <p>Get consultation about dental problems and help you in taking
                                            effective treatment for your problematic teeth</p>
                                        <a href="#">Emergency</a>
                                        <a href="#">Clinic</a>
                                        <a href="#">Laboratory</a>
                                    </div>
                                    <div className="image">
                                        <img src={department_bg_4} />
                                    </div>
                                </div>
                                <div className={toggleState === 5 ? "department-card  active-department-card" : "department-card"} id="surgery">
                                    <div className="content">
                                        <h1>surgical Department</h1>
                                        <h3>22 Doctors</h3>
                                        <p>Get consultation about dental problems and help you in taking
                                            effective treatment for your problematic teeth</p>
                                        <a href="#">Emergency</a>
                                        <a href="#">Clinic</a>
                                        <a href="#">Laboratory</a>
                                    </div>
                                    <div className="image">
                                        <img src={department_bg_5} />
                                    </div>
                                </div>
                                <div className={toggleState === 6 ? "department-card  active-department-card" : "department-card"} id="dermatology">
                                    <div className="content">
                                        <h1>Neurological Department</h1>
                                        <h3>22 Doctors</h3>
                                        <p>Get consultation about dental problems and help you in taking
                                            effective treatment for your problematic teeth</p>
                                        <a href="#">Emergency</a>
                                        <a href="#">Clinic</a>
                                        <a href="#">Laboratory</a>
                                    </div>
                                    <div className="image">
                                        <img src={department_bg_6} />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
        </div>
    )
}

export default Department



// responsive={responsive}