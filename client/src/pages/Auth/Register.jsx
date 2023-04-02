import React, { useState } from 'react'
import Layout from '../../components/Layout/Layout'
import toast from 'react-hot-toast';
import axios from 'axios'
import { Link, useNavigate } from 'react-router-dom';



const Register = () => {
    const navigate = useNavigate();

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [password, setPassword] = useState('');
    const [address, setAddress] = useState('');

    // form submit

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const res = await axios.post('/api/v1/auth/register', { name, email, password, phone, address });
            if (res && res.data.success) {
                toast.success(res.data && res.data.message);
                navigate('/login');
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
        <Layout>

            <div className="register">
                <h2> Register Now</h2>
                <form onSubmit={handleSubmit}>
                    <div className="mb-3">
                        <input
                            type="text"
                            className="form-control"
                            id="exampleInputName"
                            placeholder='Enter your name'
                            required
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                        />
                    </div>
                    <div className="mb-3">
                        <input
                            type="email"
                            className="form-control"
                            id="exampleInputEmail"
                            placeholder='Enter your email'
                            required
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </div>
                    <div className="mb-3">
                        <input
                            type="password"
                            className="form-control"
                            id="exampleInputPassword"
                            placeholder='Enter Your Password'
                            required
                            value={password}
                            onChange={(e) => setPassword(e.target.value)} />
                    </div>
                    <div className="mb-3">
                        <input
                            type='number'
                            className="form-control input-box"
                            id="exampleInputName"
                            placeholder='Enter your Phone Number'
                            required
                            value={phone}
                            onChange={(e) => setPhone(e.target.value)}

                        />
                    </div>
                    <div className="mb-3">
                        <input
                            type="text"
                            className="form-control"
                            id="exampleInputName"
                            placeholder='Enter Your Address'
                            required
                            value={address}
                            onChange={(e) => setAddress(e.target.value)}
                        />
                    </div>
                    <div>
                        <p>If you have already registered <Link className='LINK' to='/login'>Login Now</Link> </p>
                    </div>
                    <button type="submit" className="btn btn-primary">
                        Register
                    </button>
                </form>

            </div>
        </Layout>
    )
}

export default Register;