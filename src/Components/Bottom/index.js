import React,{Component} from 'react';
import {Link} from "react-router-dom";
import "./index.css";
class bottom extends Component {
    state={
        isdrop:false
    }
    dropdown=()=>{
         this.setState({isdrop:true})
    }
    about=()=>{
        this.setState({isdrop:false})
    }
    droplist=()=>{
        
        return(
           
            <select className='select' >
                <option className='select_sty'>
                    Resume
                </option>
                <option className='select_sty'>
                    React Spa
                </option>
                </select>
        )
       
        
    }
    render(){
        const {isdrop}=this.state
    return (
        <>
        
        <div className='bottom_cont'>
           
           <Link to="/about"><button onClick={this.about} className='button_react'>About</button></Link>
           <div className='sel_cont'>
           <button className='button_react' onClick={this.dropdown}>React Spa</button>
           {isdrop?this.droplist():""}
            </div>
            <Link to="/contact"> <button onClick={this.about}  className='button_react btn_edit'>Contact</button></Link>
           
        </div>
       
        </>
    );
};
}

export default bottom;