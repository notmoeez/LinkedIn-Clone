import React, { useState, useEffect } from 'react'
import './Feed.css'

import CreateIcon from '@mui/icons-material/Create';
import ImageIcon from '@mui/icons-material/Image';
import SubscriptionsIcon from '@mui/icons-material/Subscriptions';
import EventNoteIcon from '@mui/icons-material/EventNote';
import CalendarViewDayIcon from '@mui/icons-material/CalendarViewDay';

import InputOption from './InputOption';
import Post from './Post';
import { db } from './firebase'
import firebase from 'firebase/compat/app';
import { useSelector } from 'react-redux';
import {selectUser} from './features/userSlice'
import FlipMove from 'react-flip-move';


function Feed() {

    const user = useSelector(selectUser);

    const [post, setPost] = useState([]);

    const [input, setInput] = useState("");

    useEffect(() => {
        db.collection("posts").orderBy('timestamp','desc').onSnapshot((snapshot) => 
            setPost(snapshot.docs.map((doc) => (
                {
                    id: doc.id,
                    data: doc.data(),
                }
            )))
        )
    }, [])


    const sendPost = (e) => {
        e.preventDefault();

        db.collection('posts').add({
            name: user.displayName,
            desc: user.email,
            msg: input,
            photoUrl:user.photoUrl || '',
            timestamp: firebase.firestore.FieldValue.serverTimestamp(),
        })

        setInput("");
    }

    return (
        <div className='feed'>
            <div className='feed-inputContainer'>
                <div className='feed-input'>
                    <CreateIcon />
                    <form>
                        <input value={input} onChange={(e) => setInput(e.target.value)} type="text" />
                        <button onClick={sendPost} type="submit">Send</button>
                    </form>
                </div>
                <div className='feed-inputOptions'>
                    <InputOption title='Photo' Icon={ImageIcon} color='#70B5F9' />
                    <InputOption title='Video' Icon={SubscriptionsIcon} color='#E7A33E' />
                    <InputOption title='Event' Icon={EventNoteIcon} color='#C0CBCD' />
                    <InputOption title='Write article' Icon={CalendarViewDayIcon} color='#f05e1b' />
                </div>
            </div>
            {/* Posts */}

            <FlipMove>

            {post.map(({ id, data: { name, desc, msg, photoUrl } }) => (
                <Post
                    key={id}
                    name={name}
                    desc={desc}
                    msg={msg}
                    photoUrl={photoUrl}
                />
            ))}

            </FlipMove>


            {/* <Post name='Moez' desc='test123' msg='testing testing 123' /> */}

        </div>
    )
}

export default Feed