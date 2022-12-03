import React from 'react';
import OppositeContentTimeline from "../timeline/TimeLine.js";
import { FaAngleDoubleLeft } from "react-icons/fa";
import './experience.css';


const Experience = () => {
    return (
        <div className='e' id='experience'>
            <div className='e-left'>
                <div className='e-wrapper'>
                    <OppositeContentTimeline />
                </div>
            </div>

            <div className='e-right'>
                <div className='e-wrapper'> 
                    <div 
                        className="open-text" 
                        style={{ fontSize: 20 }}
                    >
                        Please click on the comapny name to see more details
                    </div>
                    <div className='arrows'>
                        <FaAngleDoubleLeft style={{ fontSize: 28 }}/>
                        <FaAngleDoubleLeft style={{ fontSize: 28 }}/>
                        <FaAngleDoubleLeft style={{ fontSize: 28 }}/>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default Experience;