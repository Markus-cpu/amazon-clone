import React from "react";
import "./Subtotal.css";
import CurrencyFormat from "react-currency-format";
import {useStateValue} from "../../../stateProvider";
import {getTotalBasket} from "../../../reducer";

const Subtotal = () => {
    const [{ basket }, dispatch] = useStateValue()
    return (
        <div className="subtotal">
            <CurrencyFormat
                renderText={(value) => (
                    <>
                        <p>
                            Subtotal ({basket?.length} items): {" "}
                            <strong>{value}</strong>
                        </p>
                        <small className="subtotal__gift">
                            <input type="checkbox"/>
                            This order contain a gift
                        </small>
                    </>
                )}
                decimalScale={2}
                value={getTotalBasket(basket)}
                displayType={"text"}
                thousandSeparator={true}
                prefix={"$"}
            />
            <button>Procced to Checkout</button>
        </div>
    )
}

export default Subtotal