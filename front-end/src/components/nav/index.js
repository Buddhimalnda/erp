import React from "react";

import Left from "./Left";
import SearchIcon from "@material-ui/icons/Search";
import NotificationsIcon from "@material-ui/icons/Notifications";
import KeyboardArrowDownIcon from "@material-ui/icons/KeyboardArrowDown";
import MessageIcon from "@material-ui/icons/Message";

import { leftBarItems, topBarItems } from "./Data";



// 
import "./style.scss";
function Index() {
  return (
    <div className="navbar">
      <div className="top-bar">
        <div className="logo">
          <div className="img">
            <img src={topBarItems.logo.link1} alt="logo" />
          </div>
          <div className="toggal-btn">
            <div className="btn">
              <span className="long"></span>
              <span className="short"></span>
              <span className="long"></span>
            </div>
          </div>
          <div className="logo__text">{topBarItems.logo.text}</div>
        </div>
        <div className="menus">
          <div className="search-box">
            <SearchIcon />
            <input type="text" placeholder="Search Here" />
          </div>
          <div className="btn-list">
            <div className="notification">
              <NotificationsIcon />
              <div className="count">1</div>
              <div className="notification__panel"></div>
            </div>
            <div className="messages">
              <MessageIcon />
              <div className="count">1</div>
              <div className="messages__panel"></div>
            </div>
            <div className="profile">
              <div className="avetar">
                <img src="" alt="profile pic" />
              </div>
              <div className="title">
                Admin <KeyboardArrowDownIcon />
              </div>
              <ul className="dropdown">
                <li>my profile</li>
                <li>setting</li>
                <li>Logout</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <Left props={leftBarItems} />
    </div>
  );
}

export default Index;
