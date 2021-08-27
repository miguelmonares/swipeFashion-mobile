import React from 'react';
import {Text, Image, ImageBackground, View, StyleSheet} from 'react-native';

const App = () => {
  return (
    <View style={styles.pageContainer}>
      <View style={styles.card}>
        <ImageBackground
          source={{
            uri: 'https://media-exp1.licdn.com/dms/image/C5603AQEFlKaMeOD-bg/profile-displayphoto-shrink_400_400/0/1595913204635?e=1635379200&v=beta&t=FxuudqNu7idP5q8y1Wv4OpzuK81aAT7gTThMnjJzKkI',
          }}
          style={styles.image}>
          <View style={styles.cardInner}>
            <Text style={styles.name}>Priscilla Nguyen</Text>
            <Text style={styles.bio}>Aerospace Chad</Text>
          </View>
        </ImageBackground>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  pageContainer: {justifyContent: 'center', alignItems: 'center', flex: 1},
  name: {fontSize: 30, color: 'white', fontWeight: 'bold'},
  bio: {fontSize: 18, color: 'white', lineHeight: 25},
  card: {
    width: '95%',
    height: '70%',
    borderRadius: 10,
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
export default App;
