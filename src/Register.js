import React,{useState} from 'react';
import {Link} from "react-router-dom";
import './Register.css';

function Register() {
    const handleSubmit = e => {
        e.preventDefault();
    };

    const [Fname, setFname] = useState('');
    const [email, setemail] = useState('');
    const [pwd, setpwd] = useState('');
    const [cpwd, setcpwd] = useState('');
    return React.createElement("div", {
        className: "main-Register"
    }, React.createElement("div", {
        className: "left-Side"
    }), React.createElement("div", {
        className: "right-Side"
    }, React.createElement("div", {
        className: "top-right"
    }, React.createElement("h4", null, "Already have an Account", React.createElement("br", null), React.createElement("h3", null, React.createElement(Link, {
        id: "link-signin",
        to: "/login"
    }, "Login Here!")))), React.createElement("div", {
        className: "body-right"
    }, React.createElement("h1", null, "Create Your Account"), React.createElement("div", {
        className: "container"
    }, React.createElement("form", {
        onSubmit: handleSubmit
    }, React.createElement("div", {
        className: "SignUp-Details"
    }, React.createElement("h5", null, "FullName"), React.createElement("br", null), React.createElement("input", {
        type: "text",
        name: "Fname",
        value: Fname,
        onChange: e => {
            setFname(e.target.value);
        },
        id: "fname"
    })), React.createElement("div", {
        className: "SignUp-Details"
    }, React.createElement("h5", null, "Email"), React.createElement("br", null), React.createElement("input", {
        type: "email",
        name: "Enter your mail",
        value: email,
        onChange: e => {
            setemail(e.target.value);
        },
        id: "email"
    })), React.createElement("div", {
        className: "SignUp-Details"
    }, React.createElement("h5", null, "Password"), React.createElement("br", null), React.createElement("input", {
        type: "password",
        name: "Enter your password",
        value: pwd,
        onChange: e => {
            setpwd(e.target.value);
        },
        id: "pwd"
    })), React.createElement("div", {
        className: "SignUp-Details"
    },React.createElement("h5", null, "Confirm Password"), React.createElement("br", null), React.createElement("input", {
        type: "password",
        name: "confirm the password",
        value: cpwd,
        onChange: e => {
            setcpwd(e.target.value);
        },
        id: "cpwd"
    })),React.createElement("input", {
        id: "signup-btn",
        type: "submit",
        value: "SignUp"
    }))))));
}

export default Register;