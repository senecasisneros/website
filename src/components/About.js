import React from 'react';
import { Image } from 'react-bootstrap';
import Contact from './Contact';
import animated from 'animate.css';

class About extends React.Component {

  render() {
    return (
      <div className="About">
        <div id="about">
          <h1 id="aboutMe">Hi! My name is Seneca and this is my story....</h1>
          <h5 id="quote">The most dangerous thing you can do in life is play it safe. -Casey Neistat</h5>
        <p id="aboutText"> If someone would have come to me 5 years ago and told me that my days at the Bank were numbered, I would have assumed the worst and thought nothing but bad luck must be coming my way. After all, I had spent 10 years of my life building my career as a Banker and Loan Officer,and losing my career couldn't possibly be the outcome of anything good. It's actually kind of funny though, because looking back now, I can't even imagine what made me think that staying at the Bank was a good idea to begin with. </p>
        <p id="aboutText1"> Don't get me wrong, my previous career was rewarding in many ways and helped me become the Professional I am today. But in order to give you some insight on how I became the person I am today, I have to explain how leaving my career and the security that came with it, ended up being the best and scariest decision of my life. After all, like Casey Neitstat said, "the most dangerous thing in life is playing it safe." and have to take a little time to explain the magnificent, yet turbulent, personal and professional transformation that I have gone through over the past few years. I mean, I could definitely give you the typical "About Me" stats but if you really want to know ME, you have to understand the passion and perseverance that unveiled the person I am today.  </p>
        <p id="aboutText2"> One thing I can tell you about myself is that looking back and reflecting on how far I have come, personally and professionally, is one of my favorite things to do. Not just to pat myself on the back or brag about my achievements, but because I'm grateful for every opportunity and experience I have to grow. </p>
        {/* <p id="aboutText1">what good could come with 10 years in the financial industry, were upon me and losing my career meant things were going to get really tough. </p> */}
        </div>
        <div className="imgDiv1">
          <Image className="imgAbout2" src="https://s3.amazonaws.com/website-seneca/Pups.jpg" responsive thumbnail />
          <Image className="imgAbout1" src="https://s3.amazonaws.com/website-seneca/family1.jpg" responsive thumbnail />
        </div>
      </div>
    );
  }
}

export default About;
