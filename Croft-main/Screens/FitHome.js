import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import Foundation from 'react-native-vector-icons/Foundation';
import React, { useEffect } from 'react';
import Motivation from '../Components/Motivation';
import Steps from '../Components/Steps';
import Calories from '../Components/Calories';
import Navbar from '../Components/Nav';
import auth from '@react-native-firebase/auth'
import AsyncStorage from '@react-native-async-storage/async-storage';
import firestore from '@react-native-firebase/firestore';
import PushNotification from 'react-native-push-notification';

const FitHome = ({ navigation }) => {
  const [uid, setUid] = React.useState('');
  const [data, setdata] = React.useState('');
  const [calories, setCaloies] = React.useState('');

  const getCalories = async () => {
    const uid = auth().currentUser.uid
    firestore().collection("Users").doc(uid).onSnapshot((snapshot) => {
      const calories = snapshot.data().Calories
      setCaloies(calories)
    })
  }

  const pushNoti = () => {
    const uid = auth().currentUser.uid
    firestore().collection('Users').doc(uid).get()
      .then(docs => {
        const water = docs.data().Hydration
        console.log(water)
        if(water < 8){
          PushNotification.localNotification({
            channelId: 'Fitness-notifications',
            title: 'Hydration!!',
            message: "Don't forget to complete your water quota",
          });
        }
       })
  }

  useEffect(() => {
    PushNotification.createChannel(
      {
        channelId: 'Fitness-notifications',
        channelName: 'Fitness Notifications',
        channelDescription: 'Notifications for fitness events',
        importance: 4,
        vibrate: true,
      },
      (created) => {
        console.log('Fitness channel created');
      },
    );
    pushNoti()
    getCalories()
  }, []);

  return (
    <View style={styles.container}>
      <View style={styles.nav}>
        <Image source={require('../assets/dp.jpg')} style={styles.dp} />
        <View style={{ flexDirection: 'column', marginTop: 15 }}>
          <Text style={{ color: 'gray', fontWeight: '700' }}>Hello Jack!</Text>
          <Text style={{ color: 'black', fontWeight: '800', fontSize: 17 }}>
            Good learner
          </Text>
        </View>
      </View>
      <Motivation />
      <Text
        style={{
          marginLeft: 20,
          marginTop: 20,
          fontSize: 20,
          marginBottom: 20,
          fontWeight: 'bold',
          color: 'black',
        }}>
        Today's Goal
      </Text>
      <Calories Totcalories="800" Burntcalories={calories} />
      <Steps TotSteps="10000" FinishedSteps="3000" />
    </View>
  );
};

export default FitHome;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  nav: {
    marginTop: 30,
    flexDirection: 'row',
    height: '10%',
    justifyContent: 'flex-start',
    marginLeft: 10,
    marginBottom: 10,

    // backgroundColor:'black',
  },
  dp: {
    resizeMode: 'contain',
    height: '90%',
    width: '20%',
  },
});