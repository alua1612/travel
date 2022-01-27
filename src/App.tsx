import React from 'react';
import banner from './images/main-banner.jpg'
import logo from './images/travel-logo.svg'
import './App.scss';
import Advantages from './Advantages';

function App() {
  return (
    <div className='App'>
      <div className='banner'>
        <img src={banner} alt='banner' className='banner-img'/>
        <div className='banner-text container'>
          <img className='logo' src={logo}/>
          <h1 className='banner-title'>Путешествуй по Казахстану</h1>
        </div>
      </div>
      <Advantages />
    </div>
  );
}

export default App;
