import { useDispatch } from 'react-redux';
import { updateQuantity, removeFromCart } from '../../features/cart/cartSlice';
import './CartItem.css';

function CartItem({ item }) {
  const dispatch = useDispatch();

  const handleQuantityChange = (e) => {
    const quantity = parseInt(e.target.value) || 0;
    dispatch(updateQuantity({ id: item.id, quantity }));
  };

  const handleRemove = () => {
    dispatch(removeFromCart(item.id));
  };

  return (
    <div className="cart-item">
      <img src={item.image} alt={item.name} />
      <div>
        <h4>{item.name}</h4>
        <p>${item.price} x {item.quantity} = ${item.price * item.quantity}</p>
        <input
          type="number"
          min="0"
          value={item.quantity}
          onChange={handleQuantityChange}
        />
        <button onClick={handleRemove}>Remove</button>
      </div>
    </div>
  );
}

export default CartItem;