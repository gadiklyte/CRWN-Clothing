import { useContext } from 'react';
import { CartContext } from '../../contexts/cart.context';
import { Link } from 'react-router-dom';
import Button from '../button/button.component';
import CartItem from '../cart-item/cart-item.component';
import { CartDropdownContainer, CartItems, EmptyMessage } from './cart-dropdown.styles';

const CartDropdown = () => {
  const { cartItems, isCartOpen, setIsCartOpen } = useContext(CartContext);

  const closeCart = () => setIsCartOpen(!isCartOpen);

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