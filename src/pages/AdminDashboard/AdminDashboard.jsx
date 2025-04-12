import { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { useSelector, useDispatch } from 'react-redux';
import {
  getProducts,
  createProduct,
  editProduct,
  removeProduct,
} from '../../features/products/productsSlice';
import { Navigate, useNavigate } from 'react-router-dom';
import './AdminDashboard.css';

function AdminDashboard() {
  const { register, handleSubmit, reset, formState: { errors } } = useForm();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { items, status, error } = useSelector((state) => state.products);
  const { isAuthenticated } = useSelector((state) => state.auth);

  useEffect(() => {
    if (status === 'idle') {
      dispatch(getProducts());
    }
  }, [status, dispatch]);

  const onSubmit = (data) => {
    // Удаляем поле id при создании нового товара
    const { id, ...productData } = data;
    console.log('Submitting product:', productData); // Отладка

    if (id) {
      dispatch(editProduct({ id, product: productData }));
      reset();
    } else {
      dispatch(createProduct(productData)).then((action) => {
        if (action.meta.requestStatus === 'fulfilled') {
          const newProduct = action.payload;
          console.log('New product created:', newProduct); // Отладка
          dispatch(getProducts());
          navigate(`/products/${newProduct.id}`);
        }
      });
      reset();
    }
  };

  const handleEdit = (product) => {
    reset(product);
  };

  const handleDelete = (id) => {
    dispatch(removeProduct(id));
  };

  if (!isAuthenticated) {
    return <Navigate to="/admin/login" />;
  }

  return (
    <div className="admin-dashboard">
      <h1>Admin Dashboard</h1>
      <h2>Add/Edit Product</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        {/* Убрали <input type="hidden" {...register('id')} /> */}
        <div>
          <label>Name</label>
          <input
            {...register('name', { required: 'Name is required' })}
          />
          {errors.name && <p>{errors.name.message}</p>}
        </div>
        <div>
          <label>Description</label>
          <textarea {...register('description')} />
        </div>
        <div>
          <label>Price</label>
          <input
            type="number"
            {...register('price', {
              required: 'Price is required',
              min: { value: 0, message: 'Price must be positive' },
            })}
          />
          {errors.price && <p>{errors.price.message}</p>}
        </div>
        <div>
          <label>Image URL</label>
          <input
            {...register('image', { required: 'Image URL is required' })}
          />
          {errors.image && <p>{errors.image.message}</p>}
        </div>
        <button type="submit">Save</button>
      </form>

      <h2>Products</h2>
      {status === 'loading' && <p>Loading...</p>}
      {error && <p>Error: {error}</p>}
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Price</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {items.map((product) => (
            <tr key={product.id}>
              <td>{product.name}</td>
              <td>${product.price}</td>
              <td>
                <button onClick={() => handleEdit(product)}>Edit</button>
                <button onClick={() => handleDelete(product.id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default AdminDashboard;