import React, { useContext } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { Context } from '../context/DiaryContext';
import Entypo from '@expo/vector-icons/Entypo';

const ViewScreen = ({ route, navigation }) => {
  const { state } = useContext(Context);
  const { id } = route.params;
  const post = state.find((diaryPost) => diaryPost.id === id);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{post.title}</Text>
      <Text style={styles.description}>{post.gameDescription}</Text>
      <Text style={styles.thoughts}>{post.gameThoughts}</Text>
      <Text style={styles.rating}>Rating: {post.rating}</Text>
      {post.image && <Image source={{ uri: post.image }} style={styles.image} />}
    </View>
  );
};

ViewScreen.navigationOptions = ({ navigation }) => {
  const id = navigation.getParam('id');
  return {
    headerRight: () => (
      <TouchableOpacity onPress={() => navigation.navigate('Edit', { id: id })}>
        <Entypo style={styles.editIcon} name="edit" size={30} color="#ff6600" />
      </TouchableOpacity>
    ),
  };
};

const styles = StyleSheet.create({
  container: {
    padding: 10,
    backgroundColor: '#000000',
    flex: 1,
  },
  editIcon: {
    marginRight: 10,
  },
  title: {
    fontSize: 25,
    color: '#0000ff',
    marginBottom: 10,
    fontFamily: 'PressStart2P',
  },
  description: {
    fontSize: 18,
    color: '#ffffff',
    marginBottom: 10,
    fontFamily: 'PressStart2P',
  },
  thoughts: {
    fontSize: 18,
    color: '#ffffff',
    marginBottom: 10,
    fontFamily: 'PressStart2P',
  },
  rating: {
    fontSize: 18,
    color: '#ff6600',
    marginBottom: 10,
    fontFamily: 'PressStart2P',
  },
  image: {
    width: '100%',
    height: 200,
    borderRadius: 10,
    marginVertical: 10,
  },
});

export default ViewScreen;
