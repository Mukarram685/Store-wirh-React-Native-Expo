import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { useEffect, useState } from 'react';
import React from 'react';
import { addToCart, incrementQuantity, decrementQuantity, pricebyquantity, setQuantityStore } from '../Store/CartSlice';
import { useDispatch, useSelector } from 'react-redux';

const BuyPage = ({ route }) => {
    const { item } = route.params || {};
    // console.log("Buy now page item",item);

    const { name, img, price, size, description, reviews } = item || {};
    const cartItem = { ...item, quantity };

    const dispatch = useDispatch();
    // const Price = useSelector(state => state.cart.price);
    const [quantity, setQuantity] = useState(1);

    const handleAddToCart = () => {
        dispatch(addToCart(cartItem));
        console.log(cartItem);

    }
    useEffect(() => {
        cartItem.quantity = quantity;
        console.log(cartItem.quantity);

    }, [quantity])
    const AddLocalQuantity = () => {
        setQuantity(prevQuantity => prevQuantity + 1);
    }
    const SubtractLocalQuantity = () => {
        if (quantity > 1) {
            setQuantity(prevQuantity => prevQuantity - 1);
        }
    }

    // const handleQuantityAdd = () => {
    //     dispatch(incrementQuantity(item));
    // }
    // const handleQuantitySubtract = () => {
    //     dispatch(decrementQuantity(item));
    // }

    // const handlePriceByQuantity = () => {
    //     dispatch(pricebyquantity(item));
    // }

    // const updatePriceAndQuantity = (increment = true) => {
    // if (increment) {
    //     dispatch(incrementQuantity(item));
    // }

    // else {
    //     dispatch(decrementQuantity(item));
    // }


    //     dispatch(pricebyquantity(item));
    //   };

    return (
        <View style={styles.container}>
            {item ? (
                <>
                    <View style={styles.imgContainer}>
                        <Image source={{ uri: img }} style={styles.img} />
                    </View>

                    <View style={styles.detailsContainer}>
                        <Text style={styles.name}>{name}</Text>
                        <View style={styles.reviewsContainer}>
                            <Text style={styles.size}>${size}</Text>
                            <Text style={styles.reviews}>Reviews: {reviews}</Text>
                        </View>
                    </View>
                    <View style={styles.line}></View>

                    <View style={styles.descriptionContainer}>
                        <Text style={styles.desHeading}>Product Description:</Text>
                        <Text style={styles.description}>{description}</Text>
                    </View>

                    <View style={styles.cartContainer}>
                        <Text style={styles.price}>${price * quantity}</Text>
                        <View style={styles.quantityHandler}>
                            <TouchableOpacity style={styles.quantityButton} onPress={() => SubtractLocalQuantity()}>
                                <Text style={styles.buttonText}>-</Text>
                            </TouchableOpacity>
                            <Text style={styles.quantity}>{quantity}</Text>
                            <TouchableOpacity style={styles.quantityButton} onPress={() => AddLocalQuantity()}>
                                <Text style={styles.buttonText}>+</Text>
                            </TouchableOpacity>
                        </View>
                        <TouchableOpacity style={styles.cartButton} onPress={handleAddToCart}>
                            <Text style={styles.cartButtonText}> Cart+ </Text>
                        </TouchableOpacity>
                    </View>
                </>
            ) : (
                <Text style={styles.noItemText}>No item found!</Text>
            )}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 10,
        paddingTop: 30,
        paddingHorizontal: 10,
        margin: 10,
    },
    imgContainer: {
        marginBottom: 20,
        alignItems: 'center',
        backgroundColor: 'white',
        borderRadius: 10,
    },
    img: {
        width: 300,
        height: 300,
        borderRadius: 10,
    },
    detailsContainer: {
        marginBottom: 20,
        alignItems: 'center',
        width: '100%',
        backgroundColor: 'white',
        padding: 10,
        borderRadius: 10,
    },
    name: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 10,
    },
    reviewsContainer: {
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    reviews: {
        fontSize: 18,
        color: '#555',
    },
    size: {
        fontSize: 18,
        color: '#555',
    },
    line: {
        height: 3,
        width: '100%',
        backgroundColor: 'white',
        borderRadius: 10,
    },
    descriptionContainer: {
        paddingHorizontal: 10,
        marginTop: 2,
        width: '100%',
        borderRadius: 10,
    },
    desHeading: {
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 10,
    },
    description: {
        fontSize: 16,
        color: '#333',
        textAlign: 'center',
        lineHeight: 24,
    },
    cartContainer: {
        marginTop: 20,
        padding: 20,
        backgroundColor: '#FFA500', // Orange background
        borderRadius: 15,
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    price: {
        fontSize: 20,
        fontWeight: 'bold',
        color: 'white',
        marginBottom: 10,
    },
    quantityHandler: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        backgroundColor: '#f0f0f0',
        borderRadius: 5,
        padding: 5,
        width: 100,
    },
    quantityButton: {
        backgroundColor: '#f0f0f0',
        borderRadius: 5,
        padding: 5,
        // width: 30,
        alignItems: 'center',
        justifyContent: 'center',
    },
    buttonText: {
        fontSize: 22,
        fontWeight: 'bold',

    },
    quantity: {
        fontSize: 16,
        fontWeight: 'bold',
        marginHorizontal: 10,
    },
    quantity: {
        fontSize: 18,
        color: '#333',
        fontWeight: 'bold',
    },
    cartButton: {
        marginTop: 10,
        padding: 10,
        backgroundColor: '#333',
        borderRadius: 10,
    },
    cartButtonText: {
        color: 'white',
        fontSize: 18,
        fontWeight: 'bold',
    },
    noItemText: {
        fontSize: 18,
        color: 'red',
        textAlign: 'center',
    },
});

export default BuyPage;
