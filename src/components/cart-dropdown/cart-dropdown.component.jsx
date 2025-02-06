import { useDispatch, useSelector } from 'react-redux';
import { selectCartItems, selectIsCartOpen } from '../../store/cart/cart.selector';
import { setIsCartOpen } from '../../store/cart/cart.action';
import { Link } from 'react-router-dom';
import Button from '../button/button.component';
import CartItem from '../cart-item/cart-item.component';
import { CartDropdownContainer, CartItems, EmptyMessage } from './cart-dropdown.styles';

const CartDropdown = () => {
  const dispatch = useDispatch();

  const cartItems = useSelector(selectCartItems);
  const isCartOpen = useSelector(selectIsCartOpen);

  const closeCart = () => dispatch(setIsCartOpen(!isCartOpen));

  return (
    <CartDropdownContainer>
      <CartItems>
        { cartItems.length ? (cartItems.map((item) => (
          <CartItem key={item.id} cartItem={item} />
        ))) : (
          <EmptyMessage>Your cart is empty</EmptyMessage>
        )
      }
      </CartItems>
      <Link to='/checkout'><Button onClick={closeCart}>GO TO CHECKOUT</Button></Link>
    </CartDropdownContainer>
  );
}

export default CartDropdown;