import { useContext, useState } from "react";
import "./navbar.scss"
import { Link } from 'react-router-dom'
import { AuthContext } from "../../context/AuthContext";

function Navbar(){
    const [open, setOpen] = useState(false);
    const {currentUser} = useContext(AuthContext)

    return(
        <nav>
            <div className="left">
                <a href="/" className="logo">
                    <img src="/bricklogo.png" alt=""/>
                    <span>DreamHomes</span>                
                </a>
                <a href="/">Home</a>
                <a href="/">About Us</a>
                <a href="/"> Contact Us </a>
                <a href="/">Agents</a>
            </div>
            <div className="right">
            {currentUser ? (<div className="user">
                <img src={currentUser.avatar || 'nouser.png'}/>
                <span>{currentUser.username}</span>
                <Link to="/profile" className="profile">
                <span>Profile</span></Link>
            </div>) : (<><a href="/login">Sign IN</a>
            <a href="/register" className="register">Sign UP</a>
            </>)}
            </div>
        </nav>
    )
}

export default Navbar