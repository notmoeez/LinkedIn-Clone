import React from 'react'
import './Header.css'
import HeaderOptions from './HeaderOptions';
import { useDispatch } from 'react-redux'


import SearchIcon from '@mui/icons-material/Search';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import HomeIcon from '@mui/icons-material/Home';
import SupervisorAccountIcon from '@mui/icons-material/SupervisorAccount';
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';
import ChatIcon from '@mui/icons-material/Chat';
import NotificationsIcon from '@mui/icons-material/Notifications';
// import me from './assets/me.jpg'
import { logout } from './features/userSlice';
import { auth } from './firebase';

function Header() {

    const dispatch = useDispatch();

    const logoutOfApp = () => {
        dispatch(logout());
        auth.signOut();
    }

    return (
        <div className='header'>
            <div className='header-left'>
                <LinkedInIcon className='linkedin-logo' />
                <div className='header-search'>
                    <SearchIcon />
                    <input placeholder='Search' type="" />
                </div>
            </div>

            <div className='header-right'>
                <HeaderOptions Icon={HomeIcon} title='Home' />
                <HeaderOptions Icon={SupervisorAccountIcon} title='My Network' />
                <HeaderOptions Icon={BusinessCenterIcon} title='Jobs' />
                <HeaderOptions Icon={ChatIcon} title='Chat' />
                <HeaderOptions Icon={NotificationsIcon} title='Notifications' />
                <HeaderOptions onClick={logoutOfApp} avatar={true} title='me' />

            </div>

        </div>
    )
}

export default Header;