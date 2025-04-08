const fs = require('fs');
const path = require('path');

// Load product data from JSON file
const products = JSON.parse(
  fs.readFileSync(path.join(__dirname, '../data/products.json'), 'utf8')
);

// Transform the raw data to match our data model
const transformedProducts = products.map(product => ({
  id: product._id.$oid,
  brand: product.vendor.name,
  name: product.names.en,
  price: product.price,
  sku: product.product_code,
  series: {
    name: product.series.name,
    itemQuantity: product.series.item_quantity
  },
  images: {
    main: product.main_image,
    all: product.images
  },
  details: {
    fabric: product.description_details.en.fabric,
    modelMeasurements: product.description_details.en.model_measurements,
    productMeasurements: product.description_details.en.product_measurements,
    sampleSize: product.description_details.en.sample_size
  }
}));

// Get all products (limited info for PLP)
exports.getProducts = (req, res) => {
  const plpProducts = transformedProducts.map(({ id, brand, name, price, images }) => ({
    id,
    brand,
    name,
    price,
    mainImage: images.main
  }));
  
  res.json(plpProducts);
};

// Get a single product by ID (full details for PDP)
exports.getProductById = (req, res) => {
  const productId = req.params.id;
  const product = transformedProducts.find(p => p.id === productId);
  
  if (!product) {
    return res.status(404).json({ message: 'Product not found' });
  }
  
  res.json(product);
}; 