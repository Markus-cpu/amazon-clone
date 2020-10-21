import React, {useEffect, useState} from "react";
import "./Payment.css";
import {useStateValue} from "../../stateProvider";
import CheckoutProduct from "../Checkout/CheckoutProduct/CheckoutProduct";
import {NavLink} from "react-router-dom";
import FlipMove from "react-flip-move";
import {useElements, useStripe, CardElement} from "@stripe/react-stripe-js";
import {getTotalBasket} from "../../reducer";
import CurrencyFormat from "react-currency-format";

const Payment = () => {
    const [{ basket, user }, dispatch] = useStateValue()

    const stripe = useStripe();
    const elements = useElements();

    const [succeeded, setSucceeded] = useState(false)
    const [processing, setProcessing] = useState("")
    const [error, setError] = useState(null)
    const [disabled, setDisabled] = useState(true)
    const [clientSecret, setClientSecret] = useState(true)

    useEffect(() => {
        // generate the special stripe secret which allows us to change a customer
        const getClientSecret = async () => {
            const response = await axios({
                method: 'post',
                // Stripe expects the total in a currencies submits
                url: `/payments/create?total=${ getTotalBasket(basket) * 100 }`
            })
            setClientSecret(response.data.clientSecret)
        }
        getClientSecret()
    }, [basket])

    const handleSubmit = async(e) => {
        // do all the fancy stripe stuff...
        e.preventDefault()
        setProcessing(true)

        const payload = await stripe.confirmCardPayment(clientSecret,{
            payment_method: {
                card: elements.getElement(CardElement),
            }
        });
    }
    const handleChange = (e) => {
        //listen for changes in the CardElement
        //and display any errors as the customer types their card details
        setDisabled(e.empty)
        setError(e.error ? e.error.message : "")
    }

    return (
        <div className="payment">
            <div className="payment__container">
                <h1>
                    Checkout: (
                    <NavLink to="/checkout">
                        {basket?.length} items
                    </NavLink>
                    )
                </h1>

                {/*Payment section - delivery address*/}
                <div className="payment__section">
                    <div className="payment__title">
                        <h3>Delivery Address:</h3>
                    </div>
                    <div className="payment__address">
                        <p>{user?.email}</p>
                        <p>455 React app</p>
                        <p>Tatarstan, RU</p>
                    </div>
                </div>

                {/*Review items*/}
                <div className="payment__section">
                    <div className="payment__title">
                        <h3>Review items and delivery:</h3>
                    </div>
                    <div className="payment__items">
                        {basket.map(item => (
                            <FlipMove enterAnimation="accordionVertical" leaveAnimation="accordionVertical">
                                <CheckoutProduct
                                    key={item.id}
                                    id={item.id}
                                    image={item.image}
                                    title={item.title}
                                    rating={item.rating}
                                    price={item.price}
                                />
                            </FlipMove>
                        ))}
                    </div>
                </div>

                {/*Payment method*/}
                <div className="payment__section">
                    <div className="payment__title">
                        <h3>Payment Method</h3>
                    </div>
                    <div className="payment__details">
                    {/* Stripe magic will go */}

                        <form onSubmit={handleSubmit}>
                            <CardElement onChange={handleChange} />

                            <div className="payment__priceContainer">
                                <CurrencyFormat
                                    renderText={(value) => (
                                        <h3>Order Total: { value } </h3>
                                    )}
                                    decimalScale={2}
                                    value={getTotalBasket(basket)}
                                    displayType={"text"}
                                    thousandSeparator={true}
                                    prefix={"$"}
                                />
                                <button disabled={processing || disabled || succeeded}>
                                    <span>{processing ? <p>Processing</p> : "Buy Now"}</span>
                                </button>
                            </div>

                            {/* ERRORS */}
                            {error && <div>{error}</div>}
                        </form>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Payment