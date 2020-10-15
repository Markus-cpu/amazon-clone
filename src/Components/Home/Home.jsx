import React from "react";
import "./Home.css";
import Product from "./Product/Product";

const Home = () => {
    return (
        <div className="home">
            <div className="home__container">
                <img className="home__image" src="https://logopedicum.com/wp-content/uploads/2015/03/tranquility.jpg" alt=""/>

                <div className="home__row">
                    <Product />
                    <Product />
                </div>

                <div className="home__row">
                    <Product />
                    <Product />
                    <Product />
                </div>

                <div className="home__row">
                    <Product />
                </div>
            </div>
        </div>
    )
}

export default Home