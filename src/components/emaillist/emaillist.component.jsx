import React from "react";
import { Email } from "../email/email.component";
import "./emaillist.styles.css";

export const EmailList = ({ emails, handleClick }) => (

    <div className="emaillist">
        {emails.map(email => (
            <Email key={email.id} email={email} handleClick={handleClick}/>
        ))}
    </div>

);