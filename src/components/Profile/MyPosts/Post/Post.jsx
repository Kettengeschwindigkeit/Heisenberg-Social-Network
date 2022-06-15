import React from 'react';
import styles from './Post.module.css'


const Post = (props) => {
    return (
        <div className={styles.item}>
            <img src="https://www.pngitem.com/pimgs/m/79-797310_breaking-bad-heisenberg-logo-hd-png-download.png" alt="" />
            {props.message}
            <div>
                <span>like</span>
                <span>{props.likesCount}</span>
            </div>
        </div>
    )
}

export default Post
