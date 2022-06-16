import React from 'react';
import styles from './ProfileInfo.module.css'


const ProfileInfo = () => {
    return (
        <div>
            <div>
                <img src="https://i.ytimg.com/vi/ceqOTZnhgY8/maxresdefault.jpg" alt="" id='main-img' />
            </div>
            <div className={styles.descriptionBlock}>
                ava + description
            </div>
        </div>
    )
}

export default ProfileInfo
