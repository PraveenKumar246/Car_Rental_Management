import React from 'react';
import mylogo from "./mylogo.png";
import {BrowserRouter as Router,Route,Routes,Link} from 'react-router-dom';
import Login from './Login';
import "./Home.css";

function Home() {
    return /*#__PURE__*/React.createElement("div", {
        className: "App"
    }, /*#__PURE__*/React.createElement("header", {
        className: "App-header"
    }, /*#__PURE__*/React.createElement("img", {
        src: mylogo,
        className: "App-logo"
    }), "\xA0", /*#__PURE__*/React.createElement(Link, {
        to: "/login"
    }, /*#__PURE__*/React.createElement("button", {
        id: "explore"
    }, "Explore Us!"))));
}
export default Home;