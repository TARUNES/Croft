import React from 'react';
import Swiper from 'react-native-swiper';
import {
  Dimensions,
  Image,
  StyleSheet,
  Text,
  Touchable,
  TouchableOpacity,
  View,
} from 'react-native';

const Height = Dimensions.get('window').height;
const Width = Dimensions.get('window').width;

const Motivation = () => {
  return (
    <View style={styles.container}>
      <Swiper style={styles.wrapper} showsButtons={false} autoplay={true}>
        <View style={styles.slide}>
          <Image
            source={require('../assets/fitness1.jpg')}
            style={styles.warp}></Image>
        </View>
        <View style={styles.slide}>
          <Image
            source={require('../assets/fitness3.jpeg')}
            style={styles.warp}></Image>
        </View>
        <View style={styles.slide}>
          <Image
            source={require('../assets/fitness4.jpeg')}
            style={styles.warp}></Image>
        </View>
        <View style={styles.slide}>
          <Image
            source={require('../assets/fitness5.jpeg')}
            style={styles.warp}></Image>
        </View>
        <View style={styles.slide}>
          <Image
            source={require('../assets/fitness6.jpeg')}
            style={styles.warp}></Image>
        </View>
        <View style={styles.slide}>
          <Image
            source={require('../assets/fitness4.jpeg')}
            style={styles.warp}></Image>
        </View>
      </Swiper>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: Width - 20,
    height: 200,
    marginBottom: 0,
    alignSelf: 'center',
  },
  warp: {
    width: 370,
    height: 250,
    flex: 1,
    resizeMode: 'stretch',
    borderRadius: 20,
    marginLeft: 10,
    marginRight: 10,
  },
  wrapper: {
    height: 250,
  },
  slide: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
  },
  text: {
    color: '#fff',
    fontSize: 30,
    fontWeight: 'bold',
  },
});
export default Motivation;
