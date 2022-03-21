import React from 'react';
import "./Card.css"

export default function Card() {
  return (
    <div className="cards">
      <div className="cardbox">
        <div className="top">
          <img src="bg.png" alt="" className="imglogo" />
          <img src="logo1.png" alt="" className="imglogo1" />
          <div className="content">
            <p className="title1">Booking</p>
            <p className="number">281</p>
          </div>
        </div>

        <div className="bottom">
          <hr className="line" />
          <p className="status">
            {" "}
            <span className="number1">+55%</span> than last week
          </p>
        </div>
      </div>

      <div className="cardbox">
        <div className="top">
          <img src="bg1.png" alt="" className="imglogo" />
          <img src="logo2.png" alt="" className="imglogo1" />
          <div className="content">
            <p className="title1">Today's Users</p>
            <p className="number">2,300</p>
          </div>
        </div>

        <div className="bottom">
          <hr className="line" />
          <p className="status">
            {" "}
            <span className="number1">+3%</span> than last week
          </p>
        </div>
      </div>

      <div className="cardbox">
        <div className="top">
          <img src="bg2.png" alt="" className="imglogo" />
          <img src="logo3.png" alt="" className="imglogo1" />
          <div className="content">
            <p className="title1">Revenue</p>
            <p className="number">34k</p>
          </div>
        </div>

        <div className="bottom">
          <hr className="line" />
          <p className="status">
            {" "}
            <span className="number1">+1%</span> than last yesterday
          </p>
        </div>
      </div>

      <div className="cardbox">
        <div className="top">
          <img src="bg3.png" alt="" className="imglogo" />
          <img src="logo4.png" alt="" className="imglogo1" />
          <div className="content">
            <p className="title1">Followers</p>
            <p className="number">+91</p>
          </div>
        </div>

        <div className="bottom">
          <hr className="line" />
          <p className="status">
            {" "}
            <span className="number1"></span> Just Updated
          </p>
        </div>
      </div>
    </div>
  );
}
