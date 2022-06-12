import React from 'react';
import styles from './Navbar.module.css'

// let styles =  {
//     'nav': 'Navbar_nav_3ou9Q',
//     'item': 'Navbar_nav_3qaF3'
// }

const Navbar = () => {
    return (
        <nav className={styles.nav}>
            <div className={styles.item}>
                <a>Profile</a>
            </div>
            <div className={`${styles.item} ${styles.active}`}>
                <a>Messages</a>
            </div>
            <div className={styles.item}>
                <a>News</a>
            </div>
            <div className={styles.item}>
                <a>Music</a>
            </div>
            <div className={styles.item}>
                <a>Settings</a>
            </div>
        </nav>
    )
}

export default Navbar
