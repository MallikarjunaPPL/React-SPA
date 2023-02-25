import React from 'react';
import "./project.css";
const Project = () => {
    return (
        <div id="Project" className='project_container'>
            <p className="para_1">Projects</p>
             <hr className='line_width'/>
             <h1 className="project_heading">My Projects Page:
             </h1>
             <p className='project_paragraph'>Developed a website where people like interviewers can see list of projects that a person implemented</p>
             <ul className=''>
                <li className='list_item'>Designed a banner section and the project cards using different HTML block, inline elements.</li>
                <li className='list_item'>Styled the website using CSS3 properties such as background, flex, and CSS box model properties and
relative units such as vh, vw, and used absolute units such as px.</li>
             </ul>
             <div className='project_alignment'>
             <h2 className='heading_tech'>
             Technologies used:<span className='span_heading' >HTML, CSS, Bootstrap</span>
             </h2>
             <a className="anc" rel="noreferrer" href="https://saiprojectsapk.ccbp.tech/" target="_blank">(saiprojectsapk.ccbp.tech)</a>
             </div>


             <h1 className="project_heading">Todos Application:
             </h1>
             <p className='project_paragraph'>Developed persistent todo application with CRUD operations to the tracklist of tasks</p>
             <ul className=''>
                <li className='list_item'>The displayed list of todos with HTML list elements, styled todo list using CSS, Bootstrap.</li>
                <li className='list_item'>Implemented todo crud operations by using JavaScript event listeners and updated UI dynamically by
using JavaScript DOM operations.</li>
<li className='list_item'>Used Arrays, Objects, and their methods during todo list CRUD Operations Persisted todo list state on
page reloads using local storage methods.</li>

             </ul>
             <div className='project_alignment'>
             <h2 className='heading_tech'>
             Technologies used:<span className='span_heading' >HTML, JS, CSS, Bootstrap</span>
             </h2>
             <a className="anc" rel="noreferrer" href="https://saitodosapk.ccbp.tech/" target="_blank">(saitodosapk.ccbp.tech)</a>
             </div>

             <h1 className="project_heading">Blog List:

             </h1>
             <p className='project_paragraph'>Developed simple blog list application where user can see list of blogs in user profile section</p>
             <ul className=''>
                <li className='list_item'>Implemented blog list using React component, props, lists & keys and achieved responsiveness using
bootstrap flex classes and CSS box model through mobile-first approach.</li>
                <li className='list_item'>Fetched blogs data from server asynchronously using fetch GET HTTP API call</li>
             </ul>
             <div className='project_alignment'>
             <h2 className='heading_tech'>
             Technologies used:<span className='span_heading' > React JS, REST API Calls, CSS, Bootstrap</span>
             </h2>
             <a className="anc" rel="noreferrer" href="https://sairoutingapk.ccbp.tech/" target="_blank">(sairoutingapk.ccbp.tech)</a>
             </div>
             </div>
    );
};

export default Project;