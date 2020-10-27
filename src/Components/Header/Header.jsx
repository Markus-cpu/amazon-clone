import React from "react";
import "./Header.css";
import SearchIcon from '@material-ui/icons/Search';
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';
import {NavLink} from "react-router-dom";
import {useStateValue} from "../../stateProvider";
import {auth} from "../../firebase";

const Header = () => {

    const [{ basket, user }, dispatch] = useStateValue()
    const handleAuthentication = () => {
        if (user) {
            auth.signOut()
        }
    }

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

                <NavLink to={ !user && "/login" } className="header__options header__link--hover">
                    <div onClick={handleAuthentication} className="header__option">
                        {/* user?.email || "Guest" */}
                        <span className="header__optionLineOne">
                            Hello { !user ? 'Guest' : user?.email }
                        </span>
                        <span className="header__optionLineTwo">
                            { user ? 'Sign Out' : 'Sign In' }
                        </span>
                    </div>
                </NavLink>

                <NavLink to="/orders" className="header__options header__link--hover">
                    <div className="header__option">
                        <span className="header__optionLineOne">
                             Returns
                        </span>
                        <span className="header__optionLineTwo">
                             & Orders
                        </span>
                    </div>
                </NavLink>

                <NavLink to="/prime" className="header__options header__link--hover">
                    <div className="header__option">
                        <span className="header__optionLineOne">
                            Your
                        </span>
                        <span className="header__optionLineTwo">
                            Prime
                        </span>
                    </div>
                </NavLink>

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