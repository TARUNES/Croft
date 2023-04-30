import {ScrollView, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Exercise from '../Components/Exercise';

const Exercises = ({navigation}) => {
  return (
    <ScrollView style={{}}>
      <Text
        style={{
          alignSelf: 'center',
          fontSize: 30,
          color: 'black',
          fontWeight: 'bold',
          marginTop: 10,
        }}>
        Maintain Form
      </Text>
      <Exercise
        name="Plank"
        img={require('../assets/plank.png')}
        onPress={() => navigation.navigate('Timer')}
      />
      <Exercise
        name="Vhold"
        img={require('../assets/Vhold.png')}
        onPress={() => navigation.navigate('Timer')}
      />
      <Exercise
        name="Crunch"
        img={require('../assets/crunch.png')}
        onPress={() => navigation.navigate('Timer')}
      />
      <Exercise
        name="Bicycle-Crunch"
        img={require('../assets/bicycle.png')}
        onPress={() => navigation.navigate('Timer')}
      />
      <Exercise
        name="Airwalk"
        img={require('../assets/airwalk.png')}
        onPress={() => navigation.navigate('Timer')}
      />
    </ScrollView>
  );
};

export default Exercises;

const styles = StyleSheet.create({});
