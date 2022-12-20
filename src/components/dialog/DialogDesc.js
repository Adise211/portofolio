import React from 'react';
import { 
    Dialog, 
    DialogTitle, 
    DialogContent, 
    DialogActions, 
    Typography,
    Button 
} from "@material-ui/core";
import { useEffect, useState } from "react";



const DialogDesc = ({ company, open, setOpen }) => {
    const [display, setDisplay] = useState(null);

    const content1 = {
        position: "Full Stack Developer, Remote, Part Time." ,
        aboutTheCompany:  "A medical start up company. Small team of 5-10 people.",
        description: "The team and I are building a medical platfrom that will help ophthalmologists and optometrists to manage their time and follow ups with patients." ,
        place: 'Austin, Texas, US.'
    };

    const content2 = {
        position: "Service Representative.",
        aboutTheCompany:  "A medical company that provides home healthcare services.",
        description: "Medical services and schedule meetings between patients and doctors." ,
        place: 'Ramat Gan, Israel.'
    };

    const content3 = {
        position: "A Medic." ,
        aboutTheCompany:  "Army - C4I Corps.",
        description: "Served 2 years as a medic, provided medical treatment to soldiers." ,
        place: 'Shomron, Israel.'
    };


    useEffect(() => {
        if (company === 'Moyae') {
            setDisplay(content1);
        }
        if(company === 'Sharan') {
            setDisplay(content2);
        }
        if (company === 'Medic') {
            setDisplay(content3);
        }
        // eslint-disable-next-line
    }, [company])


    return (
        <div>
            <Dialog open={open}>
                <DialogTitle>
                    <Typography 
                        style={{ 
                            fontWeight: 'bold', 
                            fontFamily: 'Poppins', 
                            color: 'purple', 
                            fontSize: 20 
                        }}
                    >
                        {company}
                    </Typography>
                </DialogTitle>
                <DialogContent>
                    {display && (
                        <>
                            <Typography style={{ fontWeight: 'bold', marginBottom: 15 }}>Position: <Typography>{display.position}</Typography></Typography>
                            <Typography style={{ fontWeight: 'bold', marginBottom: 15 }}>About The Company: <Typography>{display.aboutTheCompany}</Typography></Typography>
                            <Typography style={{ fontWeight: 'bold', marginBottom: 15 }}>Description: <Typography>{display.description}</Typography></Typography>
                            <Typography style={{ fontWeight: 'bold' }}>Location: <Typography>{display.place}</Typography></Typography>
                        </>
                    )}
                </DialogContent>
                <DialogActions>
                    <Button onClick={() => setOpen(false)}>got it</Button>
                </DialogActions>
            </Dialog>
        </div>
    )
};


export default DialogDesc;