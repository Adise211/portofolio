import React from 'react';
import './Intro.css';
// import me from '../../images/me.jpg';
import me_2 from '../../images/me_2.jpeg';


const Intro = () => {
  return(
    <div className='i' id='intro'>
      <div className='i-left'>
        <div className='i-left-wrapper'>
          <h2 className='i-intro'>Hello, My name is</h2>
          <h1 className='i-name'>Adise Mamoye</h1>
          <div className='i-title'>
            <div className='i-title-wrapper'>
              <div className='i-title-item'>Full Stack Developer</div>
              <div className='i-title-item'>Web Developer</div>
              <div className='i-title-item'>Frontend Developer</div>
              <div className='i-title-item'>Backend Developer</div>
            </div>
          </div>
          <div className='i-desc'>
            I am a full stack developer.
            I am curious about learning new things and believe the world has a lot to offer.
            I do believe technology plays a big role in changing people's lives for the better.
          </div>
        </div>
      </div>

      <div className='i-right'>
        {/* <img src={me} alt='myimage' className='i-img first'/> */}
        <img src={me_2} alt='secondImage' className='i-img'/>

      </div>
    </div>
  )
}



export default Intro;
