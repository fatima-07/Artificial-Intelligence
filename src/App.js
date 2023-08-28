import React from 'react' ;
import { Footer, Possibility, Features, WhatAI, Header } from './containers';
import {  Navbar } from './components';
import './App.css';

const App = () => {
  return (
    <div className='App'>
        <div className='gradient__bg'>
            <Navbar />
            <Header />
        </div>
        <WhatAI />
        <Features />
        <Possibility /> 
        <Footer />
    </div>

  )
}

export default App ;
