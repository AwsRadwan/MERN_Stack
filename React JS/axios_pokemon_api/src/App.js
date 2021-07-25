import logo from './logo.svg';
import './App.css';
import MyComponent from './components/mycomponent';
import React, { useEffect, useState } from 'react';
import axios from 'axios';

function App() {
  return (
    <div className="App">
      <MyComponent />
    </div>
  );
}

export default App;
