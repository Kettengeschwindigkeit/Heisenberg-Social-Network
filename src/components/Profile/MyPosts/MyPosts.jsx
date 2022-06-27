import React from 'react';
import styles from './MyPosts.module.css'
import Post from './Post/Post';


const MyPosts = (props) => {

    let newPostElement = React.createRef()

    let addPost = () => {
        let text = newPostElement.current.value
        props.addPost(text)
        newPostElement.current.value = ''
    }

    let postsElements = props.posts.map(post => <Post message={post.message} likesCount={post.likesCount} />)

    return (
        <div className={styles.postsBlock}>
            <h3>My posts</h3>
            <div>
                <textarea ref={ newPostElement }></textarea>
            </div>
            <div>
                <button onClick={ addPost }>Add post</button>
            </div>
            <div className={styles.posts}>
                {postsElements}
            </div>
        </div>
    )
}

export default MyPosts
