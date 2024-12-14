import React, { useState } from 'react';
import { TouchableOpacity, StyleSheet, Text, TextInput, View, Button, Image } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import StarRating from './Rating';

const PostCreationForm = ({ onSubmit, initialValues = { title: '', gameDescription: '', gameThoughts: '', rating: 0, image: null } }) => {
  const [title, setTitle] = useState(initialValues.title);
  const [gameDescription, setGameDescription] = useState(initialValues.gameDescription);
  const [gameThoughts, setGameThoughts] = useState(initialValues.gameThoughts);
  const [rating, setRating] = useState(initialValues.rating);
  const [image, setImage] = useState(initialValues.image);

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
    <View style={styles.backgroundContainer}>
      <Text style={styles.label}>Title:</Text>
      <TextInput
        autoCapitalize="words"
        autoCorrect={false}
        style={styles.input}
        value={title}
        onChangeText={(text) => setTitle(text)}
      />
      <Text style={styles.label}>Description:</Text>
      <TextInput
        autoCapitalize="sentences"
        autoCorrect={false}
        multiline={true}
        style={styles.input}
        value={gameDescription}
        onChangeText={(text) => setGameDescription(text)}
      />
      <Text style={styles.label}>Thoughts</Text>
      <TextInput
        autoCapitalize="sentences"
        autoCorrect={false}
        multiline={true}
        style={styles.input}
        value={gameThoughts}
        onChangeText={(text) => setGameThoughts(text)}
      />
  
      <StarRating rating={rating} setRating={setRating} />

      <Button title="Pick an image from camera roll" onPress={pickImage} color="#ff6600" />
      {image && <Image source={{ uri: image }} style={styles.image} />}

      <TouchableOpacity style={styles.button} onPress={() => { onSubmit(title, gameDescription, gameThoughts, rating, image) }}>
        <Text style={styles.buttonText}>Save</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  backgroundContainer: {
    backgroundColor: "#000000",
    flex: 1,
    gap: 12,
    padding: 20,
  },
  label: {
    fontSize: 20,
    color: "#ff6600",
    margin: 10,
    marginBottom: 0,
    fontFamily: 'PressStart2P',
  },
  input: {
    fontSize: 18,
    color: "#ffffff",
    borderColor: '#ff6600',
    borderWidth: 1,
    borderRadius: 5,
    marginHorizontal: 10,
    paddingVertical: 4,
    padding: 5,
    fontFamily: 'PressStart2P',
  },
  button: {
    backgroundColor: '#ff6600',
    alignItems: 'center',
    maxWidth: 200,
    borderRadius: 25,
    marginTop: 10,
    padding: 15,
  },
  buttonText: {
    color: '#1a1a1a',
    fontFamily: 'PressStart2P',
  },
  image: {
    width: '100%',
    height: 200,
    borderRadius: 10,
    marginVertical: 10,
  },
});

export default PostCreationForm;
