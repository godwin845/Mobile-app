import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet, FlatList } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { remove } from '../store/cartSlice'; // Adjust based on your project structure

const Cart = () => {
  const products = useSelector(state => state.cart);
  const dispatch = useDispatch();

  const removeFromCart = (id) => {
    dispatch(remove(id));
  };

  if (!products) {
    return <Text style={styles.loadingText}>Loading...</Text>;
  }

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>My <Text style={styles.highlight}>Cart</Text></Text>
      <FlatList
        data={products}
        renderItem={({ item }) => <CartItem product={item} removeFromCart={removeFromCart} />}
        keyExtractor={item => item.id.toString()}
        numColumns={2}
      />
    </View>
  );
};

const CartItem = ({ product, removeFromCart }) => {
  const imageUri = typeof product.image === 'string' ? product.image : 'https://example.com/fallback-image.png';

  return (
    <View style={styles.card}>
      <Image source={{ uri: imageUri }} style={styles.image} />
      <View style={styles.cardBody}>
        <Text style={styles.title}>{product.name}</Text>
        <Text>₹: {product.price}</Text>
        <TouchableOpacity style={styles.button} onPress={() => removeFromCart(product.id)}>
          <Text style={styles.buttonText}>Remove Item</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
    padding: 20,
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
    elevation: 5, // Shadow on Android
    overflow: 'hidden',
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

export default Cart;
