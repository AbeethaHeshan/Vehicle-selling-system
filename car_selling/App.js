import { View, Text } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from './Screens/Login/Login';
import CreateNew from './Screens/SignUp/CreateNew';
import VehicleDetails from './Screens/Vehicle manage/VehicleDetails';
import VehicleReg from './Screens/Vehicle manage/VehicleReg';

export default function App() {
  
  const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer>
       <Stack.Navigator>
        <Stack.Screen name="Login" component={Login}  options={{headerShown: false}} />
        <Stack.Screen name="createNew" component={CreateNew} />
        <Stack.Screen name="vhicleDetails" component={VehicleDetails}  options={{headerShown: false}} />
        <Stack.Screen name="vhicleReg" component={VehicleReg}  options={{headerShown: false}} />
      </Stack.Navigator>
    </NavigationContainer>
  )
} 
