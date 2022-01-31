import React from 'react'
import { Link } from 'react-router-dom'

const Register = () => {
    return (
        <>
    <div className="login">
      <div className="main-container">
        <h3>Register for admin</h3>
        <div className="login-center">
          
          <form>
        <p>Register</p>

            <label htmlFor="name">Name</label>
            <input type="text" placeholder="Import name...." name="name" required />
            <label htmlFor="email">Email</label>
            <input type="email" placeholder="Import email...." name="email" required />

            <label htmlFor="password">Password</label>
            <input type="email" placeholder="Import password...." name="password" required />

           <div className="login-btn">
               <button type="submit">Register</button>
               <Link to="/"><button>Back to home</button></Link>
           </div>

            
          </form>
        </div>
      </div>
    </div>

    {/* register */}

    </>
    )
}

export default Register
