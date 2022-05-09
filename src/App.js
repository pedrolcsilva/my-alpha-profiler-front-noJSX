import { useState, useEffect } from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import "./App.css";
import NavBar from "./Components/Layout/NavBar";
import Footer from "./Components/Layout/Footer";
import Home from "./Components/Pages/Home";
import SignIn from "./Components/Pages/SignIn";
import SignUp from "./Components/Pages/SignUp";
import EditProfile from "./Components/Pages/EditProfile";
import ProtectedRoute from "./Components/Layout/ProtectedRoute";

function getCookie(name) {
  let cookie = {};

  document.cookie.split(";").forEach(function (el) {
    let [k, v] = el.split("=");
    cookie[k.trim()] = v;
  });

  return cookie[name];
}

function App() {
  const [token, setToken] = useState(true);

  useEffect(() => {
    if (document.cookie.indexOf("access_token") < 0) {
      setToken(false);
    } else {
      setToken(getCookie("access_token"));
    }
  }, []);

  return React.createElement(Router, null, React.createElement(Routes, null, React.createElement(Route, {
    path: "/",
    element: React.createElement(ProtectedRoute, {
      token: token
    }, React.createElement(NavBar, {
      setToken: setToken,
      namePage: {
        homeClass: true,
        editClass: false
      }
    }), React.createElement(Home, null))
  }), React.createElement(Route, {
    path: "signup",
    element: React.createElement(SignUp, null)
  }), React.createElement(Route, {
    path: "signin",
    element: React.createElement(SignIn, {
      setToken: setToken
    })
  }), React.createElement(Route, {
    path: "edit",
    element: React.createElement(ProtectedRoute, {
      token: token
    }, React.createElement(NavBar, {
      setToken: setToken,
      namePage: {
        homeClass: false,
        editClass: true
      }
    }), React.createElement(EditProfile, null))
  })), React.createElement(Footer, null));
}

export default App;
