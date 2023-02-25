import React from 'react';
import "./skill.css";
const skill = () => {
    return (
        <div id="Skills" className='tech_container'>
            <p className="para_1">Technical Skills</p>
      <hr className='line'/>
      <table className="table_lines border_style">
      
      <tbody>
        <tr>
          <td className="align center_align">Front-End </td>
         
          <td className="align left_align">HTML, CSS, Bootstrap, JavaScript, ReactJS*</td>
        </tr>
        <tr>
          <td className="align center_align">Back-End</td>
         
          <td className="align left_align">Python, Express, Nodejs</td>
        </tr>
        <tr>
          <td className="align center_align">Databases</td>
         
          <td className="align left_align">SQL</td>
        </tr>
      </tbody>
    </table>
        </div>
    );
};

export default skill;