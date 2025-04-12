import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { getProductById } from '../../features/products/productsSlice';
import { addToCart } from '../../features/cart/cartSlice';
import './ProductPage.css';

function ProductPage() {
  const { id } = useParams();
  const dispatch = useDispatch();
  const { currentProduct, status, error } = useSelector((state) => state.products);

  useEffect(() => {
    dispatch(getProductById(id));
  }, [id, dispatch]);

  const handleAddToCart = () => {
    if (currentProduct) {
      dispatch(addToCart(currentProduct));
    }
  };

  if (status === 'loading') return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;
  if (!currentProduct) return <p>Product not found</p>;

  return (
    <div className="product-page">
      <img src={currentProduct.image} alt={currentProduct.name} />
      <div>
        <h1>{currentProduct.name}</h1>
        <p>{currentProduct.description}</p>
        <p>${currentProduct.price}</p>
        <button onClick={handleAddToCart}>Add to Cart</button>
      </div>
    </div>
  );
}

export default ProductPage;