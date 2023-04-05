import React, { useMemo } from 'react';
import '../Pages/contact.css';
// import { GoogleMap, useLoadScript, Marker } from "@react-google-maps/api";

// function Map() {
//     const center = useMemo(() => ({ lat: 44, lng: -80 }), []);
  
//     return (
//       <GoogleMap zoom={10} center={center} mapContainerClassName="map-container">
//         <Marker position={center} />
//       </GoogleMap>
//     );
// }

function Contact() {
    // const { isLoaded } = useLoadScript({
    //     googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY,
    //   });

  return (
    <div>
        <div className="header">
            <div className="banner-container">
                <div className="overlay">
                <div className="root">
                    <a href="#">Home</a> / <a href="#">Contact</a>
                </div>
                <h1>KEEP IN TOUCH</h1>
                </div>
            </div>
        </div>
        <div className='main'>
            <div className='container'>
                <div className="contact">
                    <form>
                        <h1>Contact Us</h1>
                        <p>Our friendly team would love to hear from you!</p>
                        <div className="customer-name">
                            <div className="input-group display">
                                <label>First Name</label>
                                <input type="text" placeholder="First Name" />
                            </div>
                            <div className="input-group display">
                                <label>Last Name</label>
                                <input type="text" placeholder="Last Name" />
                            </div>
                        </div>
                        <div className="email display">
                            <label>Email</label>
                            <input type="text" placeholder="you@company.com" />
                        </div>
                        <div className="phone display">
                            <label>Phone Number</label>
                            <input type="text" placeholder="+1(555) 000-000" />
                        </div>
                        <div className="message-box display">
                            <label>Message</label>
                            <textarea id="message" cols="30" rows="10"></textarea>
                        </div>
                        <button id="send-btn">Send Message</button>
                    </form>
                    {/* <Map/> */}
                </div>
            </div>
        </div>
    </div>
  )
}

export default Contact