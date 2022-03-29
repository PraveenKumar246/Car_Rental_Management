import React from 'react';
import './App.css';
import Home from './Home';
import Login from './Login';
import Register from './Register';
import {BrowserRouter as Router,Route,Routes} from 'react-router-dom';

function App() {
    return React.createElement(Router, null, React.createElement(Routes, null, React.createElement(Route, {
        path: "/",
        element: React.createElement(Home, null)
    }), React.createElement(Route, {
        path: "/login",
        element: React.createElement(Login, null)
    }), React.createElement(Route, {
        path: "/register",
        element: React.createElement(Register, null)
    })));
}

export default App;






