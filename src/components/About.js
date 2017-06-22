import React from 'react';
import { Image } from 'react-bootstrap';
import Contact from './Contact';
import animated from 'animate.css';

class About extends React.Component {

  render() {
    let url = 'https://s3.amazonaws.com/website-seneca/asphalt2.jpg';
    return (
      <div className="About">
        <Image className="imgAbout2 animated flip" src="https://s3.amazonaws.com/website-seneca/Pups.jpg" responsive thumbnail />
        <Image className="imgAbout1 animated flip" src="https://s3.amazonaws.com/website-seneca/family1.jpg" responsive thumbnail />
        <div className="allText">
          <h1 id="aboutMe" className="animated rubberBand">Hi! My name is Seneca and this is my story....</h1>
          <h5 id="quote">The most dangerous thing you can do in life is play it safe. -Casey Neistat</h5>
          <p id="aboutText">If someone told me a few years ago that my days at the Bank were numbered, more than likely, my face would be wearing an expression of pure panic and dread.
      After all, at that point, I had spent nearly 10 years with the Bank, building a career around sales and lending and doing what I was supposed to,  climbing the corporate ladder.</p>
          <p id="aboutText1">I bought my house, setup my retirement, and worked long and hard in order to achieve comfort and  financial security. How could I possibly maintain my success without my career?</p>
          <p id="aboutText2">But looking back, I now realize, I had not achieved what I  now consider true success. I was still missing some really important things in my life and truth be told, knowing what I know now, I find it hard to believe I ever thought  my days at the Bank were not numbered.</p>
          <p id="aboutText2">Don't get me wrong, I am incredibly grateful for the  skills, experiences, and lessons I received during my previous career. I am also very happy I was able to
  Build a foundation and achieve the security that I worked so hard to obtain. Realistically, it’s one of the primary reasons I am where I am today.
  But the things I value most in life, the things that define the person I am today, and the things that I want people to know about me,  were missing from that equation. Because the person I am today, is a result of a personal and professional transformation, and a decision to, “not play it safe”. The person I am today, if told their life was going to dramatically change in a few years,  would not look at you with an expression of pure dread. But rather</p>
          <p id="aboutText3">So what are these things you ask? Well, there’s quite of few, but if you really want to learn “about me”, then you should know I value …</p>
        </div>
      </div>
    );
  }
}

export default About;
