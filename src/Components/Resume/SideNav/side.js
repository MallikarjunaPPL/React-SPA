import { GiAchievement } from 'react-icons/gi';
import { ImProfile} from 'react-icons/im';
import {GrAchievement} from 'react-icons/gr';
import React from 'react';
import "./side.css";
import { GiSkills} from 'react-icons/gi';
import { MdOutlineCastForEducation} from 'react-icons/md';
import { GrProjects } from 'react-icons/gr';
const sideNav = () => {
    return (
        <>
            <div className="side_nav">
        <div className="manage_icon">
        
        <a href="#Acheivements"> <GrAchievement className="icon_achieve" /></a>
        <a className="anchor_hidden" href="#Acheivements">  Acheivements</a>
        </div>
      
        <div className="manage_icon">
        <a href="#Activities"><GiAchievement className="icon_activity" /></a>
        <a className="anchor_hidden" href="#Activities">Activities</a>
        </div>


      <div className="manage_icon">
       <a href="#Proffesional"><ImProfile className="icon_size" /></a>
       <a className="anchor_hidden" href="#Proffesional">Proffesional Exp.</a></div>

       <div className="manage_icon">
        <a href="#Project"><GrProjects className="icon_size" /></a>
        <a className="anchor_hidden" href="#Project">Projects</a></div>

        <div className="manage_icon">
        <a href="#Skills"><GiSkills className="icon_size" /></a>
        <a className="anchor_hidden" href="#Skills">Skills</a></div>

        <div className="manage_icon">
        <a href="#Study"><MdOutlineCastForEducation className="icon_size"/></a>
        <a className="anchor_hidden" href="#Study">Education</a></div>



      </div>
        </>
    );
};

export default sideNav;