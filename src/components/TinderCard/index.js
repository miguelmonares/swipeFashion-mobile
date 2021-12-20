import React from 'react';
import {Text, Image, ImageBackground, View, StyleSheet} from 'react-native';

const Card = props => {
  const {name, image, bio} = props.user;
  return (
    <View style={styles.card}>
      <ImageBackground
        source={{
          uri: image,
        }}
        style={styles.image}>
        <View style={styles.cardInner}>
          <Text style={styles.name}>{name}</Text>
          <Text style={styles.bio}>{bio}</Text>
        </View>
      </ImageBackground>
    </View>
  );
};
const styles = StyleSheet.create({
  name: {fontSize: 30, color: 'white', fontWeight: 'bold', color: 'black'},
  bio: {fontSize: 18, color: 'white', lineHeight: 25, color: 'black'},
  card: {
    width: '100%',
    height: '100%',
    borderRadius: 10,
    backgroundColor: '#fefefe',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 7,
    },
    shadowOpacity: 0.41,
    shadowRadius: 9.11,

    elevation: 14,
  },
  cardInner: {padding: 10},
  image: {
    width: '100%',
    height: '100%',
    borderRadius: 10,
    overflow: 'hidden',
    justifyContent: 'flex-end',
  },
});
export default Card;
