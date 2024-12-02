import React from 'react';
import './feature.css';
import { Feature } from '../../components';

const featuresData=[
  {
    title: 'AI-Driven Content Generation',
    text:'Generate high-quality, custom content in seconds, tailored to your needs.'
  },
  {
    title: 'User-Friendly Interface',
    text:'Navigate an intuitive, responsive design that simplifies every step of content creation'
  },
  {
    title: 'Customizable Templates',
    text:'Choose from a variety of templates to suit any style or purpose'
  },
  {
    title: 'Mobile-Friendly Design',
    text:'Create and manage content on the go with full mobile compatibility'
  }
]

const Features = () => {
  return (
    <div className='gpt3__features section__padding' id='features'>
      <div className='gpt3__features-heading'>
        <h1 className='gradient__text'>
          The Future is Now and You Just Need To Realize It. Step into Future Today & Make it Happen.
        </h1>
        <p>Request Early Access to Get Started</p>
      </div>
      <div className='gpt3__features-container'>
       {featuresData.map((item ,index)=>(
        <Feature title={item.title} text={item.text} key={item.title + index}/>
       ))}

      </div>
 
    </div>
  )
}

export default Features;
