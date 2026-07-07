import React from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom';
import Register from './Register';
import Dashboard from '../pages/AccountCreate';

const Login = () => {

    const navigate = useNavigate();

    const onSubmitHandler = async (e) => {
        e.preventDefault();

        const formData = new FormData(e.target);
        const data = Object.fromEntries(formData.entries());

        try {
            const response = await axios.post(
                "https://banking-transaction-backend-bmw1.onrender.com/api/auth/login",
                data
            );

            localStorage.setItem("token", response.data.token);
            alert(response.data.message);
            e.target.reset();
            navigate("/create-account")
        } catch (err) {
            console.log(err.response?.data);
        }
    };


    return (
        <>
            <div id="login-main">
                <h1>BANKING</h1>
                <form onSubmit={onSubmitHandler} >

                    <input type="email" required placeholder='Enter your email' name='email' />
                    <input type="password" required placeholder='Enter your password' name='password' />

                    <button type='submit'>SIGN IN</button>


                </form>
                <a href="/">New User ? Sign Up</a>
            </div>
        </>
    )
}

export default Login