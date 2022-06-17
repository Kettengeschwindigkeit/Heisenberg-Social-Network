import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from './Dialogs.module.css'

const DialogItem = (props) => {

    let path = '/dialogs/' + props.id

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

    let dialogs = [
        { id: 1, name: 'Jesse Pinkman' },
        { id: 2, name: 'Badger' },
        { id: 3, name: 'Skinny Pete' },
        { id: 4, name: 'Skinny Pete' },
        { id: 5, name: 'Tuco' },
        { id: 6, name: 'Jane' }
    ]

    let messages = [
        { id: 1, message: 'Hey! What up beyotch!' },
        { id: 2, message: 'Yo!' },
        { id: 3, message: 'Yo!' },
        { id: 4, message: 'Yo!' }
    ]

    let dialogsElements = dialogs.map(dialog => <DialogItem name={dialog.name} id={dialog.id} />)
    let messagesElements = messages.map(message => <Message message={message.message} />)

    return (
        <div className={styles.dialogs}>
            <div className={styles.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={styles.messages}>
                {messagesElements}
            </div>
        </div>
    )
}

export default Dialogs
