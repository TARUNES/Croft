import React, {useEffect} from 'react';
import {
  Dimensions,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  SafeAreaView,
} from 'react-native';

const Height = Dimensions.get('window').height;
const Width = Dimensions.get('window').width;

import AsyncStorage from '@react-native-async-storage/async-storage';
import firestore from '@react-native-firebase/firestore';

const Gender = ({navigation}) => {
  const [uid, setUid] = React.useState('');

  const getData = async () => {
    try {
      const value = await AsyncStorage.getItem('uid').then(value => {
        setUid(value);
      });
    } catch (e) {
      // error reading value
      console.log('Error', e.message);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  const addProduct = async data => {
    console.log(uid);
    try {
      await firestore()
        .collection('Users')
        .doc(uid)
        .set(
          {
            gender: data,
          },
          {merge: true},
        )
        .then(() => {
          console.log('Value Added!');
        });
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <Text
        style={{
          color: '#d268cc',
          fontSize: 18,
          fontWeight: 'bold',
          opacity: 0.9,
          alignSelf: 'center',
        }}>
        Step 1
      </Text>
      <Text style={styles.enter_txt}>Let us know who you are?</Text>
      <TouchableOpacity
        onPress={() => {
          addProduct('Female');
          navigation.navigate('Height');
        }}>
        <Text style={styles.gender}>Female</Text>
        <Image
          source={require('../assets/Women.jpeg')}
          resizeMode="cover"
          style={styles.illu}></Image>
      </TouchableOpacity>
      <Text> </Text>
      <TouchableOpacity
        onPress={() => {
          addProduct('Male');
          navigation.navigate('Height');
        }}>
        <Text style={styles.gender}>Male</Text>
        <Image
          source={require('../assets/Men.jpeg')}
          resizeMode="stretch"
          style={styles.illu2}></Image>
      </TouchableOpacity>
      <TouchableOpacity
        style={{alignSelf: 'center', marginTop: 30}}
        onPress={() => navigation.navigate('Home')}>
        <Text
          style={{
            color: '#d268cc',
            fontSize: 18,
            fontWeight: 'bold',
            opacity: 0.9,
            marginTop: 20,
          }}>
          Skip Now
        </Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    height: Height,
    width: Width,
    padding: 14,
  },
  enter_txt: {
    color: 'black',
    fontSize: 25,
    fontWeight: '900',
    marginTop: 20,
    textAlign: 'center',
    width: 190,
    alignSelf: 'center',
    marginBottom: 10,
  },
  illu: {
    height: 240,
    width: '100%',
    alignSelf: 'center',
    borderRadius: 15,
  },
  illu2: {
    height: 240,
    width: '100%',
    alignSelf: 'center',
    borderRadius: 15,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
  },
  gender: {
    color: 'black',
    top: 35,
    zIndex: 1,
    marginLeft: 15,
    backgroundColor: 'rgba(255, 255, 255,0.5)',
    width: 80,
    borderRadius: 20,
    textAlign: 'center',
    fontWeight: '700',
  },
});

export default Gender;
