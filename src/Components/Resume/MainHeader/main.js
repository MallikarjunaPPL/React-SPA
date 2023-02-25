import React from 'react';
import "./main.css";
import logo_1 from "../../../Images/resume icon.png";
import {ImMail3} from 'react-icons/im';

import {ImLinkedin} from 'react-icons/im';

import { FaPhoneSquare} from 'react-icons/fa';
const Main = () => {
    return (
        <>
           <div className="container">
        <div className="image_cont">
      <img src={logo_1} alt="Wrong_Url" className="logo"/> 
      <h1 className="heading">Sai Mallikarjuna Ponnpalli</h1>
      </div>
     <div className="para_cont">
     <p className="paragraph_1"><ImMail3 className="icon_size"/>-mallikarjunasai174@gmail.com </p>
      
     <ImLinkedin className="icon_size "/><a className="anchor_ele" rel="noreferrer" href="https://www.linkedin.com/in/sai-mallikarjuna/" target="_blank">-www.linkedin.com/in/sai-mallikarjuna</a>
      <p className="paragraph_1"><FaPhoneSquare className="icon_size"/>-:9948922146 </p></div>
      </div> 
        </>
    );
};

export default Main;