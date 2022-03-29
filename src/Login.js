import React,{useState} from 'react';
import {Link} from 'react-router-dom';
import './Login.css';
import welcomeimg from './welcome.jpg';

function Login() {
    const [emailval, setemailval] = useState("");
    const [passval, setpassval] = useState("");

    const handlesubmit = event => {
        event.preventDefault();
    };

    return React.createElement("div", {
        className: "main-login"
    }, React.createElement("h1", null, React.createElement("strong", {
        id: "title"
    }, "Praveen_Rentals")), React.createElement("div", {
        className: "login-contain"
    }, React.createElement("div", {
        className: "left-side"
    }, React.createElement("form", {
        onSubmit: handlesubmit
    }, React.createElement("label", {
        for: "email1"
    }, React.createElement("b", null, "Email")), React.createElement("input", {
        placeholder: "Enter your email...",
        type: "email",
        value: emailval,
        onChange: e => {
            setemailval(e.target.value);
        },
        id: "email1"
    }), React.createElement("br", null), React.createElement("label", {
        for: "pwd1"
    }, React.createElement("b", null, "Password")), React.createElement("input", {
        placeholder: "Enter Password...",
        type: "password",
        value: passval,
        onChange: e => {
            setpassval(e.target.value);
        },
        id: "pwd1"
    }), " ", React.createElement("br", null), React.createElement("button", {
        type: "submit",
        id: "submit"
    }, "Login")), React.createElement("div", {
        className: "footer"
    }, React.createElement("br", null), React.createElement("h4", null, /*#__PURE__*/React.createElement("span", null, "Don't have an Account?"), React.createElement("br", null), React.createElement(Link, {
        className: "link",
        to: "/Register"
    }, "Register Now..")))), React.createElement("div", {
        className: "right-side"
    }, React.createElement("div", {
        className: "welcome-tag"
    }, React.createElement("h2", null, React.createElement("b", null, "!.Welcome Back.!")),React.createElement("br", null),React.createElement("br", null)), React.createElement("div", {
        className: "welcomeImg"
    }, React.createElement("img", {
        src: welcomeimg,
        id: "img_id"
    })))));
}

export default Login;