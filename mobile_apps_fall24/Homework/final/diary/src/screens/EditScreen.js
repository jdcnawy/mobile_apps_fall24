import React, { useContext, useState } from 'react';
import { StyleSheet, ScrollView, Button, Image, TouchableOpacity, Text } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import { Context } from '../context/DiaryContext';
import PostCreationForm from '../components/PostCreationForm';

const EditScreen = ({ route, navigation }) => {
  const { id } = route.params;
  const { state, editDiaryPost } = useContext(Context);
  const post = state.find((diaryPost) => diaryPost.id === id);
  const [image, setImage] = useState(post.image);

  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: 'Images',
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.canceled) {
      setImage(result.uri);
    }
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <PostCreationForm
        initialValues={{ title: post.title, gameDescription: post.gameDescription, gameThoughts: post.gameThoughts, rating: post.rating, image }}
        onSubmit={(title, gameDescription, gameThoughts, rating, image) => {
          editDiaryPost(id, title, gameDescription, gameThoughts, rating, image, () => navigation.navigate('Index'));
        }}
      />
      <Button title="Pick an image from camera roll" onPress={pickImage} color="#ff6600" />
      {image && <Image source={{ uri: image }} style={styles.thumbnail} />}
      <TouchableOpacity style={styles.editButton} onPress={() => {}}>
        <Text style={styles.editButtonText}>Edit Post</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 10,
    backgroundColor: '#0000ff',
    fontFamily: 'PressStart2P',
  },
  image: {
    width: '100%',
    height: 200,
    borderRadius: 10,
    marginVertical: 10,
    fontFamily: 'PressStart2P',
  },
  thumbnail: {
    width: 100,
    height: 100,
    borderRadius: 5,
    marginVertical: 10,
  },
  editButton: {
    backgroundColor: '#0000ff',
    alignItems: 'center',
    maxWidth: 200,
    borderRadius: 25,
    marginTop: 10,
    padding: 15,
    fontFamily: 'PressStart2P',
  },
  editButtonText: {
    color: '#ffffff',
    fontFamily: 'PressStart2P',
  },
});

export default EditScreen;
