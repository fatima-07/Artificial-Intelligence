import React from 'react' ;
import { Footer, Possibility, Features, WhatGPT3, Header } from './containers';
import {  Navbar } from './components';
import './App.css';

const App = () => {
  return (
    <div className='App'>
        <div className='gradient__bg'>
            <Navbar />
            <Header />
        </div>
        <WhatGPT3 />
        <Features />
        <Possibility /> 
        {/*<CTA /> */}
       { /*<Blog /> */}
        <Footer />
    </div>

  )
}

export default App ;
