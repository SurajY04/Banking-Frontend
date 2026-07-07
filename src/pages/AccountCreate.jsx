import React from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

const AccountCreate = () => {

    const navigate = useNavigate()

    const token = localStorage.getItem("token");

    const onClickHandler_2 = async (e) => {
        e.preventDefault()
        try {
            const response = await axios.post("https://banking-transaction-backend-bmw1.onrender.com/api/account/create",
                {},
                {
                    headers: {
                        Authorization: `Bearer ${token}`
                    }
                }
            )
            alert(response.data.message)

        } catch (error) {
            console.log(error.response?.data)
        }

    }


    const onClickHandler = async () => {
       navigate("/dashboard")
    }


    return (
        <div id="accountCreate-main">

            <button onClick={onClickHandler_2}>
                Create Account With This User
            </button>

            <button onClick={onClickHandler}>
                Go To Dashboard
            </button>
        </div>
    )
}

export default AccountCreate