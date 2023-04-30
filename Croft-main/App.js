import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import FitSignup from './Screens/FitSignup';
import FitLogin from './Screens/FitLogin';
import FitHome from './Screens/FitHome';
import GetStarted from './Screens/FitGetStarted';
import Gender from './Screens/Gender';
import Weight from './Screens/Weight';
import Height from './Screens/Height';
import Motivation from './Components/Motivation';
import StopWatch from './Components/stopwatch';
import Calories from './Components/Calories';
import TabNAv from './routes/Tabnav';

import WorkOut from './Screens/WorkOut';
import WellBeing from './Screens/WellBeing';
import Profile from './Screens/Profile';
import Exercise from './Components/Exercise';
import Exercises from './Screens/Exercises';
import Timer from './Components/Timer';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="GetStarted">
        <Stack.Screen
          name="FitSignup"
          component={FitSignup}
          options={{title: 'Welcome Back', headerShown: false}}
        />
        <Stack.Screen
          name="FitLogin"
          component={FitLogin}
          options={{title: 'Welcome', headerShown: false}}
        />
        <Stack.Screen
          name="Home"
          component={FitHome}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="GetStarted"
          component={GetStarted}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Gender"
          component={Gender}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Weight"
          component={Weight}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Height"
          component={Height}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Workout"
          component={WorkOut}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="WellBeing"
          component={WellBeing}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="TabNAv"
          component={TabNAv}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="profile"
          component={Profile}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Exercises"
          component={Exercises}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Exercise"
          component={Exercise}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Timer"
          component={Timer}
          options={{headerShown: true}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;

const styles = StyleSheet.create({});
