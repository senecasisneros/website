import React from 'react';
import { Image } from 'react-bootstrap';
import Contact from './Contact';
import animated from 'animate.css';

class About extends React.Component {
  render() {
    return (
      <div className="About">
        <div className="imgDiv1">
          <Image className="imgAbout2" src="https://s3.amazonaws.com/website-seneca/Pups.jpg" responsive thumbnail />
          <Image className="imgAbout1" src="https://s3.amazonaws.com/website-seneca/family1.jpg" responsive thumbnail />
    </div>
        <div id="about">
          <h1 id="aboutMe">Hi! My name is Seneca and this is my story....</h1>
          <h5 id="quote">The most dangerous thing you can do in life is play it safe. -Casey Neistat</h5>
          <p id="aboutText"> I am a full-stack JavaScript web developer. I am a very positive minded individual who enjoys challenging myself and encouraging others to find their happiness. I have two amazing but incredibly spoiled dogs that remind me to stay focused on what’s really important in life and I am a firm believer that everything happens for a reason and everyone is on their own unique journey. </p>
          <p id="aboutText1"> I am a self-taught programmer with more than 10 years in the financial industry.  I decided to change my career path to pursue my dream in a technology industry. I didn’t want to continue to just work, I wanted to express my creativity and develop a career that I am passionate about. As an individual I am persistent, I do not allow obstacles to stand in my way, I am open minded, and I thrive when solving problems. </p>
          <p id="aboutText1"> My previous work in sales has groomed my ability to work well with people. I am trustworthy and have the skills necessary to work in any environments. I am accustomed to corporate technology and have a unique perspective on how the tech industry affects the success of large and small companies. </p>
          <p id="aboutText1"> I don’t just want a career in web development. I want to be a part of a movement that encourages other women and young girls to look at their future and consider working in the tech industry without feeling intimidated. I believe wholeheartedly you must contribute back to others and you have to genuinely want to help others succeed if you want to truly enjoy success yourself. </p>
        </div>
      </div>
    );
  }
  }

export default About;
