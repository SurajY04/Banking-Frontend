import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom';

const Dashboard = () => {
    const navigate = useNavigate()

    const token = localStorage.getItem("token");
    const [data , setData] = useState('')
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [status, setStatus] = useState('')
    const [account, setAccount] = useState('')
    const [balance , setBalance] = useState(null)

    useEffect(() => {
        const fetchDetail = async () => {
            const response = await axios.get("https://banking-transaction-backend-bmw1.onrender.com/api/account/get-detail",
                {
                    headers: {
                        Authorization: `Bearer ${token}`
                    }
                }
            )
            setData(response.data)
            console.log(response.data)
        }
        fetchDetail();
    }, [])

    const onClickHandler = ()=>{
       navigate("/transaction")
    }

    const onClickHandlerLogout = async ()=>{

        const response = await axios.post("https://banking-transaction-backend-bmw1.onrender.com/api/auth/logout" , 
            {} ,
            {
                headers : {
                    Authorization : `Bearer ${token}`
                }
            }
        )

        alert(response.data.message)
        localStorage.removeItem("token")
        navigate("/login")

    }
    return (
        <div id="dashboard-main">
            <div id="upper-most">
                <h1>Your Account Dashboard</h1>
                <button onClick={onClickHandlerLogout}>Log Out</button>
            </div>
            <div id="upper">
                <div id="upper-left">
                    <h3>Name : {data?.user?.name}</h3>
                    <h3>Email : {data?.user?.email}</h3>
                </div>
                <div id="upper-right">
                    <h3>Status : <span>{data?.account?.status}</span></h3>
                    <h3>Account Id : {data?.account?._id}</h3>
                </div>
            </div>
            <div id="center">
                <div className='center-block' id="balance">
                    <h2>Balance : </h2>
                    <h3>{data?.balance}</h3>
                </div>
                <div className='center-block' id="credit">
                    <h2>Total Credit : </h2>
                    <h3>{data?.totalCreditBalance}</h3>
                </div>
                <div className='center-block' id="debit">
                    <h2>Total Debit : </h2>
                    <h3>{data?.totalDebitBalance}</h3>
                </div>

            </div>
            <div id="lower">
                <button onClick={onClickHandler}>Create Transaction</button>
            </div>
        </div>
    )
}

export default Dashboard