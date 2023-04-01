import React from 'react'
import Layout from '../../components/Layout/Layout'

const Login = () => {
  return (
    <Layout>
    <div className="login">
            <h2> Login Now</h2>
            
            <form>
  <div className="mb-3">
    <label htmlFor="exampleInputEmail1" className="form-label">
      Email
    </label>
    <input
      type="email"
      className="form-control"
      id="exampleInputEmail"
    />
  </div>
  <div className="mb-3">
    <label htmlFor="exampleInputPassword" className="form-label">
      Password
    </label>
    <input
      type="password"
      className="form-control"
      id="exampleInputPassword"
    />
  </div>
  <div className="mb-3 form-check">
    <input type="checkbox" className="form-check-input" id="exampleCheck1" />
    <label className="form-check-label" htmlFor="exampleCheck1">
      Accept terms & Conditions
    </label>
  </div>
  <button type="submit" className="btn btn-primary">
    Login
  </button>
</form>

        </div>
    
    </Layout>
  )
}

export default Login