import React from 'react';

import {NavigationContainer} from '@react-navigation/native';
// import { createStackNavigator } from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import Entypo from 'react-native-vector-icons/Entypo';
import Feather from 'react-native-vector-icons/Feather';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import EvilIcons from 'react-native-vector-icons/EvilIcons'


import FitHome from '../Screens/FitHome';
import WorkOut from '../Screens/WorkOut';
import WellBeing from '../Screens/WellBeing';
import Profile from '../Screens/Profile';

const Tab = createBottomTabNavigator();

const TabNAv = () => {
  return (
      <Tab.Navigator
      screenOptions={{
        tabBarShowLabel: false,
        tabBarActiveTintColor: '#00C1AD',
        tabBarStyle: {borderTopWidth: 0, elevation: 0},
      }}>
        <Tab.Screen name="Home" component={FitHome} options={{
        headerShown: false,
        tabBarIcon: ({color, size}) => (
          <Feather name="home" color={color} size={size} />
        ),
      }}/>
        <Tab.Screen name="Workout" component={WorkOut} options={{
        headerShown: false,
        tabBarIcon: ({color, size}) => (
          <MaterialCommunityIcons name="weight-lifter" color={color} size={size} />
        ),
      }}/>
        <Tab.Screen name="wellBeing" component={WellBeing} options={{
        headerShown: false,
        tabBarIcon: ({color, size}) => (
          <Entypo  name="moon" color={color} size={size} />
        ),
      }}/>
      <Tab.Screen name="Profile" component={Profile} options={{
        headerShown: false,
        tabBarIcon: ({color, size}) => (
          <EvilIcons  name="user" color={color} size={size} />
        ),
      }}/>
        {/* <Tab.Screen name="Home" component={FitHome} />                                                                                                         */}
      </Tab.Navigator>
  );
};

export default TabNAv;