import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from './Dialogs.module.css'


const DialogsItems = (props) => {

    let  path = '/dialogs/' + props.id

    return (
        <div className={styles.dialogs + ' ' + styles.active}>
            <NavLink to={path}>{props.name}</NavLink>
        </div>
    )
}

const Message = (props) => {
    return <div className={styles.message}>{props.message}</div>
}

const Dialogs = (props) => {
    return (
        <div className={styles.dialogs}>
            <div className={styles.dialogsItems}>
                    <DialogsItems name='Jesse Pinkman' id='1' />
                    <DialogsItems name='Badger' id='2' />
                    <DialogsItems name='Skinny Pete' id='3' />
                    <DialogsItems name='Krazy-8' id='4' />
                    <DialogsItems name='Tuco' id='5' />
                    <DialogsItems name='Jane' id='6' />
            </div>
            <div className={styles.messages}>
                <Message message='Hey! What up beyotch!' />
                <Message message='Yo!' />
                <Message message='Yo!' />
                <Message message='Yo!' />
            </div>
        </div>
    )
}

export default Dialogs
