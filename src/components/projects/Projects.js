import './Projects.css';
import Carousel from 'react-bootstrap/Carousel';
import finalProject from '../../images/final.png';
import matchIt from '../../images/matchit.png';
import myShop from '../../images/myshop.png';
import weatherapp from '../../images/weatherapp.png';
import { projectInfo } from '../projectsInfo/projectsInfo.js';
import { useState } from 'react';
// import { FaGithub } from 'react-icons/fa';
// import { TbWorld } from "react-icons/tb";


const Projects = () => {
  const [display,setDisplay] = useState(null);


  const clickHandler = async (id) => {
    if (id === 1) {
      setDisplay(projectInfo[0]);
    }
    if (id === 2) {
      setDisplay(projectInfo[1]);
    }
    if (id === 3) {
      setDisplay(projectInfo[2]);
    }
  };

  const clickOnLink = (link) => {
    window.open(link,"_blank")
  }


  return(
    <div className='p' id='projects'>
      <div className='pro-names'>
        <p 
          className='p-name' 
          style={{ fontSize: 18, fontWeight: 'bold' }}
          onClick={() => clickHandler(1)}
        >
          Piggiy
        </p>
        <p 
          className='p-name' 
          style={{ fontSize: 18, fontWeight: 'bold'  }}
          onClick={() => clickHandler(2)}
        >
          Ethio Store
        </p>
        <p 
          className='p-name' 
          style={{ fontSize: 18, fontWeight: 'bold'  }}
          onClick={() => clickHandler(3)}
        >
          Match It
        </p>
      </div>

      <div>
          <Carousel 
            variant="dark"
            style={{
              postion:'relative',
              left:'60%',
              top:'2vh',
              border: '1px gray white',
              boxShadow: '10px 10px 10px 10px gray'
            }}
          >
            <Carousel.Item>
              <img
                className="d-block w-100"
                src={finalProject}
                alt="First slide"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src= {myShop}
              alt="Second slide"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={matchIt}
              alt="Third slide"
            />
          </Carousel.Item>

          <Carousel.Item>
            <img
              className="d-block w-100"
              src={weatherapp}
              alt="Third slide"
            />
            <Carousel.Caption>
              <h2>Coming soon...</h2>
            </Carousel.Caption>
          </Carousel.Item>
          </Carousel>
          <div className='p-info'>
            { display && (
              <>
                <p style={{ marginBottom: 20, fontSize: 18, textDecoration: 'underline' }}>{display.projectName}</p>
                <p style={{ fontWeight: 'bold' }}>{display.tools}</p>
                <p>{display.details}</p>
                <p 
                  style={{ 
                    color: 'green', 
                    textDecoration: 'underline', 
                    cursor: 'pointer',
                    marginTop: 50
                  }}
                  onClick={() => clickOnLink(display.link)}
                >
                  {display.link}
                </p>
              </>
            )}
          </div>
        </div>
      
      

    </div>
  )
}

export default Projects;
