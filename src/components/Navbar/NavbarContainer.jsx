import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from './Navbar.module.css'
import Friends from './Friends'
import StoreContext from '../../StoreContext';
import Navbar from './Navbar';


const NavbarContainer = () => {

    return (
        <StoreContext.Consumer>
            {(store) => {
                return <Navbar sidebar={store.getState().sidebar} />
            }
            }
        </StoreContext.Consumer>
    )
}

export default NavbarContainer
