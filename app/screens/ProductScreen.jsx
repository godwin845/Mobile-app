import React, { useState } from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet, FlatList } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { add } from '../store/cartSlice'; // Update import based on your project structure

const Product = () => {
  const products = useSelector(state => state.products.data);
  const dispatch = useDispatch();

  const addToCart = (product) => {
    dispatch(add(product));
  };

  if (!products) {
    return <Text style={styles.loadingText}>Loading...</Text>;
  }

  console.log('Product IDs:', products.map(product => product.id)); // Log IDs to check for duplicates

  return (
    <View style={styles.productContainer}>
      <Text style={styles.heading}>Our <Text style={styles.highlight}>Products</Text></Text>
      <FlatList
        data={products}
        renderItem={({ item }) => <ProductCard product={item} addToCart={addToCart} />}
        keyExtractor={item => item.id.toString()}
        numColumns={2}
      />
    </View>
  );
};


const ProductCard = ({ product, addToCart }) => {
  const [pressed, setPressed] = useState(false);
  const imageUri = typeof product.image === 'string' ? product.image : 'https://example.com/fallback-image.png'; // Handle invalid image URIs

  return (
    <TouchableOpacity
      onPress={() => addToCart(product)}
      onPressIn={() => setPressed(true)}
      onPressOut={() => setPressed(false)}
      style={[
        styles.card,
        pressed && styles.cardPressed, // Apply styles when pressed
      ]}
    >
      <Image source={{ uri: imageUri }} style={styles.image} />
      <View style={styles.cardBody}>
        <Text style={styles.title}>{product.name}</Text>
        <Text>₹: {product.price}</Text>
        <TouchableOpacity style={styles.button} onPress={() => addToCart(product)}>
          <Text style={styles.buttonText}>Add To Cart</Text>
        </TouchableOpacity>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  productContainer: {
    padding: 20,
    backgroundColor: 'black',
  },
  heading: {
    fontSize: 24,
    color: 'white',
    marginBottom: 20,
    textAlign: 'center',
  },
  highlight: {
    color: '#FF5B61',
  },
  loadingText: {
    color: 'white',
    textAlign: 'center',
    marginTop: 20,
  },
  card: {
    flex: 1,
    margin: 10,
    borderRadius: 20,
    backgroundColor: '#fff',
    overflow: 'hidden',
    elevation: 5, // for shadow on Android
  },
  cardPressed: {
    transform: [{ scale: 0.98 }], // Slightly scale down the card
    elevation: 8, // Increase elevation to simulate shadow effect
  },
  image: {
    width: '100%',
    height: 150,
  },
  cardBody: {
    padding: 10,
    alignItems: 'center',
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  button: {
    backgroundColor: '#FF5B61',
    padding: 10,
    borderRadius: 5,
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
});

export default Product;
