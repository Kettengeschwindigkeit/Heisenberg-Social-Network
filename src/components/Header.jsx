import React from 'react';
import styles from './Header.module.css'


const Header = () => {
    return (
        <header className={styles.header}>
            <img src="https://www.heisenberg.shop/media/logo/websites/4/logo-heisenberg.png" alt="logo" />
        </header>
    )
}

export default Header
