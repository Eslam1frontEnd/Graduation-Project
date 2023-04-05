import React from 'react'
import '../Pages/doctors.css'
import { useState } from 'react'

function Doctors() {
    const [selected, setActive] = useState(false);

    function toggleActive(index) {
        if (index === selected) {
            setActive(false)
            return;
        }
        setActive(index);
    }

    const dataCollection = [{
        explore: "View Profile",
        linkImg: 'http://localhost:5501/modern-labs/src/Assets/doc-2.jpg',
        name: "Sami Tarek",
        degreeTitle: "Degree ",
        degree: "MBBS, FCPS",
        specialityTitle: "Speciality",
        speciality: "Senior at orthopedic",
        chamberTitle: "Chamber",
        chamber: "Lorem ipsum dolor sit amet.Lorem ipsum dolor sit amet.",
        booking: "Book Available Online"
    }, {
        explore: "View Profile",
        linkImg: 'http://localhost:3000/static/media/doc-1.2e4d75860d93c4dac7a7.jpg',
        name: "Sami Tarek",
        degreeTitle: "Degree ",
        degree: "MBBS, FCPS",
        specialityTitle: "Speciality ",
        speciality: "Senior at orthopedic",
        chamberTitle: "Chamber",
        chamber: "Lorem ipsum dolor sit amet.Lorem ipsum dolor sit amet.",
        booking: "Book Available Online"
    }, {
        explore: "View Profile",
        linkImg: 'http://localhost:5501/modern-labs/src/Assets/doc-3.png',
        name: "Sami Tarek",
        degreeTitle: "Degree ",
        degree: "MBBS, FCPS",
        specialityTitle: "Speciality ",
        speciality: "Senior at orthopedic",
        chamberTitle: "Chamber",
        chamber: "Lorem ipsum dolor sit amet.Lorem ipsum dolor sit amet.",
        booking: "Book Available Online"
    }, {
        explore: "View Profile",
        linkImg: 'http://localhost:5501/modern-labs/src/Assets/doc-4.jpg',
        name: "Sami Tarek",
        degreeTitle: "Degree ",
        degree: "MBBS, FCPS",
        specialityTitle: "Speciality ",
        speciality: "Senior at orthopedic",
        chamberTitle: "Chamber",
        chamber: "Lorem ipsum dolor sit amet.Lorem ipsum dolor sit amet.",
        booking: "Book Available Online"
    }, {
        explore: "View Profile",
        linkImg: 'http://localhost:5501/modern-labs/src/Assets/doc-5.jpg',
        name: "Sami Tarek",
        degreeTitle: "Degree ",
        degree: "MBBS, FCPS",
        specialityTitle: "Speciality ",
        speciality: "Senior at orthopedic",
        chamberTitle: "Chamber",
        chamber: "Lorem ipsum dolor sit amet.Lorem ipsum dolor sit amet.",
        booking: "Book Available Online"
    }, {
        explore: "View Profile",
        linkImg: 'http://localhost:5501/modern-labs/src/Assets/doc-6.jpg',
        name: "Sami Tarek",
        degreeTitle: "Degree ",
        degree: "MBBS, FCPS",
        specialityTitle: "Speciality ",
        speciality: "Senior at orthopedic",
        chamberTitle: "Chamber",
        chamber: "Lorem ipsum dolor sit amet.Lorem ipsum dolor sit amet.",
        booking: "Book Available Online"
    }]


    return (
        <div>
            <div className="doctor-header-secion">
                <div className="banner-container">
                    <div className="overlay">
                        <div className='banner-text-sction'>
                            <h1>Search Doctor, Make an Appointment</h1>
                            <p>Discover the best doctors, clinic & labs in the city nearest you</p>
                        </div>
                        <div className='banner-content'>
                            <div>
                                <div className='row align-items-center justify-content-center'>
                                    <div className='treatment-permision col-lg-3 col-sm-10'>
                                        <h6 className='label mb-2 fs-5'>(Only For Medical Treatments)</h6>
                                        <div className="treatment-selector d-flex justify-content-center align-items-center">
                                            <h5 class="title me-3">Treatment Inquiry For</h5>
                                            <input className='me-1' type="radio" id="myself" /><label className='me-2'>Myself</label>
                                            <input className='me-1' type="radio" id="someone" /><label className='me-2'>Someone</label>
                                        </div>
                                    </div>
                                    <div className='submit-form row col-lg-6 col-sm-10'>
                                        <div className='input-container d-flex flex-column align-items-baseline me-2 col-lg-4 col-sm-3'>
                                            <label className='mb-1 fs-5 text-dark'>Name</label>
                                            <input className='border-0' type="text" placeholder="Patient Name" />
                                        </div>
                                        <div className='input-container d-flex flex-column align-items-baseline me-2 col-lg-4 col-sm-3'>
                                            <label className='mb-1 fs-5 text-dark'>Phone or Email</label>
                                            <input className='border-0' type="text" placeholder="Patient Phone or Email" />
                                        </div>
                                        <div className='button col-lg-2 col-sm-1'>
                                            <button className='py-2 px-3 border-0'>submit</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='row'>
                <div className='main'>
                    <div className='doctors-section'>
                        {dataCollection.map((item, index) =>
                            <div className={selected === index ? 'card-doctor-selected' : 'card-doctor'} key={index} onClick={() => toggleActive(index)}>
                                <div className='view-btn'>
                                    <div className='button'>{item.explore}</div>
                                </div>
                                <div className="row-section">
                                    <div className='portofolio'>
                                        <div className="doc-img">
                                            <img src={item.linkImg} />
                                        </div>
                                        <div className="doc-info">
                                            <h2>{item.name}</h2>
                                            <h5>{item.speciality}</h5>
                                        </div>
                                    </div>
                                    <div className='qualification'>
                                        <div>
                                            <h6>{item.degreeTitle}</h6>
                                            <h4>{item.degree}</h4>
                                        </div>
                                        <div>
                                            <h6>{item.specialityTitle}</h6>
                                            <h4>{item.speciality}</h4>
                                        </div>
                                        <div>
                                            <h4>{item.chamberTitle}</h4>
                                            <p>{item.chamber}</p>
                                        </div>
                                    </div>
                                </div>
                                <div className='book-btn'>
                                    <i className="fa-solid fa-arrow-right-long"></i>
                                    <div className='button'>{item.booking}</div>
                                </div>
                            </div>

                        )}
                    </div>
                </div>
                <div className='side-bar'>
                    <div className="search-input">
                        <label>Search</label>
                        <input type="text" placeholder="search" />
                    </div>
                    <div className="selector">
                        <label>Country</label>
                        <select id="country">
                            <option value="1">Met Ghamr</option>
                            <option value="2">Met Ghamr</option>
                            <option value="3">Met Ghamr</option>
                            <option value="4">Met Ghamr</option>
                        </select>
                    </div>
                    <div className="selector">
                        <label>District/State</label>
                        <select id="state">
                            <option value="1">select state</option>
                            <option value="2">state1</option>
                            <option value="3">state2</option>
                            <option value="4">state3</option>
                        </select>
                    </div>
                    <div className="speciality">
                        <div className="title">Speciality</div>
                        <input type="text" placeholder="search" />
                        <div className="list">
                            <div className="option">
                                <input type="checkbox" /> <label>Accidient</label>
                            </div>
                            <div className="option">
                                <input type="checkbox" /> <label>Accidient</label>
                            </div>
                            <div className="option">
                                <input type="checkbox" /> <label>Accidient</label>
                            </div>
                            <div className="option">
                                <input type="checkbox" /> <label>Accidient</label>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Doctors