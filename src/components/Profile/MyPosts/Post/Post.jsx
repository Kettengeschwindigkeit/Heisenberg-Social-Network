import React from 'react';
import styles from './Post.module.css'


const Post = () => {
    return (
        <div className={styles.item}>
            <img src="https://www.pngitem.com/pimgs/m/79-797310_breaking-bad-heisenberg-logo-hd-png-download.png" alt="" />
            post 1
            <div>
                <span>like</span>
            </div>
        </div>
    )
}

export default Post
