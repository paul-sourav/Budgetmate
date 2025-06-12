import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {RouteName} from '../../Config/Common';
import Home from '../../Screens/Home/Home';
import Tansections from '../../Screens/Transections/Transection';
import Reports from '../../Screens/Reports/Reports';
import Account from '../../Screens/Account/Account';
import Ionicons from 'react-native-vector-icons/Ionicons';

const BottomTab = createBottomTabNavigator();
const BottomNavigation = () => {
  return (
    <BottomTab.Navigator screenOptions={{headerShown: false}}>
      <BottomTab.Screen
        name={RouteName.HOME}
        component={Home}
        options={{
          tabBarIcon: ({focused}) => (
            <Ionicons name={!focused ? 'home-outline' : 'home'} size={24} />
          ),
        }}
      />
      <BottomTab.Screen
        name={RouteName.TRANSECTIONS}
        component={Tansections}
        options={{
          tabBarIcon: ({focused}) => (
            <Ionicons
              name={!focused ? 'list-outline' : 'list-circle'}
              size={24}
            />
          ),
        }}
      />
      <BottomTab.Screen
        name={RouteName.REPORTS}
        component={Reports}
        options={{
          tabBarIcon: ({focused}) => (
            <Ionicons
              name={!focused ? 'bar-chart-outline' : 'bar-chart'}
              size={24}
            />
          ),
        }}
      />
      <BottomTab.Screen
        name={RouteName.ACCOUNT}
        component={Account}
        options={{
          tabBarIcon: ({focused}) => (
            <Ionicons name={!focused ? 'person-outline' : 'person'} size={24} />
          ),
        }}
      />
    </BottomTab.Navigator>
  );
};

export default BottomNavigation;
