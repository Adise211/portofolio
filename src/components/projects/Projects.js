import './Projects.css';
import Carousel from 'react-bootstrap/Carousel';
import finalProject from '../../images/final.png';
import matchIt from '../../images/matchit.png';
import myShop from '../../images/myshop.png';
import weatherapp from '../../images/weatherapp.png';
import { FaGithub } from 'react-icons/fa';
import { TbWorld } from "react-icons/tb";


const Projects = () => {

  const endless = () => {
    window.open("https://products-api-adise.herokuapp.com","_blank")
  }

  const shop = () => {
    window.open("https://github.com/Adise211/Hackathon-2","_blank")
  }

  const game = () => {
    window.open("https://github.com/Adise211/Hackathon-1","_blank")
  }

  return(
    <div className='p' id='projects'>

      <div className='p-left'>
        <div className='p-wrapper'>
          <Carousel variant="dark"
            style={{postion:'relative',left:'8vw',
                    top:'2vh',border:'2px #333 solid',width:'120%'}}>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src={finalProject}
                alt="First slide"
                style={{height:'50vh',width:'200vw'}}
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src= {myShop}
              alt="Second slide"
              style={{height:'50vh',width:'150vw'}}
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={matchIt}
              alt="Third slide"
              style={{height:'50vh',width:'150vw'}}
            />
          </Carousel.Item>

          <Carousel.Item>
            <img
              className="d-block w-100"
              src={weatherapp}
              alt="Third slide"
              style={{height:'50vh',width:'150vw',opacity:0.7}}
            />
            <Carousel.Caption>
              <h2>Coming soon...</h2>
            </Carousel.Caption>
          </Carousel.Item>
          </Carousel>
        </div>
      </div>

      <div className='p-right'>
        <div className='p-wrapper'>
          <div className='links' onClick={endless}>
            <TbWorld />
            <h5>EndlessBudgets</h5>
            <p>Savings money app, help user mange his money</p>
          </div>

          <div className='links' onClick={shop}>
            <FaGithub />
            <h5>Ethio-Dresess</h5>
            <p>Ethiopian shopping store, include diffrent kind of items</p>
          </div>

          <div className='links' onClick={game}>
            <FaGithub />
            <h5>Match It</h5>
            <p>A game, matching the shapes to the description box</p>
          </div>

          <div className='links'>
            <FaGithub />
            <h5>Weather app</h5>
            <p>Coming soon...</p>
          </div>

        </div>
      </div>



    </div>
  )
}

export default Projects;
