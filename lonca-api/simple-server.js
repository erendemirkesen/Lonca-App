const http = require('http');

const server = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'application/json' });
  
  if (req.url === '/api/test') {
    res.end(JSON.stringify({ message: 'Simple server is running' }));
  } else if (req.url === '/api/products') {
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
    res.end(JSON.stringify(products));
  } else if (req.url.startsWith('/api/products/')) {
    const id = req.url.split('/').pop();
    const product = {
      id: id,
      brand: 'Sample Brand',
      name: 'Sample Product ' + id,
      price: 29.99,
      sku: 'SKU' + id,
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
    res.end(JSON.stringify(product));
  } else {
    res.writeHead(404);
    res.end(JSON.stringify({ message: 'Route not found' }));
  }
});

const PORT = 3001;

server.listen(PORT, () => {
  console.log(`Simple server running on port ${PORT}`);
}); 