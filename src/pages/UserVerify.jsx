import React from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

const UserVerify = () => {

    const token = localStorage.getItem("token")
    const navigate = useNavigate()
    const onSubmitHandler = async (e) => {
        e.preventDefault();
        const formData = new FormData(e.target)
        const data = Object.fromEntries(formData.entries())

        try {
            const response = await axios.post("https://banking-transaction-backend-bmw1.onrender.com/api/auth/otp-verify" ,
                data ,
                {
                    headers : {
                        Authorization : `Bearer ${token}`
                    }
                }
            )

            alert(response.data.message)
            e.target.reset()
            navigate("/login")

            
        } catch (error) {
            console.log(err)
        }

    } 
  return (
    <div id="verify-main">
        <h1>Email Verification</h1>
        <form onSubmit={onSubmitHandler} >
            <input type="text" name='email' placeholder='Enter Your Email' />
            <input type="text" name="verificationCode" placeholder='Enter Your OTP' />
            <button type='submit'>Verify</button>
        </form>
    </div>
  )
}

export default UserVerify