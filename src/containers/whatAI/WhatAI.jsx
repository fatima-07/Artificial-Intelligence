import React from 'react';
import Feature from '../../components/feature/Feature';
import './WhatAI.css';

const WhatAI = () => {
  return (
    <div className="ai__whatai section__margin" id="wai">
    <div className="ai__whatai-feature">
      <Feature title="What is AI" text="Artificial intelligence is a machine’s ability to perform the cognitive functions we usually associate with human minds." />
    </div>
    <div className="ai__whatai-heading">
      <h1 className="gradient__text">The possibilities are beyond your imagination</h1>
      <p>Explore the Library</p>
    </div>
    <div className="ai__whatai-container">
      <Feature title="Chatbots" text="We so opinion friends me message as delight. Whole front do of plate heard oh ought." />
      <Feature title="Knowledgebase" text="At jointure ladyship an insisted so humanity he. Friendly bachelor entrance to on by. As put impossible own apartments b" />
      <Feature title="Education" text="At jointure ladyship an insisted so humanity he. Friendly bachelor entrance to on by. As put impossible own apartments b" />
    </div>
  </div>
  )
}

export default WhatAI ;
