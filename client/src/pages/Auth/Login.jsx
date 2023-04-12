import React,{useState} from 'react'
import Layout from '../../components/Layout/Layout';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { toast } from 'react-hot-toast';
//Importing Custom hook
import { useAuth } from '../../context/auth';
const Login = () => {


  const [auth,setAuth]=useAuth();

  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');


  // form submit

  const handleSubmit = async (e) => {
      e.preventDefault();
      try {
          const res = await axios.post('/api/v1/auth/login', { email, password});
          if (res && res.data.success) {
              toast.success(res.data && res.data.message);
              setAuth({
                ...auth,
                user:res.data.user,
                token:res.data.token,
              })
              localStorage.setItem('auth',JSON.stringify(res.data))
              navigate('/');
          }
          else {
              toast.error(res.data.error)
          }
      } catch (error) {
          console.assert.log(error)
          toast.error('Something went Wrong')
      }
  }
  return (
    <Layout >
      <div className="login">
        <h2> Login Now</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <input
              type="email"
              className="form-control"
              id="exampleInputEmail"
              placeholder='Email'
              value={email}
              onChange={(e)=>setEmail(e.target.value)}
            />
          </div>
          <div className="mb-3">
            <input
              type="password"
              className="form-control"
              id="exampleInputPassword"
              placeholder='Password'
              value={password}
              onChange={(e)=>setPassword(e.target.value)}
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