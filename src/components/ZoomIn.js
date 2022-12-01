import React from "react";
import { 
    Dialog, 
    DialogTitle, 
    DialogContent, 
} from "@material-ui/core";
import { VscChromeClose } from "react-icons/vsc";

const ZoomIn = ({ open, project, imageNum, setOpenZoom }) => {

    const imgHeight = project.id === 1 ? 800 : 500;
    const imgWidth = project.id === 1 ? 500 : 800;

    return (
        <>
            <Dialog open={open} maxWidth={'lg'} onClose={!open}>
                <VscChromeClose 
                    style={{ 
                        fontSize: 24, 
                        fontWeight: 'bold', 
                        marginTop: 10, 
                        marginLeft: 10,
                        cursor: 'pointer' 
                    }}
                    onClick={() => setOpenZoom(false)}
                />
                <DialogTitle></DialogTitle>
                <DialogContent>
                    {<img 
                        src={project.images[imageNum]} 
                        alt={'pro-1'} 
                        style={{ height: imgHeight, width: imgWidth }}
                    />} 
                </DialogContent>
            </Dialog>
        </>
    )
};


export default ZoomIn;