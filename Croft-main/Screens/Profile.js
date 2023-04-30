import React,{useEffect}from 'react';
import {
  Image,
  StyleSheet,
  Text,
  Touchable,
  TouchableOpacity,
  useWindowDimensions,
  View,
} from 'react-native';
import auth from '@react-native-firebase/auth'
import firestore from '@react-native-firebase/firestore';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Profile = ({navigation}) => {
  const storeData = async value => {
    try {
      await AsyncStorage.setItem('loggedin', value);
    } catch (e) {
      // saving error
    }
  };

  const [uid, setUid] = React.useState('');
  const [data, setdata] = React.useState('');
  const [height,setHeight] = React.useState('')
  const [weight,setWeight] = React.useState('')
  const [Water,setWater] = React.useState('')
  const [Sleep,setSleep] = React.useState('')
  

  const getData = async () => {
    const uid = auth().currentUser.uid
    firestore().collection("Users").doc(uid).onSnapshot((snapshot) => {
      console.log(snapshot.data())
      const height = snapshot.data().height
      const weight = snapshot.data().weight
      const sleep = snapshot.data().Sleep
      const water = (snapshot.data().Hydration/8)*100

      setHeight(height)
      setWeight(weight)
      setWater(water)
      setSleep(sleep)
    })
  }

  useEffect(() => {
    getData()
  }, []);

  return (
    <View style={styles.container}>
      <Text style={{color: 'black', fontSize: 25, fontWeight: '700'}}>
        Profile
      </Text>
      <View>
        <Image source={require('../assets/dp.jpg')} style={styles.dp} />
        <Text
          style={{
            fontWeight: '700',
            marginTop: 15,
            alignSelf: 'center',
            fontSize: 18,
            color: 'black',
          }}>
          Jack!
        </Text>
      </View>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          marginTop: 20,
        }}>
        <View
          style={{
            backgroundColor: 'rgba(50,50,59,0.4)',
            flex: 0,
            width: 180,
            alignItems: 'center',
            height: 120,
            justifyContent: 'center',
            borderRadius: 20,
          }}>
          <Text style={{fontWeight: '500', fontSize: 16, color: 'black'}}>
            Height : {height} cm
          </Text>
          <Text
            style={{
              fontWeight: '500',
              marginTop: 15,
              fontSize: 16,
              color: 'black',
            }}>
            Weight : {weight} kg
          </Text>
        </View>

        <View
          style={{
            backgroundColor: 'rgba(50,50,59,0.4)',
            flex: 0,
            width: 180,
            alignItems: 'center',
            height: 120,
            justifyContent: 'center',
            borderRadius: 20,
          }}>
          <Text style={{fontWeight: '900', fontSize: 20, color: 'black'}}>
            BMI
          </Text>
          <Text
            style={{
              fontWeight: '500',
              marginTop: 15,
              fontSize: 18,
              color: 'black',
            }}>
            {Math.round(data.weight / (data.height/100)^2)}
          </Text>
        </View>
      </View>
      <View
        style={{
          backgroundColor: 'lightblue',
          flex: 0,
          width: '100%',
          alignItems: 'center',
          height: 90,
          borderRadius: 20,
          flexDirection: 'row',
          marginTop: 20,
        }}>
        <Text
          style={{
            fontWeight: '900',
            fontSize: 20,
            color: 'black',
            marginLeft: 20,
          }}>
          Water Level:
        </Text>
        <Text
          style={{
            fontWeight: '500',
            fontSize: 18,
            color: 'black',
            marginLeft: 60,
          }}>
          {`${Water} %`}
        </Text>
      </View>
      <View
        style={{
          backgroundColor: 'lightblue',
          flex: 0,
          width: '100%',
          alignItems: 'center',
          height: 90,
          borderRadius: 20,
          flexDirection: 'row',
          marginTop: 20,
        }}>
        <Text
          style={{
            fontWeight: '900',
            fontSize: 20,
            color: 'black',
            marginLeft: 20,
          }}>
          Sleep Schedule:
        </Text>
        <Text
          style={{
            fontWeight: '500',
            fontSize: 18,
            color: 'black',
            marginLeft: 20,
          }}>
          {`${Sleep} hrs`}
        </Text>
      </View>
      <Text
        onPress={() => {
          storeData('false');
          navigation.navigate('FitLogin');
        }}
        style={styles.logout}>
        Log Out
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    padding: 20,
  },
  nav: {
    marginTop: 30,
    flexDirection: 'row',
    height: '10%',
    justifyContent: 'flex-start',
    marginLeft: 10,

    // backgroundColor:'black',
  },
  dp: {
    resizeMode: 'contain',
    height: 100,
    width: 100,
    borderRadius: 100,
    alignSelf: 'center',
    marginTop: 30,
  },
  logout: {
    margin: 20,
    fontWeight: '500',
    fontSize: 15,
    color: 'red',
  },
});
export default Profile;