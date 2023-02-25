import {MdMarkEmailRead,MdMobileScreenShare} from "react-icons/md"
import {AiFillLinkedin} from "react-icons/ai"
import "./contact.css";
import logo_1 from "../../Images/contact.jpg";
const contact = () => {
    return (
        <div className='contact_cont'>
            <img src={logo_1} alt="wrong_Url" className='contact_logo'/>
            <div className="contact_image">
                <div className="email_cont">
                    <MdMarkEmailRead className="icon_style"/>
                    <p className="para_icon">mallikarjuna@peoplelinkvc.com</p>
                </div>
                <div className="email_cont">
                    <MdMobileScreenShare className="icon_style"/>
                    <p className="para_icon">9948922146</p>
                </div>
                <div className="email_cont">
                    <AiFillLinkedin className="icon_style"/>
                    <a className="para_icon " rel="noreferrer" href="https://www.linkedin.com/in/sai-mallikarjuna/" target="_blank">-www.linkedin.com/in/sai-mallikarjuna</a>
                </div>
            </div>
        </div>
    );
};

export default contact;