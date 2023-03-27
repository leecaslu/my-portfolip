import './App.css';
import HeadersContainer from './Components/Header/HeadersContainer';
import React from 'react';

function App() {
  return (
    <div>
      <div className='container' id='header'>
        <HeadersContainer />
      </div>
      <div className='container' id='body'>

      </div>
      <div className='container' id='fotoLucas'>
        <img src='http://placehold.it/' alt='placeholder'></img>
      </div>
    </div>



  );
}

export default App;
