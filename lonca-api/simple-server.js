const http = require('http');
const fs = require('fs');
const path = require('path');

// Read product data from the parent_products.json file
let products = [];
try {
  const productsData = fs.readFileSync(path.join(__dirname, '../parent_products.json'), 'utf8');
  products = JSON.parse(productsData);

  // Take only the first 10 products to reduce load time
  products = products.slice(0, 10);
  
  console.log(`Loaded ${products.length} products from parent_products.json`);
} catch (error) {
  console.error('Error loading products:', error);
  // Fallback to sample data if the file cannot be read
  products = [
    {
      "_id": {
        "$oid": "62e13fd7164339d544819593"
      },
      "vendor": {
        "name": "Sobe Istanbul"
      },
      "series": {
        "name": "2S-2M-2L",
        "item_quantity": 6
      },
      "description_details": {
        "en": {
          "fabric": "Cotton blend",
          "model_measurements": "Height: 175cm",
          "sample_size": "S",
          "product_measurements": "Length: 65cm"
        }
      },
      "main_image": "https://via.placeholder.com/300",
      "price": 29.99,
      "names": {
        "en": "Sample Blouse - Beige"
      },
      "images": [
        "https://via.placeholder.com/300",
        "https://via.placeholder.com/300",
        "https://via.placeholder.com/300"
      ],
      "product_code": "SAMPLE123"
    }
  ];
}

const server = http.createServer((req, res) => {
  // Set CORS headers for all responses
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
  
  if (req.method === 'OPTIONS') {
    res.writeHead(200);
    res.end();
    return;
  }
  
  res.writeHead(200, { 'Content-Type': 'application/json' });
  
  if (req.url === '/api/test') {
    res.end(JSON.stringify({ message: 'Simple server is running' }));
  } else if (req.url === '/api/products' || req.url === '/products') {
    res.end(JSON.stringify(products));
  } else if (req.url.startsWith('/api/products/') || req.url.startsWith('/products/')) {
    const id = req.url.split('/').pop();
    const product = products.find(p => p._id.$oid === id);
    
    if (product) {
      res.end(JSON.stringify(product));
    } else {
      res.writeHead(404);
      res.end(JSON.stringify({ message: 'Product not found' }));
    }
  } else {
    res.writeHead(404);
    res.end(JSON.stringify({ message: 'Route not found' }));
  }
});

const PORT = 3000;

server.listen(PORT, () => {
  console.log(`Simple server running on port ${PORT}`);
}); 