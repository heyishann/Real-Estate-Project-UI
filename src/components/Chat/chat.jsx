import { useState } from 'react'
import './chat.scss'

function Chat(){
    const [chat,setChat] = useState(true)
    return(
        <div className='chat'>
            <h1>Messages</h1>
            <div className="messages">
                
                <div className="message">
                    <img src="https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
                    <span>Amit</span>
                    <p>Hi! Amit here.</p>
                </div>
                <div className="message">
                    <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
                    <span>Mohit Nagar</span>
                    <p>Hi! Mohit here.</p>
                </div>
                <div className="message">
                    <img src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
                    <span>Yash Jaiswal</span>
                    <p>Hi! Yash here.</p>
                </div>
                <div className="message">
                    <img src="https://images.unsplash.com/photo-1530268729831-4b0b9e170218?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
                    <span>Hitesh Ahuja</span>
                    <p>Hi! Hitesh here.</p>
                </div>
                <div className="message">
                    <img src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fHJhbmRvbSUyMHBlb3BsZXxlbnwwfHwwfHx8MA%3D%3D" alt="" />
                    <span>Manan Jain</span>
                    <p>Hi! Manan here.</p>
                </div>
            </div>
            {chat && (<div className="chatBox">
                <div className="top">
                    <div className="user">
                        <img src="https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
                        Amit 
                    </div>
                    <span className='close' onClick={()=>setChat(null)}>x</span>
                </div>
                <div className="center">
                    <div className="chatmessage">
                        <p>Hi! Ishan.</p>
                        <span>1 hr ago</span>
                    </div>
                    <div className="chatmessage own">
                        <p>Hi! Amit.</p>
                        <span>1 hr ago</span>
                    </div>
                    <div className="chatmessage">
                        <p>How are you?</p>
                        <span>1 hr ago</span>
                    </div>
                    <div className="chatmessage own">
                        <p>I'm fine , How are you?</p>
                        <span>1 hr ago</span>
                    </div>
                    <div className="chatmessage">
                        <p>I'm good too</p>
                        <span>1 hr ago</span>
                    </div>
                    <div className="chatmessage own">
                        <p>How can i help you?</p>
                        <span>1 hr ago</span>
                    </div>

                </div>
                <div className="bottom">
                    <textarea></textarea>
                    <button>Send</button>
                </div>
            </div>)}
        </div>
    )
}

export default Chat