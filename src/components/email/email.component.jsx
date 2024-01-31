import React, { useState } from "react";
import "./email.styles.css";
import "../emailcontents/emailcontents.components";

export const Email = ({ email, handleClick }) => {
    var { id, from, address, time, message, subject, tag, read} = email;
    let color = read? "lightgreen": "grey";
    const[bgColor, setBgColor] = useState(color);
    
    const changeColor =()=> {
        let color = "grey";
        read = true;
        setBgColor(color);
    }

    return (
        <div className="email-container" style={{"backgroundColor": bgColor}} onClick={() => handleClick(email)} onClickCapture={changeColor}>
            <h2 className="from">{from}</h2>
            <h3 className="subject">{subject}</h3>
            <h3 className="address">{address}</h3>
            <h4 className="time">{time}</h4>
        </div>
    )
};
