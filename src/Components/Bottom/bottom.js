import React from 'react';
import {Link} from "react-router-dom";
import "./bottom.css";
const bottom=()=>{
   

        
    return (
        <>
        
        <div className='bottom_cont'>
           
           <Link to="/about"><button  className='button_react'>About</button></Link>
          
<div class="dropdown">
  <button class="dropbtn">React Spa</button>
  <div class="dropdown-content">
  <Link to="/res"><p className='dropdownLink'>Resume Spa</p></Link>
  <Link to="/fun"><p className='dropdownLink'>React Fun</p></Link>

  </div>
</div>

           
            
            <Link to="/contact"> <button className='button_react '>Contact</button></Link>
            <Link to="/"><button  className='button_react btn_edit'>Home</button></Link>
        </div> 
       
        </>
    );
};


export default bottom;