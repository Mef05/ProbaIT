import React from 'react';
import Header from './Header.js'
import Home from './Home.js'

import './Style.css'

function App() {
  return (
    <>
      <Header userState="login" />
      <Home />
    </>
  );
}

export default App
