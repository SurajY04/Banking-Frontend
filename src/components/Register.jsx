import React from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom';
import Login from './Login';

const Register = () => {

    const navigate = useNavigate();

   const onSubmitHandler = async (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData.entries());

    try {
        const response = await axios.post(
            "https://banking-transaction-backend-bmw1.onrender.com/api/auth/register",
            data
        );

        alert(response.data.message);
        e.target.reset();
        navigate("/verify-email")
    } catch (err) {
        console.log(err.response?.data);
    }
};


  return (
    <>
    <div id="register-main">
        <h1>BANKING</h1>
        <form onSubmit={onSubmitHandler} >
            <input type="text" required placeholder='Enter your name' name='name' />
            <input type="email" required placeholder='Enter your email' name='email' />
            <input type="password" required placeholder='Enter your password' name='password' />

            <button type='submit'>SIGN UP</button>


        </form>
        <a href="/Login">Already Register! Sign In</a>
    </div>
    </>
  )
}

export default Register