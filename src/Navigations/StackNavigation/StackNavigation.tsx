import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {RouteName} from '../../Config/Common';
import Splash from '../../Screens/Splash/Splash';
import Login from '../../Screens/Login/Login';
import Signup from '../../Screens/Signup/Signup';
import BottomNavigation from '../BottomNavigation/BottomNavigation';

const StackNavigation = () => {
  const Stack = createNativeStackNavigator();
  return (
    <Stack.Navigator>
      <Stack.Screen name={RouteName.SPLASH} component={Splash} />
      <Stack.Screen name={RouteName.LOGIN} component={Login} />
      <Stack.Screen name={RouteName.SIGNUP} component={Signup} />
      <Stack.Screen name={RouteName.BOTTOM} component={BottomNavigation} />
    </Stack.Navigator>
  );
};

export default StackNavigation;
