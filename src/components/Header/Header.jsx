import { Link, NavLink } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { logout } from '../../features/auth/authSlice';
import './Header.css';

function Header() {
  const { items } = useSelector((state) => state.cart);
  const { isAuthenticated } = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  const cartCount = items.reduce((sum, item) => sum + item.quantity, 0);

  const handleLogout = () => {
    dispatch(logout());
  };

  return (
    <header className="header">
      <Link to="/">Shop</Link>
      <nav>
        <NavLink to="/" end>
          Home
        </NavLink>
        <NavLink to="/cart">Cart ({cartCount})</NavLink>
        {isAuthenticated ? (
          <>
            <NavLink to="/admin">Admin</NavLink>
            <button onClick={handleLogout}>Logout</button>
          </>
        ) : (
          <NavLink to="/admin/login">Admin Login</NavLink>
        )}
      </nav>
    </header>
  );
}

export default Header;