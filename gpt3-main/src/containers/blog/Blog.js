import React from 'react';
import Article from '../../components/article/Article';
import { blog1, blog2, blog3, blog4, blog5 } from './imports';
import './blog.css';

const Blog = () => (
  <div className="gpt3__blog section__padding" id="blog">
    <div className="gpt3__blog-heading">
      <h1 className="gradient__text">A lot is happening, <br /> See what our users say on this tool</h1>
    </div>
    <div className="gpt3__blog-container">
      <div className="gpt3__blog-container_groupA">
        <Article imgUrl={blog1} date="Sep 26, 2021" text="Secure, vertical AI-native platform for business-critical operations, AI writes the first draft, humans apply the last mile polish." />
      </div>
      <div className="gpt3__blog-container_groupB">
        <Article imgUrl={blog2} date="Sep 26, 2021" text="Our customers consistently see a sustainable increase in content creation at a fraction of the price of external resources." />
        <Article imgUrl={blog3} date="Sep 26, 2021" text="Perfect for teams looking to establish thought leadership, improve search rankings, and fuel inbound lead generation." />
        <Article imgUrl={blog4} date="Sep 26, 2021" text="Real-time model memorisation for future reference" />
        <Article imgUrl={blog5} date="Sep 26, 2021" text="Produce high-quality content at unprecedented speed and scale." />
      </div>
    </div>
  </div>
);

export default Blog;
