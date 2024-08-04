import { Link, useLoaderData, useNavigate } from 'react-router-dom'
import Chat from '../../components/Chat/chat.jsx'
import List from '../../components/List/list.jsx'
import './profilepage.scss'
import axios from 'axios'
import { useContext } from 'react'
import { AuthContext } from '../../context/AuthContext.jsx'
import Map from '../../components/map/Map.jsx'

function ProfilePage(){
    
    const data = useLoaderData()
    const {updateUser, currentUser} = useContext(AuthContext)
    const navigate = useNavigate()

    const handlelogout = async ()=>{
        try{
            await axios.post("http://localhost:3000/api/auth/logout");
            updateUser(null)
            navigate("/")
        }catch(err){
            console.log(err);
        }
    }
    return(
        <div className='profilepage'>
            <div className="details">
                <div className="wrapper">
                    <div className="title">
                        <h1>User Information</h1>
                        <Link to='/profile/update'>
                        <span>Update User</span></Link>
                    </div>
                    <div className="info">
                        <span>Avatar:<img src={currentUser.avatar || 'nouser.png'}/></span>
                        <span>UserName: <b>{currentUser.username}</b></span>
                        <span>Email: <b>{currentUser.email}</b></span>
                        <button onClick={handlelogout}>Logout</button>
                    </div>
                        <div  className="title">
                        <h1>My List</h1>
                            <Link to='/addpost'>
                            <span>Create New Post</span>
                            </Link>
                        </div>
                    <div>
                        <List posts = {data.userPosts}/>
                    </div>
                    
                    <div className="title">
                        <h1>Saved List</h1>
                    </div>
                    <List/>
                </div>
            </div>
                <div className="chatContainer">
                    <div className="wrapper">
                        <Map items={data.userPosts}/>
                    </div>
                </div>
        </div>
    )
}

export default ProfilePage