import React from 'react';
import './App.css';


const App = () => {
  return (
    <div className='app-wrapper'>
      <header className='header'>
        <img src="https://www.heisenberg.shop/media/logo/websites/4/logo-heisenberg.png" alt="logo" />
      </header>
      <nav className='nav'>
        <div>
          <a>Profile</a>
        </div>
        <div>
          <a>Messages</a>
        </div>
        <div>
          <a>News</a>
        </div>
        <div>
          <a>Music</a>
        </div>
        <div>
          <a>Settings</a>
        </div>
      </nav>
      <div className='app-wrapper-content'>
        <div>
          <img src="https://i.ytimg.com/vi/ceqOTZnhgY8/maxresdefault.jpg" alt="" />
        </div>
        <div>
          ava + description
        </div>
        <div>
          My posts
          <div>
            New post
          </div>
          <div>
            <div>
              Post 1
            </div>
            <div>
              Post 2
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App;
