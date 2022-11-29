// import { Dialog } from "@mui/material";
import React from 'react';
import OppositeContentTimeline from "../timeline/TimeLine.js";
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
                    {/* <div className="jobDesc"></div> */}
                    <div 
                        className="open-text" 
                        style={{ fontSize: 20 }}
                    >
                        Please click on the comapny name to see more details
                    </div>
                </div>
            </div>
        </div>
    )
};

export default Experience;