import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from './Header.module.css'


const Header = (props) => {
    return (
        <header className={styles.header}>
            <img src="https://www.heisenberg.shop/media/logo/websites/4/logo-heisenberg.png" alt="logo" />
            <div className={styles.loginBlock}>
                { props.isAuth ? props.login : <NavLink to={'/login'}>Login</NavLink> }
            </div>
        </header>
    )
}

export default Header
