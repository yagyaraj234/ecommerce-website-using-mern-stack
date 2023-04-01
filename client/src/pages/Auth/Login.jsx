import React from 'react'
import Layout from '../../components/Layout/Layout';
import { Link } from 'react-router-dom';

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
          <div>
            <p>Create New Account <Link className='LINK' to='/register'>Register</Link> </p>
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