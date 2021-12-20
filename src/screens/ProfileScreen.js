import React, {useState, useEffect} from 'react';
import {Picker} from '@react-native-picker/picker';
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  Image,
  Pressable,
  TextInput,
  Alert,
} from 'react-native';
import users from '../../assets/data/users';
import {Auth, DataStore} from 'aws-amplify';
import {User} from '../models';

const ProfileScreen = () => {
  const [user, setUser] = useState(null);

  const [name, setName] = useState('');
  const [bio, setBio] = useState('');
  const [gender, setGender] = useState();
  const [lookingFor, setLookingFor] = useState();

  const isValid = () => {
    return name && bio && gender && lookingFor;
  };

  useEffect(() => {
    const getCurrentUser = async () => {
      const user = await Auth.currentAuthenticatedUser();
      const dbUsers = await DataStore.query(
        User,
        u => u.sub == user.attributes.sub,
      );

      if (dbUsers.length < 0) {
        return;
      }
      console.warn(dbUsers[0]);

      const dbUser = dbUsers[0];
      setUser(dbUser);
      setName(dbUser.name);
      setBio(dbUser.bio);
      setGender(dbUser.gender);
      setLookingFor(dbUser.lookingFor);
    };
    getCurrentUser();
  }, []);

  const save = async () => {
    if (!isValid()) {
      console.warn('Not valid');
      return;
    }

    if (user) {
      const updatedUser = User.copyOf(user, updated => {
        updated.name = name;
        updated.bio = bio;
        updated.gender = gender;
        updated.looking = lookingFor;
      });

      console.warn('1');
      await DataStore.save(updatedUser);
    } else {
      const authUser = await Auth.currentAuthenticatedUser();

      const newUser = new User({
        sub: authUser.attributes.sub,
        name,
        bio,
        gender,
        lookingFor,
        image:
          'https://us.louisvuitton.com/images/is/image/lv/1/PP_VP_L/louis-vuitton-montaigne-mm-monogram-handbags--M41056_PM1_Worn%20view.jpg',
      });
      console.warn('2');

      await DataStore.save(newUser);
    }
    Alert.alert('User saved successfully');
  };

  return (
    <SafeAreaView style={styles.root}>
      <View style={styles.container}>
        <TextInput
          style={styles.input}
          placeholder="Name..."
          value={name}
          onChangeText={setName}
        />
        <TextInput
          style={styles.input}
          placeholder="bio..."
          multiline
          numberOfLines={3}
          value={bio}
          onChangeText={setBio}
        />
        <Text>Gender</Text>
        <Picker
          selectedValue={gender}
          onValueChange={itemValue => setGender(itemValue)}>
          <Picker.Item label="Male" value="MALE" />
          <Picker.Item label="Female" value="FEMALE" />
          <Picker.Item label="Other" value="OTHER" />
        </Picker>
        <Text>Looking For</Text>
        <Picker
          selectedValue={lookingFor}
          onValueChange={itemValue => setLookingFor(itemValue)}>
          <Picker.Item label="Male" value="MALE" />
          <Picker.Item label="Female" value="FEMALE" />
          <Picker.Item label="Other" value="OTHER" />
        </Picker>
        <Pressable onPress={save} style={styles.button}>
          <Text>Save</Text>
        </Pressable>
        <Pressable onPress={() => Auth.signOut()} style={styles.button}>
          <Text>Sign out</Text>
        </Pressable>
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
  },
  button: {
    backgroundColor: '#f63a3e',
    height: 25,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 20,
    margin: 10,
  },
  input: {
    margin: 10,
    borderBottomColor: 'lightgray',
    borderBottomWidth: 1,
  },
});

export default ProfileScreen;
