import React, { useState } from 'react';
import { StyleSheet, Text, View, FlatList, TouchableOpacity, Image, ScrollView, SafeAreaView, StatusBar } from 'react-native';

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
const ProductDetail = ({ product, onBack }) => {
  return (
    <ScrollView style={styles.detailContainer}>
      {/* Main Image */}
      <Image 
        source={{ uri: product.main_image }} 
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
        
        {/* Additional Images */}
        {product.images && product.images.length > 1 && (
          <View style={styles.additionalImages}>
            <Text style={styles.detailsSectionTitle}>More Images</Text>
            <ScrollView horizontal showsHorizontalScrollIndicator={false}>
              {product.images.map((image, index) => (
                <Image 
                  key={index} 
                  source={{ uri: image }} 
                  style={styles.thumbnailImage}
                  resizeMode="cover"
                />
              ))}
            </ScrollView>
          </View>
        )}
        
        <TouchableOpacity style={styles.backButton} onPress={onBack}>
          <Text style={styles.backButtonText}>Back to Products</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

// Main App Function
export default function App() {
  const [selectedProduct, setSelectedProduct] = useState(null);

  const handleProductPress = (product) => {
    setSelectedProduct(product);
  };

  const handleBack = () => {
    setSelectedProduct(null);
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" />
      {selectedProduct ? (
        <ProductDetail product={selectedProduct} onBack={handleBack} />
      ) : (
        <>
          <View style={styles.header}>
            <Text style={styles.headerTitle}>Fashion Collection</Text>
          </View>
          <FlatList
            data={productData}
            renderItem={({ item }) => (
              <ProductCard 
                product={item} 
                onPress={() => handleProductPress(item)} 
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
  thumbnailImage: {
    width: 100,
    height: 100,
    marginRight: 10,
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
}); 