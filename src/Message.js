import React from "react";
import "./Message.css";
import { Avatar } from "@mui/material";

const Message = ({ timestamp, user, message }) => {
  console.log("message running");
  return (
    <div className="message">
      <Avatar src={user.photo} />
      <div className="message__info">
        <h4>
          {user.displayName}
          <span className="message__timestamp">timestamp</span>
        </h4>

        <p>{message}</p>
      </div>
    </div>
  );
};

export default Message;
