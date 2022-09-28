import './Oauth.css'
import React, { useState } from 'react'
import firebaseConfig from '../../firebaseConfig';
import { getAuth, signInWithPopup, signOut, GoogleAuthProvider, TwitterAuthProvider, GithubAuthProvider, signInWithEmailAndPassword } from "firebase/auth";
firebaseConfig
const provider = new GoogleAuthProvider();
const providerGithub = new GithubAuthProvider();
const auth = getAuth();
const Oauth = () => {
    const [usr,setUser] = useState('');
    const [issign,setIsSign] = useState(false);
    
    const handleSignInGoogle = ()=> {
      
        signInWithPopup(auth, provider)
            .then((result) => { 
                
                setIsSign(true);
                window.location.href = "http://localhost:3000/problems?user";
            }).catch((error) => {
                console.log(error);
            });    
    }
    const handleSignInGitHub =()=> {
        signInWithPopup(auth, providerGithub)
            .then((result) => { 
                setIsSign(true);
                window.location.href = "http://localhost:3000/problems";
            }).catch((error) => {
                console.log(error);
            });
    };
    const handleSignOut =()=>{
      
        signOut(auth).then(() => {
               setIsSign(false);
            }).catch((error) => {
                console.log(error);
            });
       
    }

  return (
    <div>
     <div id="logout" style={{
  display: issign ? 'block' : 'none'
}}>
		<button  className='btn btn-danger'onClick ={handleSignOut}>logout</button>
	</div>
   
    <div id="GoogleSignIn" style={{
  display: issign ? 'none' : 'block'
}} >
		<button className='btn btn-primary'id='google' onClick={handleSignInGoogle}>Google login</button>
	</div>
    
    <div id="GitHubSignIn"style={{
  display: issign ? 'none' : 'block'
}} >	
		<button className='btn btn-secondary mt-3'id='github' onClick={handleSignInGitHub}>Github login</button>
	</div>

    </div>
  )
}

export default Oauth