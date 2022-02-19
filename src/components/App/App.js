import './App.css';
// import React, { useState, useEffect } from 'react';
import Header from '../Header/Header';
import Card from '../Card/Card';

function App() {
  return (
    <div className='App' data-testid='App'>
      <Header />
      <Card />
    </div>
  );
}

export default App;
