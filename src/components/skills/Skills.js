import React from 'react';
import './Skills.css';
import me_3 from '../../images/me_3.jpeg';
import mongoDB from '../../images/mongoDB.png';


const Skills = () => {
  return (
    <>
      <div className='a' id='skills'>
        <div className='a-left'>
          {/* <h2 className='a-title'>More Skills</h2>
          <p><i className="arrow right"></i> Problem Solving</p>
          <p><i className="arrow right"></i> Team Player</p>
          <p><i className="arrow right"></i> Hard Working</p>
          <p><i className="arrow right"></i> Motivated To Learn New Things</p>
          <p><i className="arrow right"></i> Curious</p> */}
          <img src={me_3} alt='memoji' className='my-memoji'/>
        </div>

        <div className='a-right'>
          <div className='icons-container'>
              <img
                src='https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/HTML5_logo_and_wordmark.svg/1200px-HTML5_logo_and_wordmark.svg.png'
                className='icons'
                alt='html5'
                />
              <img
                src='https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/CSS3_logo_and_wordmark.svg/1200px-CSS3_logo_and_wordmark.svg.png'
                className='icons'
                alt='css3'
                />
              <img
                src='https://upload.wikimedia.org/wikipedia/commons/thumb/d/d4/Javascript-shield.svg/1200px-Javascript-shield.svg.png'
                className='icons'
                alt='javascript'
                />
              <img
                src='https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1200px-React-icon.svg.png'
                className='icons'
                alt='react'
                />
              <img
                src='https://the-guild.dev/blog-assets/nodejs-esm/nodejs_logo.png'
                className='icons'
                alt='nodejs'
                />
              <img
                src='https://cdn.zapier.com/storage/blog/4ec8fc7dc3a75758a3913bab9e5a4fd8_2.500x278.png'
                className='icons'
                alt='redux'
                />
              <img
                src='https://www.bairesdev.com/wp-content/uploads/2021/07/Expressjs.svg'
                className='icons'
                alt='expressjs'
                />
              <img
                src='https://upload.wikimedia.org/wikipedia/commons/thumb/2/29/Postgresql_elephant.svg/640px-Postgresql_elephant.svg.png'
                className='icons'
                alt='postgresql'
                />
              <img
                src='https://i0.wp.com/learn.onemonth.com/wp-content/uploads/2019/07/image2-1.png?w=600&ssl=1'
                className='icons'
                alt='sql'
                />
              <img
                src={mongoDB}
                className='icons'
                alt='mongoDB'
                />
              <img
                src=''
                className='icons'
                alt=''
                />
              <img
                src=''
                className='icons'
                alt=''
                />
            </div>
          </div>
      </div>
    </>
  )
}

export default Skills;
