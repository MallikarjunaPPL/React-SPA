

import React,{Component} from 'react';
import "./reverse.css"
class reverse extends Component{
    state={
        input_val:"",
        reverse:"",
        isrev:false

    }
    change=event=>{
        const num=(event.target.value)
    this.setState({input_val:num,isrev:false})
    
    
    }
    checkReverse=()=>{
        const {input_val}=this.state
        let stri=input_val
        let str=stri.split(" ")
        console.log(str)
        
        let duplicate=""
        
        for (let i of str){
            let dupli=[...new Set(i)]
            let removed=dupli.join("")
        
            let rev=""
            for (let i of removed){
                rev=i+rev
            }
           duplicate+=" "+rev
        }
        console.log(duplicate)
        let case_change=""
        for (let i of duplicate){
            if (i===i.toLowerCase()){
                i=i.toUpperCase()
                case_change+=i
            }else{
                i=i.toLowerCase()
                case_change+=i
            }
        }
        console.log(case_change)
        
          

this.setState({reverse:case_change,isrev:true})




    }
    render(){
        const {input_val,reverse,isrev}=this.state
        return(
            
            <div className="armstrong_cont">
                <p className='label_sty' for="enter_text">Enter a Word:-</p>
            <input id="enter_text" className="input_width" type="text" onChange={this.change} value={input_val} placeholder="Enter value"/>
            <div className='form_cont'>
               
                <button className='check' onClick={this.checkReverse}>
                    Get Reverse
                </button>
                {isrev?<p className='paragraph'>The  value is {reverse}</p>:""}
            </div>
            </div>

        )
    }
}
export default reverse;