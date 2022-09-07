import React from 'react'
import './Sidebar.css'
import { Avatar } from '@mui/material';
import background from './assets/background.jpg'
// import me from './assets/me.jpg'
import { useSelector } from 'react-redux';
import { selectUser } from './features/userSlice'

function Sidebar() {

    const user = useSelector(selectUser);

    const recentItem = (topic) => (
        <div className='sidebar-recentItem'>
            <span className='sidebar-hash'>
                #
            </span>
            <p>{topic}</p>

        </div>
    )

    return (
        <div className='sidebar'>
            <div className='sidebar-top'>
                <img src={background} alt="" />
                <Avatar src={user.photoUrl} className='sidebar-avatar'>
                    {user.email[0]}
                </Avatar>
                <div className='sidebar-user-details'>
                    <h2>{user.displayName}</h2>
                    <h4>{user.email}</h4>
                </div>
            </div>
            <div className='sidebar-stats'>
                <div className='sidebar-stat'>
                    <p>Who viewed you</p>
                    <p className='sidebar-statNumber'>9,000</p>
                </div>
                <div className='sidebar-stat'>
                    <p>Views on post</p>
                    <p className='sidebar-statNumber'>9,000</p>
                </div>
            </div>
            <div className='sidebar-bottom'>
                <p>Recent</p>
                {recentItem('react js')}
                {recentItem('programming')}
                {recentItem('cpp')}
                {recentItem('redux')}
                {recentItem('firebase')}
            </div>
        </div>
    )
}

export default Sidebar