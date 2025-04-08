const axios = require('axios');

const API_BASE_URL = 'http://127.0.0.1:3001/api';

async function testApiConnection() {
  console.log('Starting API test...');
  console.log('API URL:', API_BASE_URL);
  
  try {
    // Test basic connection
    console.log('Testing /api/test endpoint...');
    const testResponse = await axios.get(`${API_BASE_URL}/test`);
    console.log('API Test Response:', testResponse.data);
    
    // Test products endpoint
    console.log('\nTesting /api/products endpoint...');
    const productsResponse = await axios.get(`${API_BASE_URL}/products`);
    console.log('Products Count:', productsResponse.data.length);
    console.log('First Product:', productsResponse.data[0]);
    
    // Test product detail endpoint
    console.log('\nTesting /api/products/:id endpoint...');
    const productId = '1';
    console.log('Product ID:', productId);
    const productDetailResponse = await axios.get(`${API_BASE_URL}/products/${productId}`);
    console.log('Product Detail Response:', productDetailResponse.data);
    
    console.log('\nAll API tests passed successfully!');
  } catch (error) {
    console.error('\nAPI Test Error:', error.message);
    console.error('Error Details:', error);
    if (error.response) {
      console.error('Error Response Data:', error.response.data);
    }
  }
}

testApiConnection(); 