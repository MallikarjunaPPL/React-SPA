import React from 'react';
import Bottom from "../Bottom/bottom";

import logo from "../../Images/sm logo.jpg";
import "./header.css";
const header = () => {
    return (
        <>
        
        <div className='display_cont' >
            <div className='header_cont'>
            <img src={logo} alt="Check Url" className="image_wid"/>
            <h1 className='header_h1'>
                React Single Page Appilication
            </h1>
            <h2 className='header_h1'>Sai Mallikarjuna Ponnpalli</h2>
            </div>
            <Bottom/>
           
        </div>
        </>
    );
};

export default header;