import { Fragment} from "react";
import { Outlet } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { selectIsCartOpen } from "../../store/cart/cart.selector";
import Crown from '../../assets/crown.svg?react';
import { signOutStart } from "../../store/user/user.action";
import CartIcon from "../../components/cart-icon/cart-icon.component";
import CartDropdown from "../../components/cart-dropdown/cart-dropdown.component";
import { NavigationContainer, LogoContainer, NavLinksContainer, NavLink } from "./navigation.styles";

const Navigation = () => {
    const currentUser = useSelector((state) => state.user.currentUser)
    const isCartOpen = useSelector(selectIsCartOpen);
    const dispatch = useDispatch();

    const signOutUser= () => dispatch(signOutStart());

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