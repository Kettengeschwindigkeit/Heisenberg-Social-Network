import React from 'react';
import styles from './Profile.module.css'


const Profile = () => {
    return (
        <div className='app-wrapper-content'>
            <div>
                <img src="https://i.ytimg.com/vi/ceqOTZnhgY8/maxresdefault.jpg" alt="" />
            </div>
            <div>
                ava + description
            </div>
            <div>
                My posts
                <div>
                    New post
                </div>
                <div>
                    <div className={styles.item}>
                        Post 1
                    </div>
                    <div className={styles.item}>
                        Post 2
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Profile
