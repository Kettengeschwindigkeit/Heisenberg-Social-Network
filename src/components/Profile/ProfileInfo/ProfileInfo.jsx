import React from 'react';
import Preloader from '../../common/Preloader';
import styles from './ProfileInfo.module.css'


const ProfileInfo = (props) => {

    if (!props.profile) {
        return <Preloader />
    }

    return (
        <div>
            <div>
                <img src="https://i.ytimg.com/vi/ceqOTZnhgY8/maxresdefault.jpg" alt="" id='main-img' />
            </div>
            <div className={styles.descriptionBlock}>
                <img src={props.profile.photos.large} />
                <div>{props.profile.aboutMe}</div>
                <div>
                    <span>Looking for a job:</span>
                    <span>&nbsp;{props.profile.lookingForAJobDescription}</span>
                </div>
                <div>
                    <div>
                        <span>Facebook:</span>
                        <span>&nbsp;{props.profile.contacts.facebook}</span>
                    </div>
                    <div>
                        <span>Instagram:</span>
                        <span>&nbsp;{props.profile.contacts.instagram}</span>
                    </div>
                    <div>
                        <span>Twitter:</span>
                        <span>&nbsp;{props.profile.contacts.twitter}</span>
                    </div>
                    <div>
                        <span>VK:</span>
                        <span>&nbsp;{props.profile.contacts.vk}</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProfileInfo
