import React from "react";

const MyAlert = ({ children }) => {
    return (
        <div className="m-container">
            <p className="message">{children}</p>          
        </div>
    )
};

export default MyAlert;