import { Link } from "react-router-dom";
import React, { useState } from "react";

function NavBar(props) {
  let styleVariables = props[2];
  let style = styleVariables[0];
  let setStyle = styleVariables[1];
  let [selected, setSelected] = useState("home");
  return (
    <>
      <nav className={style && "sober"}>
        <Link to={"./"}>
          <div
            className="navEl"
            onClick={function () {
              setSelected("home");
            }}
          >
            <div className={"nileLogo " + (style && "sober")}></div>
            <button
              className={
                (style && "sober ") + (selected === "home" && " selected")
              }
              id="home"
            >
              Home
            </button>
          </div>
        </Link>
        <button className={(style && "sober ") + "navEl"}>
          <label htmlFor="switcher">
            switch style
            <input
              type="checkbox"
              id="switcher"
              onClick={function () {
                if (style) {
                  setStyle(false);
                } else {
                  setStyle(true);
                }
              }}
            ></input>
            <div className="switch"></div>
          </label>
        </button>
        <Link to={"./shop"}>
          <div className={(style && "sober ") + " navEl"}>
            <button
              className={
                (style && "sober ") + (selected === "shop" && " selected")
              }
              id="shop"
              onClick={function () {
                setSelected("shop");
              }}
            >
              Shop
            </button>
            <button
              id="cart"
              className={
                (style && "sober ") + (selected === "cart" && " selected")
              }
              onClick={function () {
                setSelected("cart");
              }}
            >
              Cart
            </button>
          </div>
        </Link>
      </nav>
    </>
  );
}
export default NavBar;
