import React, { forwardRef } from 'react'
import { Avatar } from '@mui/material';
// import me from './assets/me.jpg'
import './Post.css'
import InputOption from './InputOption';

import ThumbUpAltOutlinedIcon from '@mui/icons-material/ThumbUpAltOutlined';
import ChatOutlinedIcon from '@mui/icons-material/ChatOutlined';
import ShareOutlinedIcon from '@mui/icons-material/ShareOutlined';
import SendOutlinedIcon from '@mui/icons-material/SendOutlined';

const Post = forwardRef(({ name, desc, msg, photoUrl }, ref) => {
    return (
        <div ref={ref} className='post'>
            <div className='post-header'>
                <Avatar src={photoUrl}>
                    {name[0]}
                </Avatar>
                <div className='post-info'>
                    <h2>{name}</h2>
                    <p>{desc}</p>
                </div>
            </div>
            <div className='post-body'>
                <p>{msg}</p>
            </div>
            <div className='post-buttons'>
                <InputOption Icon={ThumbUpAltOutlinedIcon} title='Like' color='gray' />
                <InputOption Icon={ChatOutlinedIcon} title='Comment' color='gray' />
                <InputOption Icon={ShareOutlinedIcon} title='Share' color='gray' />
                <InputOption Icon={SendOutlinedIcon} title='Send' color='gray' />
            </div>
        </div>
    )
})

export default Post