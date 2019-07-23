import React from 'react';
import Main from './components/Main';
import './App.css';
import ball from './assets/coding.gif'


function App() {
  return (
    <div className="container-fluid">
      <Main image={ball}/>
    </div>
  );
}

export default App;
