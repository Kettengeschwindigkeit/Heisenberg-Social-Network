import React from 'react';
import styles from './Dialogs.module.css'



const Dialogs = (props) => {
    return (
        <div className={styles.dialogs}>
            <div className={styles.dialogsItems}>
                <div className={styles.dialogs + ' ' + styles.active}>
                    Jesse Pinkman
                </div>
                <div className={styles.dialogs}>
                    Badger
                </div>
                <div className={styles.dialogs}>
                    Skinny Pete
                </div>
                <div className={styles.dialogs}>
                    Krazy-8
                </div>
                <div className={styles.dialogs}>
                    Tuco
                </div>
                <div className={styles.dialogs}>
                    Jane
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
