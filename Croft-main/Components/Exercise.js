import {
  Image,
  StyleSheet,
  Text,
  Touchable,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';

const Exercise = props => {
  return (
    <View style={styles.container}>
      <View style={{flexDirection: 'row', justifyContent: 'space-around'}}>
        <Image source={props.img} style={styles.img} />
        <TouchableOpacity onPress={props.onPress} style={styles.btn}>
          <Text style={{fontWeight:'700',color:'black',}}>Start</Text>
        </TouchableOpacity>
      </View>
      <View style={{alignItems: 'center', justifyContent: 'center',marginTop:20}}>
        <Text
          style={{
            fontWeight: '700',
            color: 'black',
            fontSize: 18,
            alignSelf: 'center',
          }}>
          {props.name}
        </Text>
      </View>
    </View>
  );
};

export default Exercise;

const styles = StyleSheet.create({
  img: {
    height: 100,
    width: 200,
    alignItems: 'center',
    justifyContent: 'center',
  },
  btn: {
    
    // borderWidth: 2,
    backgroundColor: '#14CBB4',
    height: 50,
    width: 80,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 30,
    borderRadius: 30,
  },
  container: {
    borderColor: 'lightgray',
    borderBottomWidth: 0.5,
    padding: 14,
    marginTop: 20,
    // flexDirection:"row",
  },
});
