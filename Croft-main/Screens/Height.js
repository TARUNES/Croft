import React, {useEffect} from 'react';
import {
  Image,
  StyleSheet,
  Text,
  TextInput,
  View,
  TouchableOpacity,
} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import firestore from '@react-native-firebase/firestore';

const Height = ({navigation}) => {
  const [uid, setUid] = React.useState('');
  const [data, setData] = React.useState('');

  const getData = async () => {
    try {
      const value = await AsyncStorage.getItem('uid').then(value => {
        setUid(value);
      });
    } catch (e) {
      // error reading value
      console.log(e);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  const addProduct = async data => {
    try {
      await firestore().collection('Users').doc(uid).set(
        {
          height: data,

        },
        {merge: true},
      );
      console.log('Value Added!');
    } catch (error) {}
  };

  return (
    <View style={styles.container}>
      <View style={styles.st1}>
        <Text style={styles.st1txt}>Step 2</Text>
      </View>

      <View style={styles.Hei}>
        <Text style={styles.Heitxt}>What is your Height?</Text>
      </View>

      <View style={styles.meter}>
        <Text style={styles.metertxt}>In eters</Text>
      </View>

      <View style={styles.imgview}>
        <Image source={require('../assets/Height.jpg')} style={styles.img} />
      </View>
      <View style={styles.txtview}>
        <TextInput
          style={styles.txtinput}
          placeholder="Enter your height"
          textAlign="center"
          value={data}
          onChangeText={text => setData(text)}
        />
      </View>

      <View style={styles.btncontainer}>
        <TouchableOpacity
          onPress={() => {
            addProduct(data);
            navigation.navigate('Weight');
          }}
          style={styles.btn}>
          <Text>Next</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Height;

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
  Hei: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  Heitxt: {
    fontSize: 22,
    marginTop: 40,
  },
  meter: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  metertxt: {
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
