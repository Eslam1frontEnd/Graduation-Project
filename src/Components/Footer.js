import React from 'react'
import {Link , NavLink} from 'react-router-dom'
import '../Components/Footer.css'
import blog_1 from '../Assets/news-1.jpg'

function Footer (){
    return(
        <>
            <div className='subscribe-container col-12'>
                <div className='search-input col-4'>
                    <input className='py-3 ps-4 border-0 col-12' type="text" placeholder="Enter Your Email Address" />
                </div>
                <button className='subscribe-btn col-2 border-0 fs-5'>subscribe</button>
            </div>
            <div className='foot-section py-5 px-4'>
                <div>
                    <div className='row col-12'>
                        <div className='breif col-lg-4 ps-5 col-sm-10 mb-sm-5'>
                            <div className='logo'>
                                <img src='' />
                            </div>
                            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Modi odit rem aspernatur
                                veritatis est porro optio deleniti dicta ipsa similique?</p>
                            <div className="social-icons">
                                <i className="fa-brands fa-facebook"></i>
                                <i className="fa-brands fa-twitter"></i>
                                <i className="fa-brands fa-instagram"></i>
                            </div>
                        </div>
                        <div className='quick-links col-lg-4 mb-4 col-sm-10 mb-sm-5'>
                            <h1 className='mb-4'>Useful Links</h1>
                            <ul className='mb-5 ps-0'>
                                <li className="mb-4 list-unstyled"><Link className="text-decoration-none fs-5 text-light" activeclassname="selected" exact='true' to='/emergency'>Emergency</Link></li>
                                <li className="mb-4 list-unstyled"><Link className="text-decoration-none fs-5 text-light" activeclassname="selected" to='/booking'>Book Appointment</Link></li>
                                <li className="mb-4 list-unstyled"><Link className="text-decoration-none fs-5 text-light" to='/service'>Services</Link></li>
                                <li className="mb-4 list-unstyled"><Link className="text-decoration-none fs-5 text-light" to='/doctors'>Doctors</Link></li>
                                <li className="mb-4 list-unstyled"><Link className="text-decoration-none fs-5 text-light" to='/contact'>Contact Us</Link></li>
                            </ul>
                        </div>
                        <div className='posts col-lg-4 col-sm-10 mb-sm-5'>
                            <h1 className='mb-4'>Latest News</h1>
                            <div className='card-container mb-3 row col-12'>
                                <div className='card-image col-3'>
                                    <img className='col-12' src={blog_1}/>
                                </div>
                                <div className='card-text col-9'>
                                    <h4 className='text-light mb-1'>A big discovery for medicine worldwide</h4>
                                    <h5 className='text-info-emphasis'>Feb 05,2023</h5>
                                </div>
                            </div>
                            <div className='card-container mb-3 row col-12'>
                                <div className='card-image col-3'>
                                    <img className='col-12' src={blog_1}/>
                                </div>
                                <div className='card-text col-9'>
                                    <h4 className='text-light mb-1'>A big discovery for medicine worldwide</h4>
                                    <h5 className='text-info-emphasis'>Feb 05,2023</h5>
                                </div>
                            </div>
                            <div className='card-container row col-12'>
                                <div className='card-image col-3'>
                                    <img className='col-12' src={blog_1}/>
                                </div>
                                <div className='card-text col-9'>
                                    <h4 className='text-light mb-1'>A big discovery for medicine worldwide</h4>
                                    <h5 className='text-info-emphasis'>Feb 05,2023</h5>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}


export default Footer