import Study from "../Resume/Study/study";
import Skills from "../Resume/Skills/skill";
import './spa.css';
import MainHeader from "../Resume/MainHeader/main";
import SideNav from "../Resume/SideNav/side";
import Project from "../Resume/Project/project";
import Proffesional from "../Resume/Proffesional/prof";
import Activities from "../Resume/Activities/activity";
import Acheivements from "../Resume/Acheivements/acheivment";
import Copyright from "../Resume/Copyright/copyright";



function resume() {
  return (
    <>
   
    <div className="background">
      <SideNav/>
    <div className="app-conatiner">
      <MainHeader/>
      <p className="para_1">Education</p>
      <hr className='line'/>
      <Study/>
      <Skills/>
      <Project/>
      <Proffesional/>
      <Activities/>
      <Acheivements/>
        </div>
        </div>
        <Copyright/>
        </>
  );
}

export default resume;
