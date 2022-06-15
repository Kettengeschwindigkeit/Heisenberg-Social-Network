import React from 'react';
import styles from './MyPosts.module.css'
import Post from './Post/Post';


const MyPosts = () => {
    return (
        <div>
            My posts
            <div>
                <textarea></textarea>
                <button>Add post</button>
            </div>
            <div>
                <Post message='Hey! What up beyoutch!' likesCount='543' />
                <Post message='Yo yo yo!' likesCount='25' />
                <Post />
                <Post />
                <Post />
            </div>
        </div>
    )
}

export default MyPosts
