import React from 'react';
import {
  View,
  Text,
  ImageBackground,
  TouchableOpacity,
  Image,
} from 'react-native';
import { ScrollView, TextInput } from 'react-native-gesture-handler';
import CourseList from '../screens/CourseList';
import db from '../config';
import firebase from 'firebase';

export default class Home extends React.Component {
  render() {
    return (
      <ImageBackground
        source={require('../assets/download.png')}
        style={{ width: '100%', height: '100%' }}>
        <ScrollView>
          <View
            style={{
              marginTop: 100,
              width: '100%',
              alignItems: 'flex-end',
              paddingHorizontal: 20,
            }}>
            <View
              style={{
                paddingHorizontal: 10,
                paddingVertical: 12,
                borderRadius: 10,
                marginTop: 30,
                backgroundColor: '#d1a0a7',
              }}>
              <Image
                source={require('../assets/hum.png')}
                style={{ height: 15, width: 20 }}
              />
            </View>
          </View>
          <Text
            style={{
              paddingHorizontal: 20,
              fontSize: 35,
              paddingTop: 40,
              fontFamily: 'Bold',
              color: '#0f0a5e',
            }}>
            Welcome back me
          </Text>

          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              backgroundColor: '#FFF',
              padding: 10,
              borderRadius: 12,
              marginHorizontal: 20,
              marginTop: 20,
            }}>
            <TextInput
              placeholder="Search for new food!"
              placeholderTextColor="#345c74"
              style={{
                fontFamily: 'Bold',
                fontSize: 12,
                width: 280,
                paddingHorizontal: 12,
              }}
            />
            <Image
              source={require('../assets/sear.png')}
              style={{ height: 14, width: 14 }}
            />
          </View>
          <View
            style={{
              backgroundColor: '#f0d0f5',
              marginTop: 15,
              marginHorizontal: 20,
              borderRadius: 20,
              paddingVertical: 25,
              paddingLeft: 30,
            }}>
            <View>
              <Text
                style={{
                  color: 'red',
                  fontSize: 20,
                  fontFamily: 'Bold',
                  width: 300,
                }}>
                Improve your life through food!
              </Text>
              
            </View>
            
          </View>
         <TouchableOpacity
            onPress={() => this.props.navigation.navigate('Cources')}
            style={{
              flexDirection: 'row',
              backgroundColor: '#f58084',
              alignItems: 'center',
              justifyContent:"center",
              marginLeft:120,
              marginTop:20,
              width: 150,
              paddingVertical: 10,
              borderRadius: 14,
              paddingHorizontal: 10
            }}>
            <Text
              style={{
                color: '#FFF',
                fontFamily: 'Bold',
                fontSize: 12,
              }}>
              Check all Categories
            </Text>
            <Image
              source={require('../assets/burger.png')}
              style={{ marginLeft: 20, width: 8, height: 8 }}
            />
          </TouchableOpacity>
          <View
            style={{
              borderBottomEndRadius: 15,

              width: '60%',
              height: 40,
              marginTop: 20,
            }}>
            <Text
              style={{
                color: '#345c74',
                fontWeight: 'bold',
                fontSize: 20,
                paddingHorizontal: 20,

                marginBottom: 5,

                padding: 5,
                width: '85%',
              }}>
              Continue Eating...
            </Text>
          </View>
          <ScrollView horizontal={true}>
            <CourseList
            fd="column"
              img={require('../assets/burger.png')}
              title="chicken burger"
              bg="#fdddf3"
            />
            <CourseList
             fd="column"
              img={require('../assets/burger.png')}
              title="chicken burger pro"
              bg="#fef8e3"
            />
            <CourseList
             fd="column"
              img={require('../assets/burger.png')}
              title="chicken burger pro max"
              bg="#fcf2ff"
            />
            <CourseList
             fd="column"
              img={require('../assets/burger.png')}
              title="chicken burger pro max ultra"
              bg="#fdddf3"
            />
            <CourseList
             fd="column"
              img={require('../assets/burger.png')}
              title="chicken burger pro max ultra deluxe edition "
              bg="#fef8e3"
            />
            <CourseList
             fd="column"
              img={require('../assets/burger.png')}
              title="funny steak"
              bg="#fcf2ff"
            />
            <CourseList
             fd="column"
              img={require('../assets/burger.png')}
              title="tiny burger"
              bg="#fdddf3"
            />
            <CourseList
             fd="column"
              img={require('../assets/burger.png')}
              title="no bevs for you"
              bg="#fef8e3"
            />
            <CourseList
             fd="column"
              img={require('../assets/burger.png')}
              title="call the manager"
              bg="#fcf2ff"
            />
          </ScrollView>
          <View
            style={{
              borderBottomEndRadius: 15,

              width: '90%',
              height: 40,
              marginTop: 20,
            }}>
            <Text
              style={{
                color: '#345c74',
                fontWeight: 'bold',
                fontSize: 20,
                paddingHorizontal: 20,

                marginBottom: 5,

                padding: 5,
                width: '85%',
              }}>
              Cuisines
            </Text>
          </View>
          <ScrollView horizontal={true}>
            <CourseList
             fd="column"
              img={require('../assets/burger.png')}
              title="American"
              bg="#fdddf3"
            />
            <CourseList
             fd="column"
              img={require('../assets/burger.png')}
              title="Indian"
              bg="#fef8e3"
            />
            <CourseList
             fd="column"
              img={require('../assets/burger.png')}
              title="Chinese"
              bg="#fcf2ff"
            />
            <CourseList
             fd="column"
              img={require('../assets/burger.png')}
              title="Thai"
              bg="#fdddf3"
            />
            <CourseList
             fd="column"
              img={require('../assets/burger.png')}
              title="Italian"
              bg="#fef8e3"
            />
            <CourseList
             fd="column"
              img={require('../assets/burger.png')}
              title="Mexican"
              bg="#fcf2ff"
            />
            <CourseList
             fd="column"
              img={require('../assets/burger.png')}
              title="Lebanese"
              bg="#fdddf3"
            />
            <CourseList
             fd="column"
              img={require('../assets/burger.png')}
              title="Snacky"
              bg="#fef8e3"
            />
            <CourseList
             fd="column"
              img={require('../assets/burger.png')}
              title="British Breakfast"
              bg="#fcf2ff"
            />
          </ScrollView>
        </ScrollView>
      </ImageBackground>
    )
            }
}
