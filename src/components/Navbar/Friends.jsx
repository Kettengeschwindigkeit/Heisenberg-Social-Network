import React from 'react';
import FriendItem from './FriendItem'
import styles from './Friends.module.css'

const Friends = (props) => {

    let friendsElements = props.state.friends.map(f => <FriendItem name={f.name} avatar={f.avatar}/>)

    return (
        <div className={styles.friends_block}>
            <h4>Friends</h4>
            {friendsElements}
        </div>
    )
}

export default Friends
