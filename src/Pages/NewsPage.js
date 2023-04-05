import React from 'react'
import image from '../Assets/images.jpg'
import '../Pages/news.css'

function News() {
  return (
    <div>
        <div className="header">
            <div className="banner-container">
                <div className="overlay">
                <div className="root">
                    <a href="#">Home</a> / <a href="#">News</a>
                </div>
                <h1>OUR LATEST NEWS</h1>
                </div>
            </div>
        </div>
        <div className='app'>
            <div className='row'>
                <div className='main'>
                    <div className='blog'>
                        <div className='container'>
                            <div className='row'>
                                <div className='news-card col-lg-6 col-sm-10 mb-5'>
                                    <div className="card-img">
                                        <img src={image} />
                                    </div>
                                    <div className="card-content">
                                        <h2>The Latest in Medicine</h2>
                                        <h6><span>Date:</span>April2,2023 <span>By:</span>Dr.Jack Williams 2Comments</h6>
                                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Minus delectus eaque quas illo iusto facilis quaerat accusantium, voluptatum cupiditate similique. Ratione ipsum odio aperiam quisquam?</p>
                                    </div>
                                    <a href="#">Read More</a>
                                </div>
                                <div className='news-card col-lg-6 col-sm-10 mb-5'>
                                    <div className="card-img">
                                        <img src={image} />
                                    </div>
                                    <div className="card-content">
                                        <h2>The Latest in Medicine</h2>
                                        <h6><span>Date:</span>April2,2023 <span>By:</span>Dr.Jack Williams 2Comments</h6>
                                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Minus delectus eaque quas illo iusto facilis quaerat accusantium, voluptatum cupiditate similique. Ratione ipsum odio aperiam quisquam?</p>
                                    </div>
                                    <a href="#">Read More</a>
                                </div>
                                <div className='news-card col-lg-6 col-sm-10 mb-5'>
                                    <div className="card-img">
                                        <img src={image} />
                                    </div>
                                    <div className="card-content">
                                        <h2>The Latest in Medicine</h2>
                                        <h6><span>Date:</span>April2,2023 <span>By:</span>Dr.Jack Williams 2Comments</h6>
                                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Minus delectus eaque quas illo iusto facilis quaerat accusantium, voluptatum cupiditate similique. Ratione ipsum odio aperiam quisquam?</p>
                                    </div>
                                    <a href="#">Read More</a>
                                </div>
                                <div className='news-card col-lg-6 col-sm-10 mb-5'>
                                    <div className="card-img">
                                        <img src={image} />
                                    </div>
                                    <div className="card-content">
                                        <h2>The Latest in Medicine</h2>
                                        <h6><span>Date:</span>April2,2023 <span>By:</span>Dr.Jack Williams 2Comments</h6>
                                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Minus delectus eaque quas illo iusto facilis quaerat accusantium, voluptatum cupiditate similique. Ratione ipsum odio aperiam quisquam?</p>
                                    </div>
                                    <a href="#">Read More</a>
                                </div>
                                <div className='news-card col-lg-6 col-sm-10 mb-5'>
                                    <div className="card-img">
                                        <img src={image} />
                                    </div>
                                    <div className="card-content">
                                        <h2>The Latest in Medicine</h2>
                                        <h6><span>Date:</span>April2,2023 <span>By:</span>Dr.Jack Williams 2Comments</h6>
                                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Minus delectus eaque quas illo iusto facilis quaerat accusantium, voluptatum cupiditate similique. Ratione ipsum odio aperiam quisquam?</p>
                                    </div>
                                    <a href="#">Read More</a>
                                </div>
                                <div className='news-card col-lg-6 col-sm-10 mb-5'>
                                    <div className="card-img">
                                        <img src={image} />
                                    </div>
                                    <div className="card-content">
                                        <h2>The Latest in Medicine</h2>
                                        <h6><span>Date:</span>April2,2023 <span>By:</span>Dr.Jack Williams 2Comments</h6>
                                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Minus delectus eaque quas illo iusto facilis quaerat accusantium, voluptatum cupiditate similique. Ratione ipsum odio aperiam quisquam?</p>
                                    </div>
                                    <a href="#">Read More</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='side-bar'>
                    <div className="search-bar">
                        <input type="text" placeholder="search..." />
                        <button>search</button>
                    </div>
                    <div className="category">
                        <ul className='ps-0'>
                            <li><a href="#">Dental Care</a></li>
                            <li><a href="#">Urology</a></li>
                            <li><a href="#">Cardiology</a></li>
                            <li><a href="#">Eye Care</a></li>
                            <li><a href="#">Plastic Surgery</a></li>
                            <li><a href="#">Dermatology</a></li>
                        </ul>
                    </div>
                    <div className="post">
                        <div className="posts-card">
                            <div className="card-img">
                                <img src={image}/>
                            </div>
                            <div className="content">
                                <h4>A big discovery for medicine worldwide</h4>
                                <h5>Feb 05,2023</h5>
                            </div>
                        </div>
                        <div className="posts-card">
                            <div className="card-img">
                                <img src={image}/>
                            </div>
                            <div className="content">
                                <h4>A big discovery for medicine worldwide</h4>
                                <h5>Feb 05,2023</h5>
                            </div>
                        </div>
                        <div className="posts-card">
                            <div className="card-img">
                                <img src={image}/>
                            </div>
                            <div className="content">
                                <h4>A big discovery for medicine worldwide</h4>
                                <h5>Feb 05,2023</h5>
                            </div>
                        </div>
                    </div>
                    <div className="about">

                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default News