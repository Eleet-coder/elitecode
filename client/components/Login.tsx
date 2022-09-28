import React ,{useState}from "react";
import { Link } from "react-router-dom";
import './Login.css'
const axios = require('axios');



const Login = ()=> {
   

        return(
            
        <div className="d-flex justify-content-center  align-items-center">

            <div className="d-flex flex-column justify-content-center   p-2 bg-light loginBox mt-5"style={{maxWidth:'600px',borderRadius:'20px'}}>
                
                <img src="https://media.edclub.com/website/main/typing-jungle.png" alt=""  />
                <form action="/login" method="post">
                <input name='username' id="username" className="form-control form-control-lg mt-5" type="text" placeholder="username" aria-label=".form-control-lg example"/>
                <input name='password' id="password" className="form-control form-control-lg mt-1" type="password" placeholder="password" aria-label=".form-control-lg example"/>
                <div id="incorrect" className="fs-1 text-danger d-flex justify-content-center"></div>
                <div className="fs-1 text-danger d-flex justify-content-center"></div>
                <div className="d-flex justify-content-center">
                <button className="btn btn-lg  mt-3 mb-3 me-3 " type="submit" id='loginBtn'>LOGIN</button>
                
                <Link to='/Signup'><button className="btn btn-lg btn-success mt-3 me-3 mb-3"  id='signBtn'> SIGN UP</button></Link>
                </div>
                </form>
                <div className="d-flex justify-content-center">
                <div className="googlebtn mt-3 mb-3" id="buttonDiv"></div>
                </div>
                </div>    
                  
            </div>
        );  
}


export default Login; 