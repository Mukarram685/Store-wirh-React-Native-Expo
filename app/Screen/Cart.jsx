import React from 'react';
import { View, Text, StyleSheet, FlatList, Image, TouchableOpacity } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { removeFromCart } from '../Store/CartSlice';
import {  } from 'react-redux';

const Cart = () => {
  // Access cart items from Redux store
  const cartItems = useSelector(state => state.cart.items);
  const dispatch = useDispatch();           // for functions 
// const log=()=>{
// cartItems.forEach(element => {
//   console.log(element);
  
// });
// }
// log();

  const handleRemoveFromCart = (item) => {
    dispatch(removeFromCart(item));
  };
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Cart</Text>
      {cartItems.length > 0 ? (
        <FlatList
          data={cartItems}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({ item }) => (
            <View style={styles.cartItem}>
              <Image source={{ uri: item.img }} style={styles.image} />
              <View style={styles.details}>
                <Text style={styles.name}>{item.name}</Text>
                <Text style={styles.price}>${item.price} * {item.quantity} = ${(item.price * item.quantity).toFixed(2)}</Text>
                <View style={styles.QuantityRemoveContainer}>
                  <Text>Quantity: {item.quantity}</Text>
                  <TouchableOpacity style={styles.removeButton} onPress={() => handleRemoveFromCart(item)}><Text>Remove</Text></TouchableOpacity>
                </View> 
              </View>
            </View>
          )}
        />
      ) : (
        <Text style={styles.emptyText}>Your cart is empty</Text>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#FFF',
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  cartItem: {
    flexDirection: 'row',
    padding: 10,
    marginVertical: 5,
    backgroundColor: '#f9f9f9',
    borderRadius: 8,
    alignItems: 'center',
  },
  image: {
    width: 60,
    height: 60,
    borderRadius: 8,
    marginRight: 10,
  },
  details: {
    flex: 1,
  },
  name: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  price: {
    fontSize: 14,
    color: '#333',
  },
  QuantityRemoveContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 10

  },
  removeButton: {
    backgroundColor: '#E85C0D',
    padding: 10,
    borderRadius: 8,
  },
  emptyText: {
    textAlign: 'center',
    fontSize: 18,
    color: '#555',
    marginTop: 20,
  },
});

export default Cart;
