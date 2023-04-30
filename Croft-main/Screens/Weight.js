import {
  Image,
  StyleSheet,
  Text,
  TextInput,
  View,
  TouchableOpacity,
} from 'react-native';
import React, {useEffect} from 'react';

import AsyncStorage from '@react-native-async-storage/async-storage';
import firestore from '@react-native-firebase/firestore';

const Weight = ({navigation}) => {
  const storeData = async value => {
    try {
      await AsyncStorage.setItem('loggedin', value);
    } catch (e) {
      // saving error
    }
  };

  const [uid, setUid] = React.useState('');
  const [data, setData] = React.useState('');

  const getData = async () => {
    try {
      const value = await AsyncStorage.getItem('uid').then(value => {
        setUid(value);
      });
    } catch (e) {
      // error reading value
      console.log('Error');
    }
  };

  useEffect(() => {
    getData();
  }, []);

  const addProduct = async data => {
    try {
      await firestore().collection('Users').doc(uid).set(
        {
          weight: data,
          Calories: 0,
        },
        {merge: true},
      );
      storeData('true');
    } catch (error) {}
  };

  return (
    <View style={styles.container}>
      <View style={styles.st1}>
        <Text style={styles.st1txt}>Step 3</Text>
      </View>

      <View style={styles.wei}>
        <Text style={styles.weitxt}>What is your Weight?</Text>
      </View>

      <View style={styles.kg}>
        <Text style={styles.kgtxt}>In Meters</Text>
      </View>

      <View style={styles.imgview}>
        <Image source={require('../assets/Weight.jpg')} style={styles.img} />
      </View>
      <View style={styles.txtview}>
        <TextInput
          style={styles.txtinput}
          placeholder="Enter your Weight"
          textAlign="center"
          value={data}
          onChangeText={text => setData(text)}
        />
      </View>

      <View style={styles.btncontainer}>
        <TouchableOpacity
          onPress={() => {
            addProduct(data);
            navigation.navigate('TabNAv');
          }}
          style={styles.btn}>
          <Text>Next</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Weight;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  st1: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  st1txt: {
    marginTop: 30,
    fontSize: 20,
    color: '#D268CC',
  },
  wei: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  weitxt: {
    fontSize: 22,
    marginTop: 40,
  },
  kg: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  kgtxt: {
    marginTop: 15,
    fontWeight: 'bold',
  },
  imgview: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  img: {
    height: 400,
    width: 350,
    resizeMode: 'contain',
  },
  txtview: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  txtinput: {
    height: 40,
    width: 290,
    borderColor: '#D268CC',
    borderWidth: 0.5,
    borderRadius: 10,
    borderBottomColor: 'black',
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
    marginTop: 30,
    borderRadius: 10,
  },
});