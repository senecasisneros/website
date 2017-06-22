import React from 'react';
import { Image } from 'react-bootstrap';
import Contact from './Contact';
import animated from 'animate.css';

class About extends React.Component {

  render() {
    return (
      <div className="About">
        <Image className="imgAbout2 animated flip" src="https://s3.amazonaws.com/website-seneca/Pups.jpg" responsive thumbnail />
        <Image className="imgAbout1 animated flip" src="https://s3.amazonaws.com/website-seneca/family1.jpg" responsive thumbnail />
        <div className="allText">
          <h1 id="aboutMe" className="animated rubberBand">Hi! My name is Seneca and this is my story....</h1>
          <h5 id="quote">The most dangerous thing you can do in life is play it safe. -Casey Neistat</h5>
          <p id="aboutText">If someone would have come to me a few years ago and told me my life was about to take a 180-degree turn, and that my days working at the Bank were numbered, I would have laughed it off to cover up the anxiety of the very thought. At that time, I had already spent nearly 10 years building a career with the Bank, navigating my way through sales and lending, all while trying to climb the corporate ladder. So, the very thought that all of that would someday be gone, especially if by my own choice, would most definitely not be something I saw as a positive impact on my future.</p>
          <p id="aboutText1">Don’t get me wrong, my time at the Bank provided me with years of experience, and a set of invaluable skills that have helped me get where I am today. But despite that, there was something big missing from my definition of success.  Eventually I did come to realize the true meaning of Casey Neitstat’s quote. What I considered safe, was actually the most dangerous thing I could do. For that reason, I decided it was time for me to make a big change and take a chance to discover what I was missing. It was time for me to discover my passion and pursue my dream of working in the tech industry.  A decision that has helped shape the person I am today. </p>
          <p id="aboutText3">So, who exactly am I? Well, I’m definitely more than just a self- taught Full-Stack Web Developer. I’m an individual who went through a massive personal and professional transformation over the past few years that I am extremely grateful for. A transformation, that not only challenged me, but helped me identify my strengths and weaknesses, and helped me learn how to work them to my advantage. I am also a self-motivated, passionate individual that doesn’t give up easily. I am a person that willingly gave up all comfort and financial security and placed a bet on myself, knowing I needed, and wanted, to make a bigger contribution in this world. I love hanging out with my two spoiled dogs, exploring new places, kickboxing, juicing and crystals. I push myself every day to learn something new, grow my faith and challenge myself to become a better person. This is just the start of my journey, and I’m excited to see what comes next.</p>
      </div>
    </div>
    );
  }
}

export default About;
