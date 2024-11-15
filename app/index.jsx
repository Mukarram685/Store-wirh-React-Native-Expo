import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import store from './Store/Store';
import { Provider } from 'react-redux';
import Home from './Screen/Home';
import BuyPage from './Components/BuyPage';
import Cart from './Screen/Cart';
import Screen1 from './Screen1';
import Screen2 from './Screen2';
import Screen3 from './Screen3';
import Signup from './Components/Signup';
const Stack = createStackNavigator();
import { enableScreens } from 'react-native-screens';
enableScreens();

export default function App() {
  return (
    <Provider store={store}>
      <Stack.Navigator initialRouteName="Home"    screenOptions={{
        headerShown: false, 
      }} >
        <Stack.Screen
          name="Home"
          // component={Screen1}
          component={Signup}
          options={{ headerShown: false }}
        />
          <Stack.Screen
          name="Screen2"
          component={React.lazy(() => import('./Screen2'))} // Lazy load Screen2}
        />
         <Stack.Screen
          name="Screen3"
          component={Screen3}
        />
        <Stack.Screen
          name="BuyPage"
          component={BuyPage}
        />
        <Stack.Screen
          name="Cart"
          component={Cart}
        />
       
      </Stack.Navigator>

    </Provider>

  );
}


