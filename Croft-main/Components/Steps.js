
import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Foundation from 'react-native-vector-icons/Foundation';
const Steps = props => {
  return (
    <View style={{alignItems: 'center',width:'100%',}}>
      
      <View style={styles.container}>
        <View style={styles.props1}>
          <Text style={{fontSize:16}}>Total Steps</Text>
          <Text style={{textAlign:'center',color:'black',fontWeight:'bold',fontSize:20}}>{props.TotSteps}</Text>
        </View>
        <Foundation name={'foot'} style={{fontSize:60,color:"#D5C5ED", margin:10,marginTop:18,marginRight:20,marginLeft:20}}  />  
        <View style={styles.props2}>
          <Text style={{fontSize:16}}>Finished Steps</Text>
          <Text style={{textAlign:'center',color:'black',fontWeight:'bold',fontSize:20}}>{props.FinishedSteps}</Text>
        </View>
      </View>
    </View>
  );
};

export default Steps;

const styles = StyleSheet.create({
  container: {
    height: 100,
    width: '94%',
    borderColor: 'lightgrey',
    borderWidth: 0.5,
    backgroundColor: '#E8FEE6',
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
