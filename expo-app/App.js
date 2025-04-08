import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, FlatList, TouchableOpacity, Image, ScrollView, SafeAreaView, StatusBar, Alert } from 'react-native';
import axios from 'axios';

// Import product data from parent_products.json
const productData = [
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
        "fabric": "",
        "model_measurements": "",
        "sample_size": "",
        "product_measurements": ""
      }
    },
    "main_image": "https://loncapazar.s3.eu-north-1.amazonaws.com/product/Sobe/2016580-1",
    "price": 3,
    "names": {
      "en": "16580 - Blouse - Beige"
    },
    "images": [
      "https://loncapazar.s3.eu-north-1.amazonaws.com/product/Sobe/2016580-1",
      "https://loncapazar.s3.eu-north-1.amazonaws.com/product/Sobe/2016580-2",
      "https://loncapazar.s3.eu-north-1.amazonaws.com/product/Sobe/2016580-3",
      "https://loncapazar.s3.eu-north-1.amazonaws.com/product/Sobe/2016580-4",
      "https://loncapazar.s3.eu-north-1.amazonaws.com/product/Sobe/2016580-5",
      "https://loncapazar.s3.eu-north-1.amazonaws.com/product/Sobe/2016580-6"
    ],
    "product_code": "16580"
  },
  {
    "_id": {
      "$oid": "62e13e8c164339d544819572"
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
        "fabric": "",
        "model_measurements": "",
        "sample_size": "",
        "product_measurements": ""
      }
    },
    "main_image": "https://loncapazar.s3.eu-north-1.amazonaws.com/product/Sobe/2016577-1",
    "price": 3,
    "names": {
      "en": "16577 - Blouse - Orange"
    },
    "images": [
      "https://loncapazar.s3.eu-north-1.amazonaws.com/product/Sobe/2016577-1",
      "https://loncapazar.s3.eu-north-1.amazonaws.com/product/Sobe/2016577-2",
      "https://loncapazar.s3.eu-north-1.amazonaws.com/product/Sobe/2016577-3",
      "https://loncapazar.s3.eu-north-1.amazonaws.com/product/Sobe/2016577-4",
      "https://loncapazar.s3.eu-north-1.amazonaws.com/product/Sobe/2016577-5",
      "https://loncapazar.s3.eu-north-1.amazonaws.com/product/Sobe/2016577-6"
    ],
    "product_code": "16577"
  },
  {
    "_id": {
      "$oid": "638f2e80dd02a88ae7b803e6"
    },
    "vendor": {
      "name": "Tuba"
    },
    "series": {
      "name": "1S-1M-1L",
      "item_quantity": 3
    },
    "description_details": {
      "en": {
        "fabric": "80% Cotton 20% Polyester",
        "model_measurements": "Model Measurements: Height: 1.79, Chest: 88, Waist: 62, Hip: 93",
        "product_measurements": "Product Dimensions: Height: 67 cm",
        "sample_size": ""
      }
    },
    "main_image": "https://loncapazar.s3.eu-north-1.amazonaws.com/product/Tuba_Butik/2036088-1",
    "price": 5.49,
    "names": {
      "en": "36088 - Blouse - Cream"
    },
    "images": [
      "https://loncapazar.s3.eu-north-1.amazonaws.com/product/Tuba_Butik/2036088-1",
      "https://loncapazar.s3.eu-north-1.amazonaws.com/product/Tuba_Butik/2036088-2",
      "https://loncapazar.s3.eu-north-1.amazonaws.com/product/Tuba_Butik/2036088-3",
      "https://loncapazar.s3.eu-north-1.amazonaws.com/product/Tuba_Butik/2036088-4",
      "https://loncapazar.s3.eu-north-1.amazonaws.com/product/Tuba_Butik/2036088-5",
      "https://loncapazar.s3.eu-north-1.amazonaws.com/product/Tuba_Butik/2036088-6"
    ],
    "product_code": "36088"
  },
  {
    "_id": {
      "$oid": "6390782add02a88ae7e5d12c"
    },
    "vendor": {
      "name": "Tuba"
    },
    "series": {
      "name": "1S-1M-1L",
      "item_quantity": 3
    },
    "description_details": {
      "en": {
        "fabric": "",
        "model_measurements": "",
        "product_measurements": "",
        "sample_size": ""
      }
    },
    "main_image": "https://loncapazar.s3.eu-north-1.amazonaws.com/product/Tuba_Butik/2036302-1",
    "price": 5.49,
    "names": {
      "en": "36302 - Blouse - White"
    },
    "images": [
      "https://loncapazar.s3.eu-north-1.amazonaws.com/product/Tuba_Butik/2036302-1",
      "https://loncapazar.s3.eu-north-1.amazonaws.com/product/Tuba_Butik/2036302-2",
      "https://loncapazar.s3.eu-north-1.amazonaws.com/product/Tuba_Butik/2036302-3",
      "https://loncapazar.s3.eu-north-1.amazonaws.com/product/Tuba_Butik/2036302-4",
      "https://loncapazar.s3.eu-north-1.amazonaws.com/product/Tuba_Butik/2036302-5",
      "https://loncapazar.s3.eu-north-1.amazonaws.com/product/Tuba_Butik/2036302-6",
      "https://loncapazar.s3.eu-north-1.amazonaws.com/product/Tuba_Butik/2036302-7"
    ],
    "product_code": "36302"
  },
  {
    "_id": {
      "$oid": "63a6cb1847f7cdafa8ae9f55"
    },
    "vendor": {
      "name": "Black Fashion"
    },
    "series": {
      "name": "3S/M-3M/L",
      "item_quantity": 6
    },
    "main_image": "https://loncapazar.s3.eu-north-1.amazonaws.com/product/Black_Fashion/2038640-1",
    "price": 5,
    "names": {
      "en": "38640 - Blouse - Green"
    },
    "images": [
      "https://loncapazar.s3.eu-north-1.amazonaws.com/product/Black_Fashion/2038640-1",
      "https://loncapazar.s3.eu-north-1.amazonaws.com/product/Black_Fashion/2038640-2",
      "https://loncapazar.s3.eu-north-1.amazonaws.com/product/Black_Fashion/2038640-3"
    ],
    "product_code": "38640",
    "description_details": {
      "en": {
        "fabric": "",
        "model_measurements": "",
        "product_measurements": "",
        "sample_size": ""
      }
    }
  },
  {
    "_id": {
      "$oid": "63c13b9390cc5d3b974a5aba"
    },
    "vendor": {
      "name": "Setre"
    },
    "series": {
      "name": "1S-1L",
      "item_quantity": 2
    },
    "main_image": "https://loncapazar.s3.eu-north-1.amazonaws.com/product/Setre/2040409-1",
    "names": {
      "en": "40409 - Blouse - Pistachio Green"
    },
    "price": 16,
    "images": [
      "https://loncapazar.s3.eu-north-1.amazonaws.com/product/Setre/2040409-1",
      "https://loncapazar.s3.eu-north-1.amazonaws.com/product/Setre/2040409-2",
      "https://loncapazar.s3.eu-north-1.amazonaws.com/product/Setre/2040409-3",
      "https://loncapazar.s3.eu-north-1.amazonaws.com/product/Setre/2040409-4"
    ],
    "product_code": "40409",
    "description_details": {
      "en": {
        "fabric": "%100 Rayon",
        "model_measurements": "Height : 174 Cm / Bust: 84 Cm / Waist: 60 Cm / Hips: 89 Cm / Kg: 54"
      }
    }
  }
];

// Product Card Component for PLP (Product Listing Page)
const ProductCard = ({ product, onPress }) => {
  return (
    <TouchableOpacity style={styles.card} onPress={onPress}>
      <Image 
        source={{ uri: product.main_image }} 
        style={styles.productImage}
        resizeMode="cover"
      />
      <View style={styles.cardContent}>
        <Text style={styles.brandName}>{product.vendor.name}</Text>
        <Text style={styles.productName}>{product.names.en}</Text>
        <Text style={styles.productPrice}>${product.price.toFixed(2)}</Text>
      </View>
    </TouchableOpacity>
  );
};

// Product Detail Component (PDP - Product Detail Page)
const ProductDetail = ({ product, onBack, addToCart }) => {
  const [selectedImage, setSelectedImage] = useState(product.main_image);

  const handleImagePress = (imageUrl) => {
    setSelectedImage(imageUrl);
  };

  return (
    <ScrollView style={styles.detailContainer}>
      {/* Main Image */}
      <Image 
        source={{ uri: selectedImage }} 
        style={styles.detailImage}
        resizeMode="cover"
      />
      
      {/* Product Info */}
      <View style={styles.detailContent}>
        <Text style={styles.detailBrand}>{product.vendor.name}</Text>
        <Text style={styles.detailName}>{product.names.en}</Text>
        <View style={styles.detailRow}>
          <Text style={styles.detailLabel}>SKU:</Text>
          <Text style={styles.detailValue}>{product.product_code}</Text>
        </View>
        <View style={styles.detailRow}>
          <Text style={styles.detailLabel}>Series:</Text>
          <Text style={styles.detailValue}>{product.series.name}</Text>
        </View>
        <Text style={styles.detailPrice}>${product.price.toFixed(2)}</Text>
        
        {/* Product Details */}
        {product.description_details && product.description_details.en && (
          <View style={styles.productDetails}>
            <Text style={styles.detailsSectionTitle}>Product Details</Text>
            
            {product.description_details.en.fabric && (
              <View style={styles.detailRow}>
                <Text style={styles.detailLabel}>Fabric:</Text>
                <Text style={styles.detailValue}>{product.description_details.en.fabric}</Text>
              </View>
            )}
            
            {product.description_details.en.model_measurements && (
              <View style={styles.detailRow}>
                <Text style={styles.detailLabel}>Model:</Text>
                <Text style={styles.detailValue}>{product.description_details.en.model_measurements}</Text>
              </View>
            )}
            
            {product.description_details.en.product_measurements && (
              <View style={styles.detailRow}>
                <Text style={styles.detailLabel}>Measurements:</Text>
                <Text style={styles.detailValue}>{product.description_details.en.product_measurements}</Text>
              </View>
            )}
            
            {product.description_details.en.sample_size && (
              <View style={styles.detailRow}>
                <Text style={styles.detailLabel}>Sample Size:</Text>
                <Text style={styles.detailValue}>{product.description_details.en.sample_size}</Text>
              </View>
            )}
          </View>
        )}
        
        {/* Additional Images Gallery */}
        {product.images && product.images.length > 1 && (
          <View style={styles.additionalImages}>
            <Text style={styles.detailsSectionTitle}>More Images</Text>
            <ScrollView horizontal showsHorizontalScrollIndicator={false}>
              {product.images.map((image, index) => (
                <TouchableOpacity 
                  key={index} 
                  onPress={() => handleImagePress(image)}
                  style={[
                    styles.thumbnailContainer,
                    selectedImage === image && styles.selectedThumbnail
                  ]}
                >
                  <Image 
                    source={{ uri: image }} 
                    style={styles.thumbnailImage}
                    resizeMode="cover"
                  />
                </TouchableOpacity>
              ))}
            </ScrollView>
          </View>
        )}
        
        <TouchableOpacity 
          style={styles.addToCartButton}
          onPress={() => addToCart(product)}
        >
          <Text style={styles.addToCartButtonText}>Add to Cart</Text>
        </TouchableOpacity>
        
        <TouchableOpacity style={styles.backButton} onPress={onBack}>
          <Text style={styles.backButtonText}>Back to Products</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

// Add CartScreen component after ProductDetail component
const CartScreen = ({ onBack, cart, getTotalPrice, updateQuantity, removeFromCart }) => {
  return (
    <View style={styles.cartContainer}>
      <View style={styles.cartHeader}>
        <Text style={styles.cartTitle}>Shopping Cart</Text>
        <Text style={styles.cartTotal}>Total: ${getTotalPrice().toFixed(2)}</Text>
      </View>
      
      {cart.length === 0 ? (
        <View style={styles.emptyCart}>
          <Text style={styles.emptyCartText}>Your cart is empty</Text>
        </View>
      ) : (
        <FlatList
          data={cart}
          keyExtractor={item => item._id.$oid}
          renderItem={({ item }) => (
            <View style={styles.cartItem}>
              <Image 
                source={{ uri: item.main_image }} 
                style={styles.cartItemImage}
                resizeMode="cover"
              />
              <View style={styles.cartItemDetails}>
                <Text style={styles.cartItemName}>{item.names.en}</Text>
                <Text style={styles.cartItemPrice}>${item.price.toFixed(2)}</Text>
                <View style={styles.quantityControls}>
                  <TouchableOpacity 
                    style={styles.quantityButton}
                    onPress={() => updateQuantity(item._id.$oid, item.quantity - 1)}
                  >
                    <Text style={styles.quantityButtonText}>-</Text>
                  </TouchableOpacity>
                  <Text style={styles.quantityText}>{item.quantity}</Text>
                  <TouchableOpacity 
                    style={styles.quantityButton}
                    onPress={() => updateQuantity(item._id.$oid, item.quantity + 1)}
                  >
                    <Text style={styles.quantityButtonText}>+</Text>
                  </TouchableOpacity>
                </View>
              </View>
              <TouchableOpacity 
                style={styles.removeButton}
                onPress={() => removeFromCart(item._id.$oid)}
              >
                <Text style={styles.removeButtonText}>Remove</Text>
              </TouchableOpacity>
            </View>
          )}
        />
      )}
      
      <TouchableOpacity style={styles.backButton} onPress={onBack}>
        <Text style={styles.backButtonText}>Back to Products</Text>
      </TouchableOpacity>
    </View>
  );
};

// Main App Function
export default function App() {
  const [products, setProducts] = useState([]);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [cart, setCart] = useState([]);

  useEffect(() => {
    setProducts(productData);
  }, []);

  const addToCart = (product) => {
    setCart(prevCart => {
      const existingItem = prevCart.find(item => item._id.$oid === product._id.$oid);
      if (existingItem) {
        return prevCart.map(item => 
          item._id.$oid === product._id.$oid 
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }
      return [...prevCart, { ...product, quantity: 1 }];
    });
    Alert.alert('Success', 'Product added to cart!');
  };

  const removeFromCart = (productId) => {
    setCart(prevCart => prevCart.filter(item => item._id.$oid !== productId));
  };

  const updateQuantity = (productId, newQuantity) => {
    if (newQuantity < 1) {
      removeFromCart(productId);
      return;
    }
    setCart(prevCart => 
      prevCart.map(item => 
        item._id.$oid === productId 
          ? { ...item, quantity: newQuantity }
          : item
      )
    );
  };

  const getTotalItems = () => {
    return cart.reduce((total, item) => total + item.quantity, 0);
  };

  const getTotalPrice = () => {
    return cart.reduce((total, item) => total + (item.price * item.quantity), 0);
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" />
      {selectedProduct === 'cart' ? (
        <CartScreen 
          onBack={() => setSelectedProduct(null)} 
          cart={cart}
          getTotalPrice={getTotalPrice}
          updateQuantity={updateQuantity}
          removeFromCart={removeFromCart}
        />
      ) : selectedProduct ? (
        <ProductDetail 
          product={selectedProduct} 
          onBack={() => setSelectedProduct(null)} 
          addToCart={addToCart}
        />
      ) : (
        <>
          <View style={styles.header}>
            <Text style={styles.headerTitle}>Fashion Collection</Text>
            <TouchableOpacity 
              style={styles.cartIconContainer}
              onPress={() => setSelectedProduct('cart')}
            >
              <Text style={styles.cartIcon}>🛒</Text>
              {cart.length > 0 && (
                <View style={styles.cartBadge}>
                  <Text style={styles.cartBadgeText}>{getTotalItems()}</Text>
                </View>
              )}
            </TouchableOpacity>
          </View>
          <FlatList
            data={products}
            renderItem={({ item }) => (
              <ProductCard 
                product={item} 
                onPress={() => setSelectedProduct(item)} 
              />
            )}
            keyExtractor={item => item._id.$oid}
            contentContainerStyle={styles.productList}
          />
        </>
      )}
    </SafeAreaView>
  );
}

// Styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8f8f8',
  },
  header: {
    padding: 15,
    backgroundColor: '#2c3e50',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'white',
  },
  productList: {
    padding: 10,
  },
  card: {
    backgroundColor: 'white',
    borderRadius: 8,
    marginBottom: 15,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
    overflow: 'hidden',
  },
  productImage: {
    width: '100%',
    height: 200,
  },
  cardContent: {
    padding: 12,
  },
  brandName: {
    fontSize: 14,
    color: '#666',
    marginBottom: 4,
  },
  productName: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 6,
  },
  productPrice: {
    fontSize: 15,
    color: '#e74c3c',
    fontWeight: '600',
  },
  detailContainer: {
    flex: 1,
    backgroundColor: 'white',
  },
  detailImage: {
    width: '100%',
    height: 350,
  },
  detailContent: {
    padding: 15,
  },
  detailBrand: {
    fontSize: 16,
    color: '#666',
    marginBottom: 5,
  },
  detailName: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 12,
  },
  detailRow: {
    flexDirection: 'row',
    marginBottom: 8,
  },
  detailLabel: {
    fontSize: 14,
    fontWeight: 'bold',
    width: 100,
    color: '#555',
  },
  detailValue: {
    fontSize: 14,
    flex: 1,
    color: '#333',
  },
  detailPrice: {
    fontSize: 20,
    color: '#e74c3c',
    fontWeight: 'bold',
    marginVertical: 15,
  },
  productDetails: {
    marginTop: 20,
    borderTopWidth: 1,
    borderTopColor: '#eee',
    paddingTop: 15,
  },
  detailsSectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#2c3e50',
  },
  additionalImages: {
    marginTop: 20,
    borderTopWidth: 1,
    borderTopColor: '#eee',
    paddingTop: 15,
  },
  thumbnailContainer: {
    marginRight: 10,
    borderWidth: 2,
    borderColor: 'transparent',
    borderRadius: 5,
  },
  selectedThumbnail: {
    borderColor: '#2c3e50',
  },
  thumbnailImage: {
    width: 80,
    height: 80,
    borderRadius: 5,
  },
  backButton: {
    backgroundColor: '#2c3e50',
    padding: 15,
    borderRadius: 5,
    alignItems: 'center',
    marginTop: 25,
  },
  backButtonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
  addToCartButton: {
    backgroundColor: '#2c3e50',
    padding: 15,
    borderRadius: 5,
    marginTop: 20,
    alignItems: 'center',
  },
  addToCartButtonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
  cartIconContainer: {
    position: 'relative',
    padding: 10,
  },
  cartIcon: {
    fontSize: 24,
  },
  cartBadge: {
    position: 'absolute',
    top: 0,
    right: 0,
    backgroundColor: 'red',
    borderRadius: 10,
    minWidth: 20,
    height: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  cartBadgeText: {
    color: 'white',
    fontSize: 12,
    fontWeight: 'bold',
  },
  cartContainer: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  cartHeader: {
    padding: 15,
    backgroundColor: 'white',
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  },
  cartTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  cartTotal: {
    fontSize: 16,
    color: '#2c3e50',
  },
  cartItem: {
    flexDirection: 'row',
    padding: 15,
    backgroundColor: 'white',
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  },
  cartItemImage: {
    width: 80,
    height: 80,
    borderRadius: 5,
  },
  cartItemDetails: {
    flex: 1,
    marginLeft: 15,
  },
  cartItemName: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  cartItemPrice: {
    fontSize: 14,
    color: '#2c3e50',
    marginBottom: 10,
  },
  quantityControls: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  quantityButton: {
    backgroundColor: '#2c3e50',
    width: 30,
    height: 30,
    borderRadius: 15,
    justifyContent: 'center',
    alignItems: 'center',
  },
  quantityButtonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
  quantityText: {
    marginHorizontal: 15,
    fontSize: 16,
  },
  removeButton: {
    padding: 5,
  },
  removeButtonText: {
    color: 'red',
    fontSize: 14,
  },
  emptyCart: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  emptyCartText: {
    fontSize: 18,
    color: '#666',
  },
}); 