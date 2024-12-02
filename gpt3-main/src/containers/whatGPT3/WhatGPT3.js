import React from 'react';
import './whatGPT3.css';
import { Feature } from '../../components'


const WhatGPT3 = () => {
  return (
    <div className='gpt3__whatgpt3 section__margin' id='wgpt3'>
     <div className='gpt3__whatgpt3-feature'>
        <Feature title="What is Clever" text="Empowers teams to produce high-quality content at unprecedented speed and scale. Experience a paradigm shift in content production that removes bottlenecks, codifies best practices, and gets you up and running.<br></br> By leveraging AI-driven workflows, marketing teams can streamline the entire content creation process from ideation to publication." />
     </div>
     <div className='gpt3__whatgpt3-heading'>
        <h1 className='gradient__text'>The possibilities are beyond your imagination</h1>
        <p>Explore the Library</p>
     </div>
     <div className='gpt3__whatgpt3-container'>
        <Feature title="Quality" text="Produce high-quality content at unprecedented speed and scale." />
        <Feature title="Brand" text="Applies your unique brand voice, value props, and best practices" />
        <Feature title="Content" text="Effortlessly produce high-quality, SEO-optimized content at scale, driving organic traffic and engagement" />
     </div>
    </div>
  )
}

export default WhatGPT3
