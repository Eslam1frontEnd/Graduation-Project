import React from "react";
import '../Pages/about.css'
import about_bg from '../Assets/about.png'
import doctor_1 from '../Assets/doctor_1.jpg'

function About (){
    return(
        <div>
            <div className="header">
                <div className="banner-container">
                        <div className="overlay">
                        <div className="root">
                            <a href="#">Home</a> / <a href="#">About</a>
                        </div>
                        <h1>ABOUT US</h1>
                        </div>
                </div>
            </div>
                <div className="about-us">
                    <div className="card-container row col-12 justify-content-center text-center">
                        <div className="card-img col-sm-10 mb-sm-5">
                            <img src={about_bg} />
                        </div>
                        <div className="card-content col-sm-10 mb-sm-3">
                            <h2 className="mb-4">We always put our pacients first</h2>
                            <p className="col-10 mb-5 fs-5 text-secondary">Modernlabs is a free service that lets you speak with doctors
                                live over video chat.With carefully, you can get more
                                information, be more active in your own healthcare,
                                and help reduce wait times at hospitals & clinics.</p>
                            <a href="#">Learn More</a>
                        </div>
                    </div>
                </div>
                <div className="consultant">
                    <div className="head">
                        <h1 className="mb-2">Our Consultants</h1>
                        <p className="col-6 fs-5 text-secondary">You will be handled by a team of expert doctors who have more than 10 years experience in their
                            fields and will get the best solution for problem</p>
                    </div>
                    <div>
                        <div className="row justify-content-center column-gap-3">
                            <div className="doctor-card col-sm-10">
                                <div className="doc-img">
                                    <img className="col-8" src={doctor_1} />
                                </div>
                                <div className="doc-info col-10">
                                    <div className="social mb-1 fs-5 text-secondary">
                                        <i className="fa-brands fa-facebook me-2"></i>
                                        <i className="fa-brands fa-twitter me-2"></i>
                                        <i className="fa-brands fa-linkedin-in"></i>
                                    </div>
                                    <h4 className="mb-2">Ethel Davis</h4>
                                    <h5 className="mb-3 text-body-tertiary">Sr. Faculty Data Science</h5>
                                    <p className="fs-5 text-body-tertiary">If you are looking at blank
                                        cassettes on the web, you
                                        may be very confused at
                                        the difference in price.</p>
                                </div>
                            </div>
                            <div className="doctor-card col-sm-10">
                                <div className="doc-img">
                                    <img className="col-8" src={doctor_1} />
                                </div>
                                <div className="doc-info col-10">
                                    <div className="social mb-1 fs-5 text-secondary">
                                        <i className="fa-brands fa-facebook me-2"></i>
                                        <i className="fa-brands fa-twitter me-2"></i>
                                        <i className="fa-brands fa-linkedin-in"></i>
                                    </div>
                                    <h4 className="mb-2">Ethel Davis</h4>
                                    <h5 className="mb-3 text-body-tertiary">Sr. Faculty Data Science</h5>
                                    <p className="fs-5 text-body-tertiary">If you are looking at blank
                                        cassettes on the web, you
                                        may be very confused at
                                        the difference in price.</p>
                                </div>
                            </div>
                            <div className="doctor-card col-sm-10">
                                <div className="doc-img">
                                    <img className="col-8" src={doctor_1} />
                                </div>
                                <div className="doc-info col-10">
                                    <div className="social mb-1 fs-5 text-secondary">
                                        <i className="fa-brands fa-facebook me-2"></i>
                                        <i className="fa-brands fa-twitter me-2"></i>
                                        <i className="fa-brands fa-linkedin-in"></i>
                                    </div>
                                    <h4 className="mb-2">Ethel Davis</h4>
                                    <h5 className="mb-3 text-body-tertiary">Sr. Faculty Data Science</h5>
                                    <p className="fs-5 text-body-tertiary">If you are looking at blank
                                        cassettes on the web, you
                                        may be very confused at
                                        the difference in price.</p>
                                </div>
                            </div>
                            <div className="doctor-card col-sm-10">
                                <div className="doc-img">
                                    <img className="col-8" src={doctor_1} />
                                </div>
                                <div className="doc-info col-10">
                                    <div className="social mb-1 fs-5 text-secondary">
                                        <i className="fa-brands fa-facebook me-2"></i>
                                        <i className="fa-brands fa-twitter me-2"></i>
                                        <i className="fa-brands fa-linkedin-in"></i>
                                    </div>
                                    <h4 className="mb-2">Ethel Davis</h4>
                                    <h5 className="mb-3 text-body-tertiary">Sr. Faculty Data Science</h5>
                                    <p className="fs-5 text-body-tertiary">If you are looking at blank
                                        cassettes on the web, you
                                        may be very confused at
                                        the difference in price.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="recomended-serv">
                    <div>
                        <div className="d-flex flex-column justify-content-end align-items-end">
                            <div className="serv">
                                <h2>Laboratory Service</h2>
                                <p>Even the all-powerful Pointing has no control about the blind.</p>
                            </div>
                            <div className="serv">
                                <h2>General Treatment</h2>
                                <p>Even the all-powerful Pointing has no control about the blind.</p>
                            </div>
                            <div className="serv">
                                <h2>Emergency Service</h2>
                                <p>Even the all-powerful Pointing has no control about the blind.</p>
                            </div>
                            <div className="serv">
                                <h2>24 Hours Service</h2>
                                <p>Even the all-powerful Pointing has no control about the blind.</p>
                            </div>
                        </div>
                    </div>
                </div>
        </div>
    )
}

export default About