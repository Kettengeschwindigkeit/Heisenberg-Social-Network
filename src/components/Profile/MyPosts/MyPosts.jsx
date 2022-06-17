import React from 'react';
import styles from './MyPosts.module.css'
import Post from './Post/Post';


const MyPosts = () => {

    let posts = [
        { id: 1, message: 'Hey! What up beyotch!', likesCount: 12 },
        { id: 2, message: 'Yo yo yo!!', likesCount: 11 }
    ]

    let postsElements = posts.map(post => <Post message={post.message} likesCount={post.likesCount} />)

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
                {postsElements}
            </div>
        </div>
    )
}

export default MyPosts
