import axios from 'axios';

// For iOS simulator, 'localhost' works
// For Android emulator, use '10.0.2.2' 
// For physical devices, use your machine's IP address
// For development testing, use 127.0.0.1
const API_BASE_URL = 'http://127.0.0.1:3001/api';

export const getProducts = async () => {
  try {
    const response = await axios.get(`${API_BASE_URL}/products`);
    return response.data;
  } catch (error) {
    console.error('Error fetching products:', error);
    throw error;
  }
};

export const getProductById = async (productId) => {
  try {
    const response = await axios.get(`${API_BASE_URL}/products/${productId}`);
    return response.data;
  } catch (error) {
    console.error(`Error fetching product ${productId}:`, error);
    throw error;
  }
}; 