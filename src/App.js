import React, {useEffect} from 'react';
import './App.css';
import Header from "./Components/Header/Header";
import Home from "./Components/Home/Home";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Checkout from "./Components/Checkout/Checkout";
import Login from "./Components/Login/Login";
import {auth} from "./firebase";
import {useStateValue} from "./stateProvider";


function App() {
  const [{}, dispatch] = useStateValue()
  useEffect(() => {
      auth.onAuthStateChanged(authUser => {
          console.log('USER IS >>>>', authUser)
          if (authUser) {
              //the user just logged in / the user was logged in
              dispatch({
                  type: 'SET_USER',
                  user: authUser
              })
          } else {
              // the user is logged out
              dispatch({
                  type: 'SET_USER',
                  user: null
              })
          }
      })
  },[dispatch])

  return (
     <Router>
        <div className="app">
            <Switch>
                <Route path="/login">
                    <Login />
                </Route>
                <Route path ="/checkout">
                    <Header />
                    <Checkout />
                </Route>
                <Route path="/">
                    <Header />
                    <Home />
                </Route>
            </Switch>
        </div>
     </Router>
  );
}

export default App;
