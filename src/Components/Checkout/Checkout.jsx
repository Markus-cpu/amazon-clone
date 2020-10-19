import React from "react";
import "./Checkout.css";
import Subtotal from "./Subtotal/Subtotal";
import {useStateValue} from "../../stateProvider";
import CheckoutProduct from "./CheckoutProduct/CheckoutProduct";

const Checkout = () => {
    const [{ basket }, dispatch] = useStateValue()
    return (
        <div className="checkout">
            <div className="checkout__left">
                <img
                    className="checkout__ad"
                    src="https://www.upload.ee/image/7429945/banner.png"
                    alt="banner"
                />
                <div>
                    <h2 className="checkout__title">
                        Your shopping Basket
                    </h2>
                    { basket.map( product =>
                        <CheckoutProduct
                            key={product.id}
                            id={product.id}
                            image={product.image}
                            title={product.title}
                            rating={product.rating}
                            price={product.price}
                        />
                    )}
                </div>
            </div>

            <div className="checkout__right">
                <Subtotal />
            </div>
        </div>
    )
}

export default Checkout