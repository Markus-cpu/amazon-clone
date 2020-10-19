import React from "react";
import "./Header.css";
import SearchIcon from '@material-ui/icons/Search';
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';
import {NavLink} from "react-router-dom";
import {useStateValue} from "../../stateProvider";

const Header = () => {
    const [{ basket }] = useStateValue()
    return (
        <div className="header">
            <NavLink className="header__link header__link--hover" to="/">
                <img
                    className="header__logo"
                    src="https://pngimg.com/uploads/amazon/amazon_PNG11.png"
                    alt="amazon-logo"
                />
            </NavLink>
            <div className="header__search">
                <input className="header__searchInput" type="text"/>
                <SearchIcon className="header__searchIcon"/>
            </div>
            <div className="header__nav">
                <NavLink to="/checkout" className="header__options header__link--hover">
                    <div className="header__option">
                        <span className="header__optionLineOne">
                            Hello Guest
                        </span>
                        <span className="header__optionLineTwo">
                            Sign In
                        </span>
                    </div>
                </NavLink>
                <div className="header__option">
                    <span className="header__optionLineOne">
                        Returns
                    </span>
                    <span className="header__optionLineTwo">
                        & Orders
                    </span>
                </div>
                <div className="header__option">
                    <span className="header__optionLineOne">
                        Your
                    </span>
                    <span className="header__optionLineTwo">
                        Prime
                    </span>
                </div>

                <NavLink className="header__link header__link--hover" to="/checkout">
                    <div className="header__optionBasket">
                        <AddShoppingCartIcon/>
                        <span className="header__optionLineTwo header__basketCount">
                            {basket?.length}
                    </span>
                    </div>
                </NavLink>
            </div>
        </div>
    )
}

export default Header