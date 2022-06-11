import React from 'react';
import './App.css';

const App = () => {
  return (
    <div>
      <Header />
      <Technologies />
    </div>
  );
}

const Header = () => {
  return (
    <div>
      <ul>
        <a href='#'>Home</a>
        <a href='#'>News Feed</a>
        <a href='#'>Messages</a>
      </ul>
    </div>
  );
}

const Technologies = () => {
  return (
      <div>
        <ul>
          <li>html</li>
          <li>css</li>
          <li>js</li>
          <li>react</li>
        </ul>
      </div>
  );
}

export default App;
