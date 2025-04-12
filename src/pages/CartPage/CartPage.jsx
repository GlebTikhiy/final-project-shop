import { useSelector, useDispatch } from 'react-redux';
import CartItem from '../../components/CartItem/CartItem';
import { clearCart } from '../../features/cart/cartSlice';
import './CartPage.css';

function CartPage() {
  const { items } = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  const total = items.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <div className="cart-page">
      <h1>Cart</h1>
      {items.length === 0 ? (
        <p>Your cart is empty</p>
      ) : (
        <>
          {items.map((item) => (
            <CartItem key={item.id} item={item} />
          ))}
          <div className="cart-summary">
            <p>Total: ${total.toFixed(2)}</p>
            <button onClick={() => dispatch(clearCart())}>Clear Cart</button>
          </div>
        </>
      )}
    </div>
  );
}

export default CartPage;