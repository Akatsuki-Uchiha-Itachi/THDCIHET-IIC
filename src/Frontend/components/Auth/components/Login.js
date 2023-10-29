import React from 'react'
import '../css/Login.css'

const Login = () => {
  return (
    <div className="login-container">
  <div className="login-form">
    <form>
      <h2>Login</h2>
      <div className="form-group">
        <label htmlFor="email">Email:</label>
        <input type="email" id="email" name="email" placeholder="Your email" />
      </div>
      <div className="form-group">
        <label htmlFor="password">Password:</label>
        <input type="password" id="password" name="password" placeholder="Your password" />
      </div>
      <button type="submit">Login</button>
    </form>
  </div>
</div>

  )
}

export default Login
