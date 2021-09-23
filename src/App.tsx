import React from 'react';

import './App.css';

import Display from './components/Display';

function App() {
  return (
    <div className="c-app">
      <Display value={6}/>
    </div>
  );
}

export default App;
