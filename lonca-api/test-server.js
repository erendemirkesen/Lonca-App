const express = require('express');
const cors = require('cors');

const app = express();
const PORT = 3001;
const HOST = '127.0.0.1';

app.use(cors());
app.use(express.json());

app.get('/api/test', (req, res) => {
  res.json({ message: 'Test server is running' });
});

app.get('/api/products', (req, res) => {
  // Sample mock data
  const products = [
    {
      id: '1',
      brand: 'Sample Brand',
      name: 'Sample Product 1',
      price: 29.99,
      mainImage: 'https://via.placeholder.com/300'
    },
    {
      id: '2',
      brand: 'Sample Brand',
      name: 'Sample Product 2',
      price: 39.99,
      mainImage: 'https://via.placeholder.com/300'
    }
  ];
  
  res.json(products);
});

app.get('/api/products/:id', (req, res) => {
  const productId = req.params.id;
  
  // Sample product detail
  const product = {
    id: productId,
    brand: 'Sample Brand',
    name: 'Sample Product ' + productId,
    price: 29.99,
    sku: 'SKU' + productId,
    series: {
      name: 'Sample Series',
      itemQuantity: 6
    },
    images: {
      main: 'https://via.placeholder.com/300',
      all: [
        'https://via.placeholder.com/300',
        'https://via.placeholder.com/300',
        'https://via.placeholder.com/300'
      ]
    },
    details: {
      fabric: 'Cotton',
      modelMeasurements: 'Height: 175cm',
      productMeasurements: 'Size: M',
      sampleSize: 'M'
    }
  };
  
  res.json(product);
});

app.listen(PORT, HOST, () => {
  console.log(`Test server running at http://${HOST}:${PORT}`);
}); 