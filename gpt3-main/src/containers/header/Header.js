import React from 'react';
import './header.css';
import people from '../../assets/people.png';
import ai from '../../assets/ai.png'

const Header = () => {
  return (
    <div className='gpt3__header section__padding' id='home'>
      <div className='gpt3__header-content'>
        <h1 className='gradient__text'>
          Let's Build Something amazing with Clever!
        </h1>
        <p>Unlock the future of content creation with our innovative platform designed to make generating, managing, and publishing content effortless. With cutting-edge AI integration, an intuitive interface, and seamless CMS capabilities, this tool is built to empower creators, marketers, and businesses alike. Say goodbye to content bottlenecks and hello to creativity without limits</p>     
        <div className='gpt3__header-content__input'>
          <input type='email' placeholder='Your Email Address'/>
          <button type='button'>Get Started</button>
        </div>

        <div className='gpt3__header-content__people'>
          <img src={people} alt='people'/>
          <p>1,600 people requested access a visit in last 24 hours</p>
        </div>  
      </div>
      <div className='gpt3__header-image'>
       <img src={ai} alt='ai'/>
      </div>  
        
    </div>
  )
} 

export default Header
