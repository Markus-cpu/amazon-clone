import React from "react";
import "./Home.css";
import Product from "./Product/Product";

const Home = () => {
    return (
        <div className="home">
            <div className="home__container">
                <img className="home__image" src="https://logopedicum.com/wp-content/uploads/2015/03/tranquility.jpg" alt=""/>

                <div className="home__row">
                    <Product
                        id="5678"
                        title='GAEMS M155 Full HD 1080P Portable Gaming Monitor for PS4 Pro,
                        Xbox One, S, Xbox One X, Nintendo Switch, PC (Consoles Not Included) - PlayStation 4'
                        image='https://images-na.ssl-images-amazon.com/images/I/91ZnF4wu9DL._AC_SX450_.jpg'
                        price='119.99'
                        rating={4}
                    />
                    <Product
                        id="09878"
                        title='Toshiba (HDTB420XK3AA) Canvio Basics 2TB Portable External Hard Drive USB 3.0, Black'
                        image='https://images-na.ssl-images-amazon.com/images/I/910A6B1Sa4L._AC_SX466_.jpg'
                        price='78.99'
                        rating={3}
                    />
                </div>

                <div className="home__row">
                    <Product
                        id="45762985"
                        title='Canon EOS 5D Mark III 22.3 MP Full Frame CMOS with 1080p Full-HD Video Mode Digital SLR Camera (Body)'
                        image='https://images-na.ssl-images-amazon.com/images/I/71VgQIX9OXL._AC_SL1500_.jpg'
                        price='779.00'
                        rating={4}
                    />
                    <Product
                        id="59880234"
                        title='HP 14b-ca0010nr Chromebook X360 14-Inch HD Touchscreen Laptop, Chrome (Ceramic White/Mineral Silver)'
                        image='https://images-na.ssl-images-amazon.com/images/I/8173Or14LpL._AC_SX425_.jpg'
                        price='270.00'
                        rating={5}
                    />
                    <Product
                        id='23'
                        title='Customers who viewed Yamaha YHT-4950U 4K Ultra HD 5.1-Channel Home Theater System with Bluetooth also viewed'
                        image='https://images-na.ssl-images-amazon.com/images/I/81lTw2G06pL._AC_SX425_.jpg'
                        price='399.99'
                        rating={5}
                    />
                </div>

                <div className="home__row">
                    <Product
                        id='1234'
                        title='LG 55UM7300PUA Alexa Built-in 55" 4K Ultra HD Smart LED TV (2019)'
                        image='https://images-na.ssl-images-amazon.com/images/I/91mq8PnGu1L._AC_SX355_.jpg'
                        price='419.99'
                        rating={4}
                    />
                </div>
            </div>
        </div>
    )
}

export default Home