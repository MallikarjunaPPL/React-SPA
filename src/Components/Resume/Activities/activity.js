import React from 'react';
import "./activity.css";
const activity = () => {
    return (
        <div id="Activities">
             <p className="para_1">Extra-Curricular Activities</p>
             <hr className='line_width'/> 
             <ul className='activity_align'>
             
             <li className='activity_paragraph'>Class Representative in one of my academic years while graduation of BTech.  </li>
            

               <p className='active_paragraph '>(2019). </p>
            </ul>
            <ul className='activity_align'>
             
             <li className='activity_paragraph'>As a Student Coordinator of one of the batch in NSS unit.  </li>
            

               <p className='active_paragraph '>(2017). </p>
            </ul>
            <ul className='activity_align'>
             
             <li className='activity_paragraph'>Won awards in being one of the performer in sports like cricket and Kho-Kho .  </li>
            

               <p className='active_paragraph '>(2017). </p>
            </ul>
        </div>
    );
};

export default activity;