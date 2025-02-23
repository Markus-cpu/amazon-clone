import React, {useState} from "react";
import "./Login.css";
import {NavLink, useHistory} from "react-router-dom";
import {auth} from "../../firebase";



const Login = () => {
    const history = useHistory()
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const signIn = (e) => {
        e.preventDefault()
        auth.signInWithEmailAndPassword(email, password)
            .then(auth => {
                history.push('/')
            }).catch(error => alert(error.message))
    }
    const registerAccount = (e) => {
        e.preventDefault()
        auth.createUserWithEmailAndPassword(email, password)
            .then((auth) => {
                //it successfully created a new user with email and password
                if (auth) {
                    history.push('/')
                }
            })
            .catch(error => alert(error.message))
    }
    return (
        <div className="login">
            <NavLink to="/">
                <img
                    className="login__logo"
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png"
                    alt="logo"
                />
            </NavLink>

            <div className="login__container">
                <h1>Sign-In</h1>

                <form action="">
                    <h5>E-mail or mobile phone number</h5>
                    <input
                        type="text"
                        value={email}
                        onChange={e => setEmail(e.target.value)}
                    />

                    <h5>Password</h5>
                    <input
                        type="password"
                        value={password}
                        onChange={e => setPassword(e.target.value)}
                    />

                    <button
                        type='submit'
                        onClick={signIn}
                        className="login__signButton">
                        Sign In
                    </button>
                </form>
                <p>
                    Black Lives Matter Yard Sign,
                    We Believe Women's Rights Human Rights Science
                    Love Kindness Anti-Racism BLM Movement Lawn Sign,
                    2-Sided Print Corrugated Plastic Banner w/ Metal H Stake for Patio Garden.
                </p>
                <button
                    type='submit'
                    onClick={registerAccount}
                    className="login__registerButton">
                    Create your Amazon account
                </button>
            </div>
        </div>
    )
}

export default Login