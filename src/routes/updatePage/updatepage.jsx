import { useContext, useState } from 'react';
import './updatepage.scss';
import { AuthContext } from '../../context/AuthContext';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function UpdatePage(){
    const [error , setError] = useState("")
    const {currentUser, updateUser} = useContext(AuthContext)
    const navigate = useNavigate();

    const handleSubmit = async (e) =>{
        e.preventDefault();
        const formData = new FormData(e.target)
        const {username,email,password} = Object.fromEntries(formData);
        
        try{
            
            const res = await axios.put(`http://localhost:3000/api/users/${currentUser._id}`,{
                username,
                email,
                password
            },
                {
                    headers: {
                      authorization: `${currentUser.token}`   
                    }
                  },
               
                )
            
            updateUser(res.data)
            navigate("/profile")
            // console.log(res.data)
        }catch(err){
            console.log(err);
            setError(err.response.data.message)
        }
    }

    return(
        <div className='updatepage'>
            <div className="formContainer">
                <form onSubmit={handleSubmit}>
                <h1>Update Profile</h1>
                    <div className="item">
                        <label htmlFor="username">Username</label>
                        <input id="username" name="username" type="text" defaultValue={currentUser.username}/>
                    </div>
                    <div className="item">
                        <label htmlFor="email">Email</label>
                        <input id="email" name="email" type="email" defaultValue={currentUser.email}/>
                    </div>
                    <div className="item">
                        <label htmlFor="password">Password</label>
                        <input id="password" name="password" type="password" />
                    </div>
                    <button>Update</button>
                    {error && <span>{error}</span>}
                </form>
      </div>
      <div className="sideContainer">
        <img src={currentUser.avatar || '/nouser.png'} alt="" className="avatar" />
      </div></div>
    )
}

export default UpdatePage