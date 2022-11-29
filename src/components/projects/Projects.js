import React from 'react';
import './Projects.css';
import Carousel from 'react-bootstrap/Carousel';
import matchIt from '../../images/matchit.png';
import myShop from '../../images/myshop.png';
import weatherapp from '../../images/weatherapp.png';
import { projectInfo } from '../projectsInfo/projectsInfo.js';
import { useState } from 'react';
// import { FaGithub } from 'react-icons/fa';
// import { TbWorld } from "react-icons/tb";
import { FaArrowRight, FaArrowLeft } from 'react-icons/fa';


const Projects = () => {
  const [display,setDisplay] = useState(null);
  const [pickedImage,setPickedImage] = useState(0);

  // let pickedImage = display ? display.images[0]: '';

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

  // const galleryHandler = () => {
  //   console.log("working?");
  //   if(pickedImage === display.images[0]) {
  //     return pickedImage === display.images[1]
  //   }
  //   else if (pickedImage === display.images[1]) {
  //     return pickedImage === display.images[2]
  //   }
  //   else if (pickedImage === display.images[2]) {
  //     return pickedImage === display.images[3]
  //   }
  //   else {
  //     return pickedImage === display.images[0]
  //   }

  // };

  const galleryNextHandler = () => {
    if (pickedImage === 3){
      setPickedImage(0)
    } else {
      setPickedImage(pickedImage + 1);
    }
  };


  const galleryPreHandler = () => {
    if (pickedImage === 0){
      setPickedImage(3)
    } else {
      setPickedImage(pickedImage - 1);
    }

  };

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
          Endless
        </p>
      </div>

      <div>
        {display && display.images && (
          <>
            <div className='gallery'>
              <FaArrowLeft onClick={galleryPreHandler} style={{ cursor: 'pointer', position: 'relative', top: 200, fontSize: 24 }}/>
              { pickedImage === 0 && <img src={display.images[0]} alt='project-1' style={{ height: 450, width: 300, boxShadow: '7px 7px 7px 7px grey' }}/>}
              { pickedImage === 1 && <img src={display.images[1]} alt='project-2' style={{ height: 450, width: 300, boxShadow: '7px 7px 7px 7px grey' }}/>}
              { pickedImage === 2 && <img src={display.images[2]} alt='project-3' style={{ height: 450, width: 300, boxShadow: '7px 7px 7px 7px grey' }}/>}
              { pickedImage === 3 && <img src={display.images[3]} alt='project-4' style={{ height: 450, width: 300, boxShadow: '7px 7px 7px 7px grey' }}/>}
              <FaArrowRight onClick={galleryNextHandler} style={{ cursor: 'pointer', position: 'relative', top: 200, fontSize: 24  }}/>
            </div>
          </>
        )}



          {/* <Carousel 
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
                src={piggy_2}
                alt="First slide"
                style={{ height: 400, width: 500, backgroundColor: 'white', border: '30px white solid' }}
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
          </Carousel> */}
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
