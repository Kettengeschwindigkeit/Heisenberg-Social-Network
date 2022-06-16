import React from 'react';
import styles from './MyPosts.module.css'
import Post from './Post/Post';


const MyPosts = () => {
    return (
        <div className={styles.postsBlock}>
            <h3>My posts</h3>
            <div>
                <textarea></textarea>
            </div>
            <div>
                <button>Add post</button>
            </div>
            <div className={styles.posts}>
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
