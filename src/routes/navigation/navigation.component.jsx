import { Fragment, useContext } from "react";
import { Outlet, Link } from "react-router-dom";
import Crown from '../../assets/crown.svg?react';
import { UserContext } from "../../contexts/user.context";
import { CartContext } from "../../contexts/cart.context";
import { signOutUser } from "../../utilities/firebase/firebase";
import CartIcon from "../../components/cart-icon/cart-icon.component";
import CartDropdown from "../../components/cart-dropdown/cart-dropdown.component";
import { NavigationContainer, LogoContainer, NavLinksContainer, NavLink } from "./navigation.styles";

const Navigation = () => {
    const { currentUser } = useContext(UserContext);
    const { isCartOpen } = useContext(CartContext);

    return (
        <Fragment>
            <NavigationContainer>
                <LogoContainer to='/'>
                    <Crown className="logo"/>
                </LogoContainer>
                <NavLinksContainer>
                    <NavLink to='/shop'>
                        SHOP
                    </NavLink>
                    {currentUser? (
                        <NavLink as='span' onClick={signOutUser}>SIGN OUT</NavLink>
                        ) : (
                        <NavLink to='/auth'>
                            SIGN-IN
                        </NavLink>
                    )}
                    <CartIcon />
                </NavLinksContainer>
                {isCartOpen && <CartDropdown />}
            </NavigationContainer>
        <Outlet />
        </Fragment>
    );
  }

export default Navigation;