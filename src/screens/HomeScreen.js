import 'react-native-gesture-handler';
import React from 'react';
import {View, StyleSheet} from 'react-native';
import Card from '../components/TinderCard';
import users from '../../assets/data/users';

import Entypo from 'react-native-vector-icons/Entypo';
import Ionicons from 'react-native-vector-icons/Ionicons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

import AnimatedStack from '../components/AnimatedStack';

const jeff = {
  name: 'Priscilla',
  bio: 'Im priscilla',
  image:
    'https://cdn10.bostonmagazine.com/wp-content/uploads/sites/2/2021/08/rubber-duck-stock-t.jpg',
};

const HomeScreen = () => {
  const onSwipeLeft = user => {
    console.warn('swipe left', user.name);
  };

  const onSwipeRight = user => {
    console.warn('swipe right', user.name);
  };

  return (
    <View style={styles.pageContainer}>
      <AnimatedStack
        data={users}
        renderItem={({item}) => <Card user={item} />}
        onSwipeLeft={onSwipeLeft}
        onSwipeRight={onSwipeRight}
      />
      <View style={styles.icons}>
        <View style={styles.button}>
          <FontAwesome name="undo" size={30} color="#FBD88B" />
        </View>
        <View style={styles.button}>
          <Entypo name="cross" size={30} color="#F76C6B" />
        </View>
        <View style={styles.button}>
          <FontAwesome name="star" size={30} color="#3AB4CC" />
        </View>
        <View style={styles.button}>
          <FontAwesome name="heart" size={30} color="#4FCC94" />
        </View>
        <View style={styles.button}>
          <Ionicons name="flash" size={30} color="#A65CD2" />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  pageContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
    width: '100%',
    backgroundColor: '#efefef',
  },
  icons: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '100%',
    padding: 10,
  },
  button: {
    width: 50,
    height: 50,
    backgroundColor: 'white',
    padding: 10,
    borderRadius: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
export default HomeScreen;
