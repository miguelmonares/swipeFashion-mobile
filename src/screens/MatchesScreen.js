import React from 'react';
import {View, Text, StyleSheet, SafeAreaView, Image} from 'react-native';
import users from '../../assets/data/users';

const MatchesScreen = () => {
  return (
    <SafeAreaView style={styles.root}>
      <View style={styles.container}>
        <Text
          style={{
            fontWeight: 'bold',
            fontSize: 24,
            color: '#F63A6E',
          }}>
          Clothes
        </Text>
        <View style={styles.users}>
          {users.map(user => (
            <View style={styles.user} key={user.id}>
              <Image source={{uri: user.image}} style={styles.image} />
            </View>
          ))}
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  root: {
    width: '100%',
    flex: 1,
    padding: 10,
  },
  container: {
    padding: 10,
    alignItems: 'center',
  },
  user: {
    width: 100,
    height: 100,
    margin: 10,

    borderRadius: 50,
    padding: 3,
    borderWidth: 4,
    borderColor: '#F63A6E',
  },
  users: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  image: {
    width: '100%',
    height: '100%',
    borderRadius: 50,
  },
});

export default MatchesScreen;
