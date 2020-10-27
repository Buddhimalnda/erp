import React from "react";

import KeyboardArrowDownIcon from "@material-ui/icons/KeyboardArrowDown";

import './style.scss'

function Left({props}) {

  return (
    <div className="leftbar">
      {props.map((d) => (
        <MenusPack props={d} key={d.id} />
      ))}
    </div>
  );
}

const MenusPack = ({ props }) => {
  const menus = props.menus;

  return (
    <div className="menu__pack">
      <div className="title"> {props.title} </div>
      <div className="menus-list">
        {menus.map((m) => (
          <Menu props={m} key={m.id} />
        ))}
      </div>
    </div>
  );
};

const Menu = ({ props }) => {
  const links = props.links;

  if (!props.linksStatus) {
    return (
      <>
        <img src={props.icon} alt="icon" />
        <a href={props.link}>{props.title}</a>
      </>
    );
  }
  return (
    <>
      <img src={props.icon} alt="icon" />
      <div className="title"> {props.title} </div>
      <KeyboardArrowDownIcon />
      {links.map((l) => (
        <Links props={l} key={l.id} />
      ))}
    </>
  );
};

const Links = ({ props }) => {
  return (
    <>
      <a href={props.link} key={props.id}>
        {props.title}
      </a>
    </>
  );
};

export default Left;
