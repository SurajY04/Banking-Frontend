import React from 'react'
import { useRef } from 'react'
import { v4 as uuidv4 } from 'uuid'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

const Transaction = () => {
    const navigate = useNavigate();
    const token = localStorage.getItem("token")
    const myuuidRef = useRef(uuidv4());

    const onSubmitHandler = async (e) => {
        e.preventDefault();
        const formData = new FormData(e.target);
        const data = Object.fromEntries(formData.entries());
        data.idempotencyKey = myuuidRef.current

        try {

            const response = await axios.post("https://banking-transaction-backend-bmw1.onrender.com/api/transaction/",
                data,
                {
                    headers: {
                        Authorization: `Bearer ${token}`
                    }
                }
            )

            alert(response.data.message)
            myuuidRef.current = uuidv4();
            e.target.reset()
            navigate("/dashboard")

        } catch (error) {
            console.log(error)
        }

    }
    return (
        <div id="transaction-main">
            <h1>Create Transaction</h1>
            <form onSubmit={onSubmitHandler}>
                <input type="text" required placeholder='Enter your account id' name='FromAccount' />
                <input type="text" required placeholder='Enter reciever accound id' name='ToAccount' />
                <input type="number" required placeholder='Enter amount' name='amount' />
                <button type='submit'>Transfer Money</button>
            </form>
        </div>
    )
}

export default Transaction