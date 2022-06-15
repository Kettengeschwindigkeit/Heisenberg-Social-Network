import React from 'react';
import MyPosts from './MyPosts/MyPosts';
import styles from './Profile.module.css'


const Profile = () => {
    return (
        <div>
            <div>
                <img src="https://i.ytimg.com/vi/ceqOTZnhgY8/maxresdefault.jpg" alt="" id='main-img' />
            </div>
            <div>
                ava + description
            </div>
            <MyPosts />
        </div>
    )
}

export default Profile
