import React from 'react';
import "./copyright.css";
import { FaCopyright } from 'react-icons/fa';
const copyright = () => {
    return (
           <div id="Copyright">
             <footer className='icon_cont'>
                
             <FaCopyright className='copy'/>
             <p className="copy_head">Sai Mallikarjuna@ People Link Unifed Communications Pvt Ltd.</p></footer>
             </div>
    );
};

export default copyright;