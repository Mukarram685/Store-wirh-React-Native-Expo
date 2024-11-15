import { createSlice } from '@reduxjs/toolkit';

const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    items: [],  // Contains all the cart items
    search: '',
    selectCategory: '',
  },
  reducers: {
    addToCart: (state, action) => {
      const existingItem = state.items.find(item => item.name === action.payload.name);
      if (existingItem) {
        // Increase quantity if item already exists
        // console.log("Existing item contains : ",existingItem);
        existingItem.quantity += action.payload.quantity;
        existingItem.price = parseFloat((existingItem.price * existingItem.quantity).toFixed(2));

      } else {
        const newItem = {
          ...action.payload,
          price: parseFloat((action.payload.price * 1).toFixed(2)), // Calculate total price
        };
        state.items.push(newItem);
      }
    },

    removeFromCart: (state, action) => {
      state.items = state.items.filter(item => item.name !== action.payload.name);
    },

    incrementQuantity: (state, action) => {
      const item = state.items.find(item => item.name === action.payload.name);
      if (item) {
        item.quantity++;  // Increase quantity
        item.totalPrice = parseFloat((item.price * item.quantity).toFixed(2));  // Update total price
      }

    },

    decrementQuantity: (state, action) => {
      const item = state.items.find(item => item.name === action.payload.name);
      if (item && item.quantity > 1) {
        item.quantity--;  // Decrease quantity
        item.totalPrice = parseFloat((item.price * item.quantity).toFixed(2));  // Update total price
      }

    },

    // This can be used to calculate total by quantity changes
    pricebyquantity: (state) => {
      state.total = state.items.reduce((acc, item) => acc + item.totalPrice, 0);  // Recalculate total price
    },
    setQuantityStore: (state, action) => {
      let temp = action.payload;


      const { id, quantity } = temp;
      console.log(id, quantity);


      const items = state.items.find(item => item.id === id);
      console.log(items);

      if (items) {
        items.quantity = quantity;
      }
    },
    setSearch: (state, action) => {
      state.search = action.payload;
    },
    setCategory: (state, action) => {
      state.selectCategory = action.payload;
    }

  },
});

export const { addToCart, removeFromCart, incrementQuantity, decrementQuantity, pricebyquantity, setQuantityStore,setCategory, setSearch } = cartSlice.actions;
export default cartSlice.reducer;



// import { createSlice } from '@reduxjs/toolkit';
// const cartSlice = createSlice({
//   name: 'cart',
//   initialState : {
//     items: [],
//     quantity: 0,
//     total: 0
//   },
//   reducers: {
//     addToCart: (state, action) => {
//         state.items.push(action.payload);
// },
//     removeFromCart: (state, action) => {
//       state.items = state.items.filter(item => item.name !== action.payload.name);
//     },
//     incrementQuantity: (state, action) => {
//       const item = state.items.find(item => item.name === action.payload.name);
//       item.quantity++;
//     },
//   },
// });

// export const { addToCart, removeFromCart, incrementQuantity } = cartSlice.actions;

// export default cartSlice.reducer;


