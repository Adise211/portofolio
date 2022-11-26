import * as React from 'react';
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';
import TimelineOppositeContent from '@mui/lab/TimelineOppositeContent';
import './TimeLine.css';

export default function OppositeContentTimeline() {
  return (
    <Timeline position="alternate" style={{ width: 600 }}>
      <TimelineItem>
        <TimelineOppositeContent 
          color="text.secondary" 
          style={{ fontFamily: 'Poppins' }}
        >
          Jun 2022 - Present
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineDot className='dot'/>
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent 
          className='company' 
          style={{ 
            fontWeight: 600, 
            fontFamily: 'Poppins',
            fontSize: 18 
          }}
        >
          Moyae
        </TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineOppositeContent 
          color="text.secondary" 
          className='period'
          style={{ fontFamily: 'Poppins' }}
        >
          Mar 2021 - Sep 2021
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineDot />
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent 
          className='company' 
          style={{ 
            fontWeight: 600, 
            fontFamily: 'Poppins',
            fontSize: 18  
          }}
        >
          Sharan
        </TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineOppositeContent 
          color="text.secondary"
          style={{ fontFamily: 'Poppins' }}
        >
          Mar 2016 - Apr 2018
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineDot />
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent 
          className='company' 
          style={{ 
            fontWeight: 600, 
            fontFamily: 'Poppins',
            fontSize: 18  
          }}
        >
          A Medic In The Army
        </TimelineContent>
      </TimelineItem>

      {/* <TimelineItem>
        <TimelineOppositeContent color="text.secondary">
          9:00 am
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineDot />
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent>Repeat</TimelineContent>
      </TimelineItem> */}
    </Timeline>
  );
};
