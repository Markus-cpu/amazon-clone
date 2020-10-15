import React from "react";
import "./Product.css";
import StarRateIcon from '@material-ui/icons/StarRate';

const Product = () => {
    return (
        <div className="product">
            <div className="product__info">
                <p>The lean startup</p>
                <p className="product__price">
                    <small>$</small>
                    <strong>29.99</strong>
                </p>
                <div className="product__rating">
                    <StarRateIcon/>
                    <StarRateIcon/>
                    <StarRateIcon/>
                    <StarRateIcon/>
                </div>
            </div>
            <img src="https://images-na.ssl-images-amazon.com/images/I/91cAYhyJiKL._SY500_.jpg" alt=""/>
            <button>Add to basket</button>
        </div>
    )
}

export default Product