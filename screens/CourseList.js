import React from 'react';
import { Text, TouchableOpacity, View, Image } from 'react-native';


export default class CourseList extends React.Component {
  render() {
    const { img, title, bg, onPress ,fd,w} = this.props;
    return (
      <TouchableOpacity
        onPress={onPress}
        style={{
          flexDirection: fd,
          backgroundColor: bg,
          padding: 10,

          marginHorizontal: 10,
          borderRadius: 20,
          alignItems: 'center',
          marginTop: 10,
          width: w,
        }}>
        <View style={{backgroundColor:bg,width:100,height:100}}>
          <Image source={img} style={{ width: "100%", height: "100%" }} />
        </View>
        <View>
          <Text
            style={{
              color: '#345c74',
              fontFamily: 'Bold',
              fontSize: 13,
              paddingHorizontal: 20,
              width: 170,
              fontWeight: 'bold',
            }}>
            {title}
          </Text>
         
        </View>
        
        
      </TouchableOpacity>
    );
  }
}
