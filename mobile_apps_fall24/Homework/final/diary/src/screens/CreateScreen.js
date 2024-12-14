import React, { useContext, useState } from 'react';
import { StyleSheet, ScrollView, Button, Image, TouchableOpacity, Text } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import { Context } from '../context/DiaryContext';
import PostCreationForm from '../components/PostCreationForm';

const CreateScreen = ({ navigation }) => {
  const { addDiaryPost } = useContext(Context);
  const [image, setImage] = useState(null);

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
        initialValues={{ title: '', gameDescription: '', gameThoughts: '', rating: 0, image }}
        onSubmit={(title, gameDescription, gameThoughts, rating, image) => {
          addDiaryPost(title, gameDescription, gameThoughts, rating, image, () => navigation.navigate('Index'));
        }}
      />
      <Button title="Pick an image from camera roll" onPress={pickImage} color="#ff6600" />
      {image && <Image source={{ uri: image }} style={styles.thumbnail} />}
      <TouchableOpacity style={styles.createButton} onPress={() => {}}>
        <Text style={styles.createButtonText}>Create Post</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 10,
    backgroundColor: '#000000',
  },
  image: {
    width: '100%',
    height: 200,
    borderRadius: 10,
    marginVertical: 10,
  },
  thumbnail: {
    width: 100,
    height: 100,
    borderRadius: 5,
    marginVertical: 10,
  },
  createButton: {
    backgroundColor: '#0000ff',
    alignItems: 'center',
    maxWidth: 200,
    borderRadius: 25,
    marginTop: 10,
    padding: 15,
  },
  createButtonText: {
    color: '#ffffff',
    fontFamily: 'PressStart2P',
  },
  text: {
    fontFamily: 'PressStart2P',
  },
});

export default CreateScreen;
