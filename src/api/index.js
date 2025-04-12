import axios from 'axios';

const API_URL = 'http://localhost:3001';

// Products
export const fetchProducts = async () => {
  const response = await axios.get(`${API_URL}/products`);
  return response.data;
};

export const fetchProductById = async (id) => {
  const response = await axios.get(`${API_URL}/products/${id}`);
  return response.data;
};

export const addProduct = async (product) => {
  console.log('Sending product to server:', product); // Отладка
  const response = await axios.post(`${API_URL}/products`, product);
  console.log('Server response:', response.data); // Отладка
  return response.data;
};

export const updateProduct = async (id, product) => {
  const response = await axios.patch(`${API_URL}/products/${id}`, product);
  return response.data;
};

export const deleteProduct = async (id) => {
  await axios.delete(`${API_URL}/products/${id}`);
};

// Auth
export const loginAdmin = async (credentials) => {
  const response = await axios.get(`${API_URL}/admins`, {
    params: {
      email: credentials.email,
      password: credentials.password,
    },
  });
  return response.data[0];
};