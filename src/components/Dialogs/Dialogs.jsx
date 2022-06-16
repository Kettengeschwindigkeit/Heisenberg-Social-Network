import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from './Dialogs.module.css'


const Dialogs = (props) => {
    return (
        <div className={styles.dialogs}>
            <div className={styles.dialogsItems}>
                <div className={styles.dialogs + ' ' + styles.active}>
                    <NavLink to='/dialogs/1'>Jesse Pinkman</NavLink>
                </div>
                <div className={styles.dialogs}>
                    <NavLink to='/dialogs/2'>Badger</NavLink>
                </div>
                <div className={styles.dialogs}>
                    <NavLink to='/dialogs/3'>Skinny Pete</NavLink>
                </div>
                <div className={styles.dialogs}>
                    <NavLink to='/dialogs/4'>Krazy-8</NavLink>
                </div>
                <div className={styles.dialogs}>
                    <NavLink to='/dialogs/5'>Tuco</NavLink>
                </div>
                <div className={styles.dialogs}>
                    <NavLink to='/dialogs/6'>Jane</NavLink>
                </div>
            </div>
            <div className={styles.messages}>
                <div className={styles.message}>Hey! What up beyotch!</div>
                <div className={styles.message}>Yo</div>
                <div className={styles.message}>Yo</div>
            </div>
        </div>
    )
}

export default Dialogs
