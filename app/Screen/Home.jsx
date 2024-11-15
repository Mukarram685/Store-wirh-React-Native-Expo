import { View, Text, TextInput, Image, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import Category from "./Category";
import { useNavigation } from '@react-navigation/native';
import { setSearch } from '../Store/CartSlice';
import { useDispatch } from 'react-redux';

const Home = () => {

const navigation = useNavigation();
const handle = ()=>{
navigation.navigate("Cart");
}

const dispatch = useDispatch();

const handleSearch = (text) => {
  dispatch(setSearch(text));
 
}

   return (
    <View style={styles.container}>
      <View style={styles.searchContainer}>
        <Ionicons name="search" size={24} color="black" style={styles.icon} />
        <TextInput 
          style={styles.input} 
          placeholder='Search'  
          onChangeText={handleSearch}      
        />
        <Ionicons name="cart" size={24} color="black" style={styles.icon} onPress={handle} />
      </View>
      <Category />
    </View>
    
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
   
  
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 10,
    paddingHorizontal: 10,
    width: '100%', 
    backgroundColor: '#E85C0D',
  },
  input: {
    flex: 1, 
    height: 40,
    marginLeft: 10,
  },
  icon: {
    marginHorizontal: 5,
  },
});

export default Home;
