import React, { useState , useEffect } from "react";
import '../Pages/Home.css'
import serv1 from '../Assets/serv1.png'
import serv2 from '../Assets/serv2.PNG'
import new1 from '../Assets/news-1.jpg'
import new2 from '../Assets/news-2.jpg'
import new3 from '../Assets/news-3.jpg'
function Home() {
    const initialValues = {username:"", email:"", phone:""};
    const [formValues, setFormValues] = useState(initialValues);
    const [formErrors, setFormErrors] = useState({});
    const [isSubmit, setIsSubmit] = useState(false);

    const handleChange = (e) => {
        const {name, value} = e.target;
        setFormValues({ ...formValues, [name]:value});
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        setFormErrors(validate(formValues));
        setIsSubmit(true);
    }

    useEffect(() => {
        console.log(formErrors);
        if(Object.keys(formErrors).length === 0 && isSubmit){
            console.log(formValues);
        }
    },[formErrors]);

    const validate = (values) =>{
        const errors ={};
        const regax = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
        if(!values.username){
            errors.username = "Username is required!";
        }
        if(!values.email){
            errors.email = "Email is required!";
        }else if(!regax.test(values.email)){
            errors.email = 'This is not a valid email!';
        }
        if(!values.phone){
            errors.phone = "PhoneNumber is required!";
        }else if(values.phone.length < 4){
            errors.phone = 'This number is not valid';
        }
        return errors;
    };



    return (
        <div>
            <div className="home-header-section col-12">
                <div className="home-banner-container">
                    <div className='search-container'>
                        <div className="search-input">
                                <div className="input-btn">
                                    <i className="fa-solid fa-location-dot"></i><input type="text" placeholder="Enter city" />
                                </div>
                                <div className="input-btn">
                                    <i className="fa-solid fa-magnifying-glass"></i><input type="text" placeholder="Departure" />
                                </div>
                        </div>
                        <button className="search-btn">search</button>
                    </div>
                    <div className="header-text-section">
                        <h1 className="primary-heading mb-4">
                            We are here for your care
                        </h1>
                        <p className="primary-text">
                            Remote health monitoring platform to create
                            a bright smile,healthy lifestyle and get fast
                            medical services to treat your health.
                        </p>
                    </div>
                </div>
            </div>
            <div className="appointment-section col-12">
                    <div className="row">
                        <div className="text col-lg-5 col-sm-10 py-2 px-1">
                            <h1 className="mb-3">Servicing Hours</h1>
                            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Itaque reiciendis aperiam natus hic
                                omnis quis, voluptatem accusantium facere quidem exercitationem expedita iste voluptatibus
                                laborum doloribus.</p>
                            <ul>
                                <li>Monday-Friday 08.00am - 10.00pm</li>
                                <li>Saturday 08.00am - 10.00pm</li>
                                <li>Sunday 08.00am - 10.00pm</li>
                            </ul>
                        </div>
                        <div className="booking-form col-lg-5 col-sm-10">
                            {Object.keys(formErrors).length === 0 && isSubmit ?(
                                <div className="ui-message-success">
                                    signed in successfully
                                </div>
                            ):(
                                <pre>{JSON.stringify(formValues, undefined, 2)}</pre>
                            )}
                            <form action="#" onSubmit={handleSubmit}>
                                <h1 className="mb-3">Book an Appointment</h1>
                                <input type="text" name="username" placeholder="Patient Name" value={formValues.username} onChange={handleChange}/>
                                <p>{formValues.username}</p>
                                <input type="text" name="phone" placeholder="Phone" value={formValues.phone} onChange={handleChange}/>
                                <p>{formValues.phone}</p>
                                <input type="text" name="email" placeholder="Email Address" value={formValues.email} onChange={handleChange}/>
                                <p>{formValues.email}</p>
                                <input type="date" />
                                <select id="Departure">
                                    <option value="#">First</option>
                                    <option value="#">Second</option>
                                    <option value="#">Third</option>
                                    <option value="#">Fourth</option>
                                </select>
                                <input type="text" placeholder="Appointment Date" />
                                <button>Confirm Booking</button>
                            </form>
                        </div>
                    </div>
                </div>
                <div className="facility col-12">
                    <div>
                        <div className="head text-center">
                            <h1 className="mb-3">Our Latest Facilities</h1>
                            <p className="mb-5 fs-5 text-secondary">We provide world-class consulting services with the best medical team.</p>
                        </div>
                        <div className="row col-12 justify-content-center column-gap-5">
                            <div className="card col-lg-3 col-sm-10 mb-sm-3 rounded-2">
                                <div className="card-title d-flex align-items-center mb-3">
                                <i className="fa-solid fa-suitcase-medical"></i><h2>Emergency Services</h2>
                                </div>
                                <div className="content col-11 mb-5 fs-5 text-secondary-emphasis">
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem qui saepe
                                        repudiandae, blanditiis alias, quos optio culpa praesentium, incidunt quibusdam eum.</p>
                                </div>
                                <a className="text-decoration-none fs-5 text-dark" href="#">Learn More</a>
                            </div>
                            <div className="card col-lg-3 col-sm-10 mb-sm-3 rounded-2">
                                <div className="card-title d-flex align-items-center mb-3">
                                    <i className="fa-solid fa-calendar-days"></i><h2>Doctors Schedule</h2>
                                </div>
                                <div className="content col-11 mb-5 fs-5 text-secondary-emphasis">
                                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Delectus quas, quos odio error
                                        excepturi nam incidunt veniam eligendi impedit ipsum at minima dolores nulla amet.</p>
                                </div>
                                <a className="text-decoration-none fs-5 text-dark" href="#">Learn More</a>
                            </div>
                            <div className="card col-lg-3 col-sm-10 mb-sm-3 rounded-2">
                                <div className="card-title d-flex align-items-center mb-3">
                                    <i className="fa-solid fa-people-group"></i><h2>Family Planning</h2>
                                </div>
                                <div className="content col-11 mb-5 fs-5 text-secondary-emphasis">
                                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Delectus quas, quos odio error
                                        excepturi nam incidunt veniam eligendi impedit ipsum at minima dolores nulla amet.</p>
                                </div>
                                <a className="text-decoration-none fs-5 text-dark" href="#">Learn More</a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="serv-section col-12">
                    <div className="bg-gray-100">
                        <div className="row column-gap-5 justify-content-center">
                            <div className="offered-service col-lg-4 col-sm-10 mb-sm-3">
                                <h1 className="mb-3 text-light">Our Offered Services</h1>
                                <p className="mb-5 fs-5 text-secondary">Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae dolores earum maxime,
                                    alias incidunt quos illum nihil fugit dolor nisi.</p>
                                <div className="card-container row column-gap-5">
                                    <div className="card col-5 bg-transparent border-0">
                                        <div className="card-img col-4 mb-2">
                                            <img className="col-12" src={serv1} />
                                        </div>
                                        <div className="card-head mb-3 text-light">
                                            <h2>Teleconsultation</h2>
                                        </div>
                                        <div className="cardinfo col-12">
                                            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Adipisci inventore
                                                doloremque illo illum fugit ex eum id modi veritatis aliquam?</p>
                                        </div>
                                    </div>
                                    <div className="card col-5 bg-transparent border-0">
                                        <div className="card-img col-4 mb-2">
                                            <img className="col-12" src={serv2} />
                                        </div>
                                        <div className="card-head mb-3 text-light">
                                            <h2>Home visit</h2>
                                        </div>
                                        <div className="cardinfo col-12">
                                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut, ad doloribus.
                                                Soluta, expedita? Quia minus dicta consectetur aspernatur omnis iste.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="department d-flex flex-column justify-content-between col-lg-3 rounded-3 py-5 border-0 col-sm-10 mb-sm-3">
                                <div className="head">
                                    <h1 className="title mb-4 text-light">Departments</h1>
                                    <ul className="mb-5">
                                        <li className="mb-2 list-unstyled"><a className="text-decoration-none fs-5 text-light" href="#">Dental Care</a></li>
                                        <li className="mb-2 list-unstyled"><a className="text-decoration-none fs-5 text-light" href="#">Cardiology</a></li>
                                        <li className="mb-2 list-unstyled"><a className="text-decoration-none fs-5 text-light" href="#">Urology</a></li>
                                        <li className="mb-2 list-unstyled"><a className="text-decoration-none fs-5 text-light" href="#">Eye Care</a></li>
                                        <li className="mb-2 list-unstyled"><a className="text-decoration-none fs-5 text-light" href="#">Plastic Surgery</a></li>
                                        <li className="mb-2 list-unstyled"><a className="text-decoration-none fs-5 text-light" href="#">Gasroenterology</a></li>
                                    </ul>
                                </div>
                                <div className="foot mt-5">
                                    <a className="text-decoration-none fs-5 text-light" href="#">View All Department</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="latest-news col-12">
                    <div>
                        <div className="head text-center">
                            <h1 className="mb-3">Our Recent Blogs</h1>
                            <p className="mb-5 fs-5 text-secondary"> Lorem, ipsum dolor sit amet consectetur adipisicing elit. A officiis laudantium impedit mollitia
                                animi molestias. </p>
                        </div>
                        <div className="row gap-4 justify-content-center">
                            <div className="card col-lg-3 p-4 rounded-2 col-sm-10 mb-sm-3">
                                <div className="card-img col-12 mb-3">
                                    <img className="col-12" src={new1} />
                                </div>
                                <div className="card-content col-12">
                                    <div className="card-title mb-3 fw-bold">
                                        <h3>The Latest in Medicine</h3>
                                    </div>
                                    <div className="card-info col-12 mb-5 fs-5 text-gray-100">
                                        <p>There is an internal department and
                                            non-surgical condition prevention for
                                            your health</p>
                                    </div>
                                    <a className="text-decoration-none fs-6 fw-bold text-dark mb-5" href="#">Read More</a>
                                </div>
                            </div>
                            <div className="card col-lg-3 p-4 rounded-2 col-sm-10 mb-sm-3">
                                <div className="card-img col-12 mb-3">
                                    <img className="col-12" src={new2} />
                                </div>
                                <div className="card-content col-12">
                                    <div className="card-title mb-3">
                                        <h3>All you need to know about pills</h3>
                                    </div>
                                    <div className="card-info col-12 mb-5 fs-5 text-gray-100">
                                        <p>There is an internal department and
                                            non-surgical condition prevention for
                                            your health</p>
                                    </div>
                                    <a className="text-decoration-none fs-6 fw-bold text-dark mb-5" href="#">Read More</a>
                                </div>
                            </div>
                            <div className="card col-lg-3 p-4 rounded-2 col-sm-10 mb-sm-3">
                                <div className="card-img col-12 mb-3">
                                    <img className="col-12" src={new3} />
                                </div>
                                <div className="card-content col-12">
                                    <div className="card-title mb-3">
                                        <h3>Marketing and Medicine</h3>
                                    </div>
                                    <div className="card-info col-12 mb-5 fs-5 text-gray-100">
                                        <p>There is an internal department and
                                            non-surgical condition prevention for
                                            your health</p>
                                    </div>
                                    <a className="text-decoration-none fs-6 fw-bold text-dark mb-5" href="#">Read More</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
        </div>
    )
}

export default Home