/**
 * INSTRUCTIONS FOR RUNNING THIS APP ON AN ANDROID EMULATOR:
 * 
 * 1. Install the Expo Go app on your Android emulator
 * 2. Run: npm install expo
 * 3. Run: npx expo start
 * 4. Press 'a' to open on Android emulator
 */

import React, { useState } from 'react';
import { StyleSheet, Text, View, FlatList, TouchableOpacity, Image, SafeAreaView } from 'react-native';

// Sample product data
const PRODUCTS = [
  {
    id: '1',
    brand: 'Lonca Collection',
    name: 'Cotton T-Shirt',
    price: 29.99,
    mainImage: 'https://via.placeholder.com/300',
    sku: 'LC001',
    series: 'Summer Collection',
    details: 'Comfortable cotton T-shirt perfect for everyday wear'
  },
  {
    id: '2',
    brand: 'Lonca Premium',
    name: 'Denim Jacket',
    price: 89.99,
    mainImage: 'https://via.placeholder.com/300',
    sku: 'LP002',
    series: 'Autumn Essentials',
    details: 'Classic denim jacket with premium finishing'
  },
  {
    id: '3',
    brand: 'Lonca Sport',
    name: 'Running Shorts',
    price: 39.99,
    mainImage: 'https://via.placeholder.com/300',
    sku: 'LS003',
    series: 'Athletic Line',
    details: 'Lightweight shorts perfect for running or gym'
  },
  {
    id: '4',
    brand: 'Lonca Luxe',
    name: 'Silk Blouse',
    price: 119.99,
    mainImage: 'https://via.placeholder.com/300',
    sku: 'LL004',
    series: 'Luxury Collection',
    details: 'Elegant silk blouse for special occasions'
  }
];

// Product Card Component
const ProductCard = ({ product, onPress }) => (
  <TouchableOpacity style={styles.card} onPress={onPress}>
    <Image 
      style={styles.thumbnail}
      source={{ uri: product.mainImage }}
    />
    <View style={styles.cardInfo}>
      <Text style={styles.brand}>{product.brand}</Text>
      <Text style={styles.name} numberOfLines={2}>{product.name}</Text>
      <Text style={styles.price}>${product.price}</Text>
    </View>
  </TouchableOpacity>
);

// Product Detail Component
const ProductDetail = ({ product, onBack }) => (
  <View style={styles.detailContainer}>
    <View style={styles.header}>
      <TouchableOpacity onPress={onBack}>
        <Text style={styles.backButton}>← Back</Text>
      </TouchableOpacity>
      <Text style={styles.headerTitle}>Product Details</Text>
    </View>
    
    <Image 
      style={styles.detailImage}
      source={{ uri: product.mainImage }}
    />
    
    <View style={styles.detailInfo}>
      <Text style={styles.detailBrand}>{product.brand}</Text>
      <Text style={styles.detailName}>{product.name}</Text>
      <Text style={styles.detailPrice}>${product.price}</Text>
      
      <View style={styles.infoRow}>
        <Text style={styles.label}>SKU:</Text>
        <Text>{product.sku}</Text>
      </View>
      
      <View style={styles.infoRow}>
        <Text style={styles.label}>Series:</Text>
        <Text>{product.series}</Text>
      </View>
      
      <View style={styles.detailSection}>
        <Text style={styles.detailSectionTitle}>Product Details</Text>
        <Text>{product.details}</Text>
      </View>
    </View>
  </View>
);

// Main App
export default function App() {
  const [selectedProduct, setSelectedProduct] = useState(null);
  
  const handleProductPress = (product) => {
    setSelectedProduct(product);
  };
  
  const handleBackPress = () => {
    setSelectedProduct(null);
  };
  
  return (
    <SafeAreaView style={styles.container}>
      {selectedProduct ? (
        <ProductDetail product={selectedProduct} onBack={handleBackPress} />
      ) : (
        <>
          <View style={styles.header}>
            <Text style={styles.headerTitle}>Lonca Products</Text>
          </View>
          <FlatList
            data={PRODUCTS}
            renderItem={({ item }) => (
              <ProductCard
                product={item}
                onPress={() => handleProductPress(item)}
              />
            )}
            keyExtractor={item => item.id}
            numColumns={2}
            contentContainerStyle={styles.productList}
          />
        </>
      )}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  header: {
    backgroundColor: '#fff',
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#e0e0e0',
    flexDirection: 'row',
    alignItems: 'center',
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    flex: 1,
    textAlign: 'center',
  },
  productList: {
    padding: 8,
  },
  card: {
    flex: 1,
    margin: 8,
    backgroundColor: '#fff',
    borderRadius: 8,
    overflow: 'hidden',
    elevation: 2,
  },
  thumbnail: {
    width: '100%',
    height: 150,
  },
  cardInfo: {
    padding: 12,
  },
  brand: {
    fontSize: 12,
    color: '#666',
  },
  name: {
    fontSize: 14,
    fontWeight: '500',
    marginVertical: 4,
  },
  price: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  backButton: {
    fontSize: 16,
    color: '#007AFF',
    marginRight: 16,
  },
  detailContainer: {
    flex: 1,
    backgroundColor: '#fff',
  },
  detailImage: {
    width: '100%',
    height: 300,
  },
  detailInfo: {
    padding: 16,
  },
  detailBrand: {
    fontSize: 14,
    color: '#666',
  },
  detailName: {
    fontSize: 20,
    fontWeight: 'bold',
    marginVertical: 4,
  },
  detailPrice: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#000',
    marginBottom: 16,
  },
  infoRow: {
    flexDirection: 'row',
    marginBottom: 8,
  },
  label: {
    width: 80,
    fontWeight: '500',
  },
  detailSection: {
    marginTop: 16,
  },
  detailSectionTitle: {
    fontSize: 16,
    fontWeight: '600',
    marginBottom: 8,
    borderBottomWidth: 1,
    borderBottomColor: '#e0e0e0',
    paddingBottom: 4,
  },
}); 