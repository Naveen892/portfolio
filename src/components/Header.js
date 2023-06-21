import React, { Component, useEffect } from "react";
import Typical from "react-typical";
import Switch from "react-switch";

function Header(props) {
  var titles = [];
  console.log("props", props, props.sharedData);
  function setTheme() {
    var dataThemeAttribute = "data-theme";
    const darkThemeMq = window.matchMedia("(prefers-color-scheme: dark)");
    var body = document.body;
    var newTheme =
      darkThemeMq.matches ? "dark" : "light";
      console.log("newTheme",newTheme);
    body.setAttribute(dataThemeAttribute, newTheme);
  }
  useEffect(() => {
    setTheme();
  }, []);
  if (props.sharedData) {
    var name = props.sharedData.name;
    titles = props.sharedData.titles.map((x) => [x.toUpperCase(), 1500]).flat();
  }

  const HeaderTitleTypeAnimation = React.memo(
    () => {
      return <Typical className="title-styles" steps={titles} loop={50} />;
    },
    (props, prevProp) => true
  );

  return (
    <header
      id="home"
      style={{ height: window.innerHeight - 140, display: "block" }}
    >
      <div className="row aligner" style={{ height: "100%" }}>
        <div className="col-md-12">
          <div>
            <span
              className="iconify header-icon"
              data-icon="la:laptop-code"
              data-inline="false"
            ></span>
            <br />
            <h1 className="mb-0">
              <Typical steps={[name]} wrapper="p" />
            </h1>
            <div className="title-container">
              <HeaderTitleTypeAnimation />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;