import React from 'react';
import styles from './FriendItem.module.css'

const FriendItem = (props) => {

    return (
        <div className={styles.item}>
            <div>
                <img src={props.avatar} alt='img' />
            </div>
            <div>
                {props.name}
            </div>
        </div>
    )
}

export default FriendItem
