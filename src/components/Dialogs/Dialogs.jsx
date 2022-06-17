import React from 'react';
import styles from './Dialogs.module.css'
import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message';

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
