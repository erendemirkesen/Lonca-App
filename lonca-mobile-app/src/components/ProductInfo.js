import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const ProductInfo = ({ product }) => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.brand}>{product.brand}</Text>
        <Text style={styles.name}>{product.name}</Text>
        <Text style={styles.price}>${product.price}</Text>
      </View>
      
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Product Information</Text>
        <View style={styles.infoRow}>
          <Text style={styles.infoLabel}>SKU:</Text>
          <Text style={styles.infoValue}>{product.sku}</Text>
        </View>
        <View style={styles.infoRow}>
          <Text style={styles.infoLabel}>Series:</Text>
          <Text style={styles.infoValue}>{product.series.name}</Text>
        </View>
      </View>
      
      {hasDetails(product.details) && (
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Product Details</Text>
          
          {product.details.fabric && (
            <View style={styles.infoRow}>
              <Text style={styles.infoLabel}>Fabric:</Text>
              <Text style={styles.infoValue}>{product.details.fabric}</Text>
            </View>
          )}
          
          {product.details.modelMeasurements && (
            <View style={styles.infoRow}>
              <Text style={styles.infoLabel}>Model Measurements:</Text>
              <Text style={styles.infoValue}>{product.details.modelMeasurements}</Text>
            </View>
          )}
          
          {product.details.productMeasurements && (
            <View style={styles.infoRow}>
              <Text style={styles.infoLabel}>Product Measurements:</Text>
              <Text style={styles.infoValue}>{product.details.productMeasurements}</Text>
            </View>
          )}
          
          {product.details.sampleSize && (
            <View style={styles.infoRow}>
              <Text style={styles.infoLabel}>Sample Size:</Text>
              <Text style={styles.infoValue}>{product.details.sampleSize}</Text>
            </View>
          )}
        </View>
      )}
    </View>
  );
};

// Helper function to check if the product has any details
const hasDetails = (details) => {
  return details.fabric || details.modelMeasurements || 
         details.productMeasurements || details.sampleSize;
};

const styles = StyleSheet.create({
  container: {
    padding: 16,
  },
  header: {
    marginBottom: 24,
  },
  brand: {
    fontSize: 16,
    color: '#666',
    marginBottom: 4,
  },
  name: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  price: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#000',
  },
  section: {
    marginBottom: 24,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: '600',
    marginBottom: 12,
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
    paddingBottom: 8,
  },
  infoRow: {
    flexDirection: 'row',
    marginBottom: 8,
  },
  infoLabel: {
    width: 150,
    fontSize: 14,
    color: '#666',
  },
  infoValue: {
    flex: 1,
    fontSize: 14,
  },
});

export default ProductInfo; 