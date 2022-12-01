import React, { useEffect } from 'react';
import './Projects.css';
import { projectInfo } from '../projectsInfo/projectsInfo.js';
import { useState } from 'react';
// import { makeStyles } from "@material-ui/core/styles";
// import { FaGithub } from 'react-icons/fa';
import { FaArrowRight, FaArrowLeft } from 'react-icons/fa';
import { VscZoomIn } from "react-icons/vsc";
import ZoomIn from '../ZoomIn';
// const useStyles = makeStyles(theme => ({

// });

const Projects = () => {
  const [display,setDisplay] = useState(projectInfo[0]);
  const [pickedImage,setPickedImage] = useState(0);
  const [openZoom,setOpenZoom] = useState(false);

  useEffect(() => {
    const firstDisplay = () => {
      document.getElementById('piggy').style.color = 'green'
    }
    firstDisplay();
  },[])

  const clickHandler = async (id) => {
    if (id === 1) {
      setDisplay(projectInfo[0]);
      document.getElementById('piggy').style.color = 'green'
    } else {
      document.getElementById('piggy').style.color = 'black'
    }

    if (id === 2) {
      setDisplay(projectInfo[1]);
      document.getElementById('ethio').style.color = 'green'
    } else {
      document.getElementById('ethio').style.color = 'black'
    }

    if (id === 3) {
      setDisplay(projectInfo[2]);
      document.getElementById('endless').style.color = 'green'
    } else {
      document.getElementById('endless').style.color = 'black'
    }
  };

  const clickOnLink = (link) => {
    window.open(link,"_blank")
  }


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


  const imageWidth = display && display.id === 1 ? 300 : 600 ;
  const positionLeft = display && display.id === 1 ? 120 : 290 ;


  return(
    <div className='p' id='projects'>
      <div className='pro-names'>
        <p 
          id='piggy'
          className='p-name' 
          style={{ fontSize: 18, fontWeight: 'bold' }}
          onClick={() => clickHandler(1)}
        >
          Piggy
        </p>
        <p 
          id='endless'
          className='p-name' 
          style={{ fontSize: 18, fontWeight: 'bold'  }}
          onClick={() => clickHandler(3)}
        >
          Endless
        </p>
        <p 
          id='ethio'
          className='p-name' 
          style={{ fontSize: 18, fontWeight: 'bold'  }}
          onClick={() => clickHandler(2)}
        >
          Ethio Store
        </p>
      </div>

      <div className='p-right'>
        {display && display.images && (
          <>
            <div className='gallery'>
              { pickedImage === 0 && 
                <img 
                  id='pic' 
                  src={display.images[0]} 
                  alt='project-1' 
                  style={{ height: 450, width: imageWidth, boxShadow: '7px 7px 7px 7px grey' }}
                />
              }
              { pickedImage === 1 && 
                <img 
                  src={display.images[1]} 
                  alt='project-2' 
                  style={{ height: 450, width: imageWidth, boxShadow: '7px 7px 7px 7px grey' }}
                />
              }
              { pickedImage === 2 && 
                <img 
                src={display.images[2]} 
                alt='project-3' 
                style={{ height: 450, width: imageWidth, boxShadow: '7px 7px 7px 7px grey' }}
                />
              }
              { pickedImage === 3 && 
                <img 
                  src={display.images[3]} 
                  alt='project-4' 
                  style={{ height: 450, width: imageWidth, boxShadow: '7px 7px 7px 7px grey' }}
                />
              }
            </div>
              <div 
                className='img-controls' 
                style={{ 
                  position: 'relative',
                  bottom: 150,
                  left: positionLeft
                }}
              >
                <FaArrowLeft onClick={galleryPreHandler} style={{ cursor: 'pointer', position: 'relative', top: 200, fontSize: 24 }}/>
                <VscZoomIn onClick={() => setOpenZoom(true)} style={{ cursor: 'pointer', position: 'relative', top: 200, fontSize: 24 }}/>
                <FaArrowRight onClick={galleryNextHandler} style={{ cursor: 'pointer', position: 'relative', top: 200, fontSize: 24  }}/>
              </div>
              <ZoomIn open={openZoom} project={display} imageNum={pickedImage} setOpenZoom={setOpenZoom}/>
          </>
        )}
        </div>
          <div className='p-info p-left'>
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
  )
}

export default Projects;
