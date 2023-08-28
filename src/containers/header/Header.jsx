import React from 'react';
import './Header.css';
import people from '../../assets/people.png';
import ai from '../../assets/ai.png';

const Header = () => {
  return (
    <div className="gpt3__header section__padding" id="home">
      <div className="gpt3__header-content">
        <h1 className="gradient__text">Artificial Intelligence: What Is It and Why It Matters</h1>
        <p>AI is a machine’s ability to perform the cognitive functions we associate with human minds, 
          such as perceiving, reasoning, learning, interacting with an environment, problem solving,
          and even exercising creativity. You’ve probably interacted with AI even if you didn’t realize 
          it—voice assistants like Siri and Alexa are founded on AI technology, as are some customer service 
          chatbots that pop up to help you navigate websites.
        </p>

        <div className="gpt3__header-content__input">
          <input type="email" placeholder="Your Email Address"></input>
          <button type="button">Get Started</button>
        </div>

        <div className="gpt3__header-content__people">
          <img src={people} alt="people"/>
          <p>1,600 people requested access a visit in last 24 hours</p>
        </div>     
      </div>

      <div className="gpt3__header-image">
          <img src={ai} alt="ai" />
      </div>  
      
    </div>
  )
}

export default Header ;
