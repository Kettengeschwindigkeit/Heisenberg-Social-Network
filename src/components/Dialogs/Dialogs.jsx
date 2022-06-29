import React from 'react';
import styles from './Dialogs.module.css'
import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message';


const Dialogs = (props) => {

    let dialogsElements = props.dialogsPage.dialogs.map(dialog => <DialogItem name={dialog.name} id={dialog.id} avatar={dialog.avatar} />)
    let messagesElements = props.dialogsPage.messages.map(message => <Message message={message.message} />)

    let newMessageElement = React.createRef()

    let addMessage = () => {
        props.dispatch({ type: 'ADD-MESSAGE' })
    }

    let onMessageChange = () => {
        let text = newMessageElement.current.value
        props.dispatch({ type: 'UPDATE-NEW-MESSAGE-TEXT', newText: text })
    }

    return (
        <div className={styles.dialogs}>
            <div className={styles.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={styles.messages}>
                {messagesElements}
                <div>
                    <textarea onChange={onMessageChange} ref={newMessageElement} value={props.dialogsPage.newMessageText}></textarea>
                </div>
                <div>
                    <button onClick={addMessage}>Send</button>
                </div>
            </div>
        </div>
    )
}

export default Dialogs
