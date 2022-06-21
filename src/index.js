import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';


let posts = [
    { id: 1, message: 'Hey! What up beyotch!', likesCount: 12 },
    { id: 2, message: 'Yo yo yo!!', likesCount: 11 }
]

let dialogs = [
    { id: 1, name: 'Jesse Pinkman' },
    { id: 2, name: 'Badger' },
    { id: 3, name: 'Skinny Pete' },
    { id: 4, name: 'Combo' },
    { id: 5, name: 'Tuco' },
    { id: 6, name: 'Jane' }
]

let messages = [
    { id: 1, message: 'Hey! What up beyotch!' },
    { id: 2, message: 'Yo!' },
    { id: 3, message: 'Yo!' },
    { id: 4, message: 'Yo!' }
]

ReactDOM.render(<App posts={posts} dialogs={dialogs} messages={messages} />, document.getElementById('root'));
