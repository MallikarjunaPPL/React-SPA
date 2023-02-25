import React from 'react';
import {Link} from "react-router-dom";
import "./bottom.css";
const bottom=()=>{
   

        
    return (
        <>
        
        <div className='bottom_cont'>
           
           <Link to="/about"><button  className='button_react'>About</button></Link>
          
           <Link to="/res"><button className='button_react' >Resume Spa</button></Link>
           <Link to="/fun"><button className='button_react' >React Spa</button></Link>
            
            <Link to="/contact"> <button className='button_react btn_edit'>Contact</button></Link>
           
        </div>
       
        </>
    );
};


export default bottom;