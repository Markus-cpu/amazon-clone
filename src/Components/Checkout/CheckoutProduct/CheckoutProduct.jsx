import React, {forwardRef} from "react";
import "./CheckoutProduct.css";
import StarRateIcon from "@material-ui/core/SvgIcon/SvgIcon";
import {useStateValue} from "../../../stateProvider";

const CheckoutProduct = forwardRef(({image, title, price, rating, id, hideButton}, ref) => {
    const [{}, dispatch] = useStateValue()
    const removeFromBasket = () => {
        dispatch({
            type: 'REMOVE_FROM_BASKET',
            id: id,
        })
    }
    return (
            <div ref={ref} className="checkoutProduct">
                <img
                    src={image}
                    className="checkoutProduct__image"
                    alt="imageProduct"
                />
                <div className="checkoutProduct__info">
                    <p className="checkoutProduct__title">
                        {title}
                    </p>
                    <p className="checkoutProduct__price">
                        <small>$</small>
                        <strong>{price}</strong>
                    </p>
                    <div className="checkoutProduct__rating">
                        {Array(rating).fill().map((_, i) => (
                            <StarRateIcon/>
                        ))}
                    </div>
                    {!hideButton && (
                        <button onClick={removeFromBasket}>Remove from basket</button>
                    )}
                </div>
            </div>
    )
})

export default CheckoutProduct