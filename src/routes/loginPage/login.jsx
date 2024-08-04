import { Link, useNavigate } from 'react-router-dom';
import './login.scss';
import { useContext, useState } from 'react';
import axios from 'axios';
import { AuthContext } from '../../context/AuthContext';

function LoginPage(){
    const [error,setError] =useState("")

    const {updateUser} = useContext(AuthContext)

    const navigate = useNavigate()

    const handleSubmit = async (e) =>{
        e.preventDefault();
        setError("")
        const formData = new FormData(e.target)
        const username = formData.get("username");
        const password = formData.get("password");

        try{

            const res = await axios.post("http://localhost:3000/api/auth/login",{
                username,
                password
            })
            updateUser(res.data)
            navigate("/")
        }catch(err){
            setError(err.response.data.message)
        }
    }
    return(
        <div className='loginpage'>
            <div className="formContainer">
                <form onSubmit={handleSubmit}>
                    <h1>Welcome Back!</h1>
                    <input name="username" type="text" placeholder="Username" />
                    <input name="password" type="password" placeholder="Password" />
                    <button>Login</button>
                    {error && <span>{error}</span>}
                    <Link to='/register'><span>Register a new User</span></Link>
                </form>
            </div>
        <div className="imgContainer">
            <img src="/bg.png" alt="" />
        </div>
        </div>
    )
}

export default LoginPage