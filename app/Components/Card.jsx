import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import React from 'react';
import { useNavigation } from '@react-navigation/native';

const Card = (props) => {
    const item = props.item || {};
    const { name, img, price, size } = item;

    const navigation = useNavigation();


    const handle = () => {
        // Passing the item data to BuyPage
        navigation.navigate("BuyPage", { item: item });
    };

    return (
        item ? (
            <View style={styles.cardContainer}>
                <View style={styles.infoContainer}>
                    <Image style={styles.img} source={{ uri: img }} />
                    <Text style={styles.name}>{name}</Text>
                    <View style={styles.detailsContainer}>
                        <Text style={styles.price}>${price}</Text>
                        <Text style={styles.size}>{size}</Text>
                    </View>
                    <TouchableOpacity style={styles.button} onPress={handle}>
                        <Text>Buy Now</Text>
                    </TouchableOpacity>
                </View>
            </View>
        ) : null
    );
};

const styles = StyleSheet.create({
    cardContainer: {
        backgroundColor: '#fff',
        padding: 30,
        margin: 10,
        borderRadius: 8,
        shadowColor: '#000',
        shadowOpacity: 0.1,
        shadowRadius: 4,
        shadowOffset: { width: 0, height: 2 },
        elevation: 2,
        alignItems: 'center',
    },
    infoContainer: {
        width: '100%',
        padding: 15,
        borderWidth: 1,
        borderColor: '#ddd',
        borderRadius: 8,
        marginBottom: 10,
        backgroundColor: '#f9f9f9',
    },
    img: {
        width: 200,
        height: 250,
        borderRadius: 8,
    },
    name: {
        fontSize: 16,
        fontWeight: 'bold',
        marginVertical: 5,
    },
    detailsContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '100%',
        marginTop: 5,
    },
    price: {
        fontSize: 14,
        color: '#333',
    },
    size: {
        fontSize: 14,
        color: '#666',
    },
    button: {
        backgroundColor: '#E85C0D',
        padding: 10,
        borderRadius: 8,
        width: '100%',
        alignItems: 'center',
        marginTop: 10,
    }
});

export default Card;
