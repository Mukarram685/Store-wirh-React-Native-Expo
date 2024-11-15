import { View, StyleSheet, ScrollView } from 'react-native';
import React from 'react';
import data from '../Data/data';
import Card from './Card';
import { setCategory } from '../Store/CartSlice';
import { useSelector } from 'react-redux';

const Items = () => {
// const category= props.Categoryitems.category;
// console.log(category);

const searchItem = useSelector((state) => state.cart.search);
const selectedCategory = useSelector((state) => state.cart.selectCategory);


const filterdata = data
.filter((item)=> item.name.toLowerCase().includes(searchItem.toLowerCase()))
.filter((item)=> item.category.toLowerCase().includes(selectedCategory))

   return (
    <ScrollView contentContainerStyle={style.itemsContainer}>
      {filterdata.map((item) => (
        <Card key={item.id} item={item}  />
      ))}
    </ScrollView>
  );
};

const style = StyleSheet.create({
  itemsContainer: {
    paddingBottom: 10, 
    paddingHorizontal: 10, 
  },
});

export default Items;
