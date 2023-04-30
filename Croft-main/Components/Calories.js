import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
const Calories = props => {
  return (
    <View style={{alignItems: 'center',width:'100%',}}>
      
      <View style={styles.container}>
        <View style={styles.props1}>
          <Text style={{fontSize:16}}>Total calories</Text>
          <Text style={{textAlign:'center',color:'black',fontWeight:'bold',fontSize:20}}>{props.Totcalories}</Text>
        </View>
                  <MaterialCommunityIcons name={'fire'}  style={{fontSize:60,color:"red", margin:10,marginTop:18}} />
        <View style={styles.props2}>
          <Text style={{fontSize:16}}>Burnt calories</Text>
          <Text style={{textAlign:'center',color:'black',fontWeight:'bold',fontSize:20}}>{props.Burntcalories}</Text>
        </View>
      </View>
    </View>
  );
};

export default Calories;

const styles = StyleSheet.create({
  container: {
    height: 100,
    width: '94%',
    borderColor: 'lightgrey',
    borderWidth: 0.5,
    backgroundColor: '#FFF2E6',
    justifyContent: 'center',
    borderRadius: 15,
    marginBottom: 15,
    marginTop: 15,
    flexDirection:'row'
  },
  props1: {
    flexDirection: 'column',
    justifyContent: 'space-evenly',
  },

  props2: {
    flexDirection: 'column',
    justifyContent: 'space-evenly',
  },
});
