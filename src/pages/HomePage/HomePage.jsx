import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getProducts } from '../../features/products/productsSlice';
import ProductCard from '../../components/ProductCard/ProductCard';
import './HomePage.css';

function HomePage() {
  const dispatch = useDispatch();
  const { items, status, error } = useSelector((state) => state.products);

  useEffect(() => {
    if (status === 'idle') {
      dispatch(getProducts());
    }
  }, [status, dispatch]);

  return (
    <div className="home-page">
      <h1>Products</h1>
      {status === 'loading' && <p>Loading...</p>}
      {error && <p>Error: {error}</p>}
      <div className="product-list">
        {items.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}

export default HomePage;