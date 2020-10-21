import React, {useEffect} from 'react';
import './App.css';
import Header from "./Components/Header/Header";
import Home from "./Components/Home/Home";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Checkout from "./Components/Checkout/Checkout";
import Login from "./Components/Login/Login";
import {auth} from "./firebase";
import {useStateValue} from "./stateProvider";
import Payment from "./Components/Payment/Payment";
import {loadStripe} from '@stripe/stripe-js';
import {CardElement, Elements, ElementsConsumer} from '@stripe/react-stripe-js';

const promise = loadStripe(
    'pk_test_51HefQzIfycZzeT9LMC3q0iifpbagmzAFmpS0UDfPzXl0dvW1nTpFefqpe16IGAIZPE3OyN5FrdkNg8imAcF6jb5700vGjBH5Yc'
)

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
                <Route path ="/payment">
                    <Header />
                    <Elements stripe={promise}>
                        <Payment/>
                    </Elements>
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
