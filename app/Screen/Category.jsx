import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import React from 'react';
import data from '../Data/data';
import Items from '../Components/items';
import { useDispatch } from 'react-redux';
import { setCategory } from '../Store/CartSlice';

const Category = () => {
    // Get unique categories from data
    const categoryItems = Array.from(new Set(data.map((item) => item.category)));

    const dispatch = useDispatch();

    // Dispatch category selection to Redux
    const handleCategory = (category) => {
        dispatch(setCategory(category));
        console.log(category);
    };


    return (
        <View style={style.CategoryView}>
            <View style={style.CategoryContainer}>
                {categoryItems.map((category) => (
                    <TouchableOpacity
                        key={category}
                        style={
                            style.categoryItem
                        }
                        onPress={() => handleCategory(category.toLowerCase())}
                    >
                        <Text>{category}</Text>
                    </TouchableOpacity>
                ))}
            </View>
            <Items />
        </View>
    );
};

const style = StyleSheet.create({
    CategoryView: {
        width: '100%',
        paddingBottom: 10,
        marginTop: 10,
        borderRadius: 20,
     
    },
    CategoryContainer: {
        flexDirection: 'row',
        gap: 10,
        justifyContent: 'space-between',
        marginHorizontal: 20,
        paddingTop: 10,
        marginBottom: 10,
    },
    categoryItem: {
        backgroundColor: '#E85C0D',
        padding: 10,
        borderRadius: 20,
        paddingHorizontal: 15,
    },
    selectedCategoryItem: {
        backgroundColor: '#FF8000', // Highlight for selected category
    },
});

export default Category;
