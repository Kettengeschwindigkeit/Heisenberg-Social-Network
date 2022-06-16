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

    let dialogsData = [
        { id: 1, name: 'Jesse Pinkman' },
        { id: 2, name: 'Badger' },
        { id: 3, name: 'Skinny Pete' },
        { id: 4, name: 'Skinny Pete' },
        { id: 5, name: 'Tuco' },
        { id: 6, name: 'Jane' }
    ]

    let messagesData = [
        { id: 1, message: 'Hey! What up beyotch!' },
        { id: 2, message: 'Yo!' },
        { id: 3, message: 'Yo!' },
        { id: 4, message: 'Yo!' }
    ]

    return (
        <div className={styles.dialogs}>
            <div className={styles.dialogsItems}>
                <DialogItem name={dialogsData[0].name} id={dialogsData[0].id} />
                <DialogItem name={dialogsData[1].name} id={dialogsData[1].id} />
                <DialogItem name={dialogsData[2].name} id={dialogsData[2].id} />
                <DialogItem name={dialogsData[3].name} id={dialogsData[3].id} />
                <DialogItem name={dialogsData[4].name} id={dialogsData[4].id} />
                <DialogItem name={dialogsData[5].name} id={dialogsData[5].id} />
            </div>
            <div className={styles.messages}>
                <Message message={messagesData[0].message} />
                <Message message={messagesData[1].message} />
                <Message message={messagesData[2].message} />
                <Message message={messagesData[3].message} />
            </div>
        </div>
    )
}

export default Dialogs
