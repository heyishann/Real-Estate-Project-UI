import './register.scss'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'
import { useState } from 'react'

function RegisterPage(){
    const [error,setError] =useState("")
    const navigate = useNavigate()

    const handleSubmit = async (e) =>{
        e.preventDefault();
        setError("")
        const formData = new FormData(e.target)

        const username = formData.get("username");
        const email = formData.get("email");
        const password = formData.get("password");

        try{

            const res = await axios.post("http://localhost:3000/api/auth/register",{
                username,
                email,
                password
            });

            navigate("/login")
        }catch(err){
            setError(err.response.data.message)
        }
    }

    return(
        <div className='registerpage'>
            <div className="formContainer">
                <form onSubmit={handleSubmit}>
                    <h1>Create an account</h1>
                    <input type="text" name='username' placeholder='Username' required/>
                    <input type="email" name='email' placeholder='E-mail' required/>
                    <input type="password" name='password' placeholder='Password' required/>
                    <button>Register</button>
                    {error && <p>{error}</p>}
                    <Link to="/login">
                    <span> Already have an account</span>
                    </Link>
                </form>
            </div>
            <div className="imgContainer">
                <img src="/bg.png" alt="" />
            </div>
        </div>
    )
}

export default RegisterPage;