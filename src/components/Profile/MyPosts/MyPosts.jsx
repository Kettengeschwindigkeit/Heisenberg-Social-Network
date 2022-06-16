import React from 'react';
import styles from './MyPosts.module.css'
import Post from './Post/Post';


const MyPosts = () => {

    let postsData = [
        { id: 1, message: 'Hey! What up beyotch!', likesCount: 12 },
        { id: 2, message: 'Yo yo yo!!', likesCount: 11 }
    ]

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
                <Post message={postsData[0].message} likesCount={postsData[0].likesCount} />
                <Post message={postsData[1].message} likesCount={postsData[1].likesCount} />
                <Post />
                <Post />
                <Post />
            </div>
        </div>
    )
}

export default MyPosts
