import React from 'react';
import Feature from '../../components/feature/Feature';
import './Features.css';

const featuresData = [
  {
    title: 'Improving end distrusts instantly',
    text: 'From they fine john he give of rich he',
  },
  {
    title: 'Become the tended active',
    text: 'From they fine john he give of rich he',
  },
  {
    title: 'Message or am nothing',
    text: 'From they fine john he give of rich he',
  },
  {
    title: 'Really boy law county',
    text: 'From they fine john he give of rich he',
  },
];
const Features = () => {
  return (
  <div className="ai__features section__padding gradient__bg" id="features">
    <div className="ai__features-heading">
      <h1 className="gradient__text">The Future is Now and You Just Need to Realize It. Step into Future Today & Make it Happen.</h1>
      <p>Request Early Access to Get Started</p>
    </div>
    <div className="ai__features-container">
      {featuresData.map((item,index) => (
        <Feature title={item.title} text={item.text} key={item.title + index} />
      ))}
    </div>
  </div>
  )
}

export default Features ;
