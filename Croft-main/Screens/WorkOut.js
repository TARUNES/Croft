import React from 'react';
import {
  FlatList,
  TouchableOpacity,
  View,
  Text,
  Image,
  Dimensions,
} from 'react-native';

import {data} from '../data/WorkOut_flatlist';

const Height = Dimensions.get('window').height;
const Width = Dimensions.get('window').width;

const WorkOut = ({navigation}) => {
  return (
    <View style={{padding: 20, backgroundColor: '#fff', flex: 1}}>
      <Text
        style={{
          fontSize: 30,
          color: 'black',
          fontWeight: '900',
          marginBottom: 20,
        }}>
        WorkOuts
      </Text>
      <FlatList
        data={data}
        renderItem={({item}) => (
          <TouchableOpacity
            onPress={() => navigation.navigate('Exercises')}
            style={{
              backgroundColor: item.color,
              borderRadius: 10,
              flexDirection: 'row',
            }}>
            <Text
              style={{
                color: 'black',
                zIndex: 1,
                fontWeight: 'bold',
                fontSize: 20,
                marginLeft: 10,
              }}>
              {item.title}
            </Text>
            <Image
              source={item.image}
              style={{height: 100, width: Width}}
              resizeMode="contain"></Image>
          </TouchableOpacity>
        )}
        keyExtractor={item => item.id}
        ItemSeparatorComponent={<Text> </Text>}
      />
    </View>
  );
};

export default WorkOut;
