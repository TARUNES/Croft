import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React, {useEffect} from 'react';

import AsyncStorage from '@react-native-async-storage/async-storage';

const GetStarted = ({navigation}) => {
  const getData = async () => {
    try {
      const value = await AsyncStorage.getItem('loggedin').then(value => {
        if (value === 'true') {
          console.log('in', value);
          navigation.navigate('TabNAv');
        }
      });
    } catch (e) {
      // error reading value
      console.log('Error', e.message);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.quote1}>Feel good in your own skin!!</Text>
        <Text style={styles.quote2}>We always want you to stay fit at</Text>
        <Text style={styles.quote3}>every stage of your life</Text>
      </View>

      <View style={styles.imgview}>
        <Image
          source={require('../assets/GetStarted.jpg')}
          style={styles.img}
        />
      </View>

      <View style={styles.btncontainer}>
        <TouchableOpacity
          onPress={() => navigation.navigate('FitSignup')}
          style={styles.btn}>
          <Text>GetStarted</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.footer}>
        <Text style={styles.ftxt1}>Already have account?</Text>
        <TouchableOpacity onPress={() => navigation.navigate('FitLogin')}>
          <Text style={styles.signin}>Login</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default GetStarted;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  header: {
    marginTop: 30,
    alignItems: 'center',
    justifyContent: 'center',
  },
  imgview: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  quote1: {
    marginTop: 20,
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 15,
  },
  quote2: {
    fontSize: 15,
    fontWeight: 'normal',
  },
  quote3: {
    fontSize: 15,
    fontWeight: 'normal',
  },
  img: {
    height: 400,
    width: 350,
    resizeMode: 'contain',
  },
  btncontainer: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  btn: {
    height: 40,
    width: 290,
    borderColor: '#D268CC',
    borderWidth: 0.5,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#D268CC',
    marginTop: 20,
    borderRadius: 10,
  },
  footer: {
    flexDirection: 'row',
    alignContent: 'center',
    justifyContent: 'center',
  },
  ftxt1: {
    //   marginLeft:75,
    marginTop: 30,
  },
  signin: {
    color: '#D268CC',
    marginTop: 30,
  },
});
