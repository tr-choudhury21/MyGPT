import React from 'react'
import { Link } from "react-router-dom";
import "./chatList.css";

const ChatList = () => {
    return (
        <div className='chatList'>
            <span className="title">DASHBOARD</span>
            <Link to="/dashboard">Create a new Chat</Link>
            <Link to="/">Explore MyGPT</Link>
            <Link to="/">Contact</Link>
            <hr />
            <div className="upgrade">
                <img src="/logo.png" alt="" />
                <div className="texts">
                    <span>Upgrade to MyGPT Pro</span>
                    <span>Get unlimited access to all features</span>
                </div>
            </div>
        </div>
    )
}

export default ChatList