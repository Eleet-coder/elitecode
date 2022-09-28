import React from 'react'
import './Signup.css'
const Signup = () => {
  return (
    <div className="d-flex justify-content-center ">
    <form action='/signup'  method = 'POST'>
     
      <div className="p-3 d-flex flex-column justify-content-center border border-dark p-2 bg-light signBox mt-5" style={{ maxWidth: '600px', borderRadius: '20px' }}>

        
        <img className='w-10 ' src="https://miro.medium.com/max/1400/1*cbpI5VKHlTL4K7Iab8_2Cw.png" alt="" />
        <input name='username' className="form-control form-control-lg mt-3" type="text"  placeholder="username" aria-label=".form-control-lg example" />
        
        <input name='password' className="form-control form-control-lg mt-3" type="password"  placeholder="password" aria-label=".form-control-lg example" />
        
       
        <input name='email' className="form-control form-control-lg mt-3" type="email"  placeholder="email" aria-label=".form-control-lg example" />
        <button className='btn btn-lg btn-primary mb-5 mt-5' type="submit" id='signupBtn'>SUBMIT</button>
      
      </div>
    </form>
    
  </div>
  )
}

export default Signup