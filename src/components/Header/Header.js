import React from 'react';
import "./Header.css";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import SettingsIcon from "@material-ui/icons/Settings";
import NotificationsIcon from "@material-ui/icons/Notifications";

export default function Header
() {
  return (
    <div className="header">
      <input type="text" className="input1" placeholder="Search here" />
      <AccountCircleIcon
        style={{
          color: "grey",
          padding: 5,
        }}
      />
      <SettingsIcon
        style={{
          color: "grey",
          padding: 5,
        }}
      />
      <div className="notif">
        <NotificationsIcon  
          style={{
            color: "grey",
            padding: 5,
          }}
        />
        
      </div>
    </div>
  );
}
