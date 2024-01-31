import React from "react";
import { Email } from "../email/email.component";
import "./emailcontents.styles.css";

export const EmailContents = ({ email }) => (

    <div className="emailcontents">
        <br/>
        <h3>{email.from}</h3>
        <h4>{email.subject}</h4>
        <h4>{email.address}</h4>
        <h5>{email.time}</h5>
        <p>{email.message}</p>
    </div>

);