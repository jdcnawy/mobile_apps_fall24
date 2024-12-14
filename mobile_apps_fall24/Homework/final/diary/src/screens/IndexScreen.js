import React, { useContext, useEffect, useState } from 'react';
import { StyleSheet, Text, View, FlatList, TouchableOpacity, Image } from 'react-native';
import { Context } from '../context/DiaryContext';
import { StarRatingDisplay } from '../components/Rating';
import FontAwesome from '@expo/vector-icons/FontAwesome';

const IndexScreen = ({ navigation }) => {
  const { state, deleteDiaryPost, getDiaryPosts } = useContext(Context);
  const [filter, setFilter] = useState("none");
  const [filterResults, setFilterResults] = useState(state);

  const filterOptions = [
    { label: <><Text>1 </Text><FontAwesome name="star" size={18} color="white" /></>, value: 1 },
    { label: <><Text>2 </Text><FontAwesome name="star" size={18} color="white" /></>, value: 2 },
    { label: <><Text>3 </Text><FontAwesome name="star" size={18} color="white" /></>, value: 3 },
    { label: <><Text>4 </Text><FontAwesome name="star" size={18} color="white" /></>, value: 4 },
    { label: <><Text>5 </Text><FontAwesome name="star" size={18} color="white" /></>, value: 5 },
  ];

  useEffect(() => {
    getDiaryPosts();
    const unsubscribe = navigation.addListener('focus', () => { getDiaryPosts() });
    return unsubscribe;
  }, [navigation]);

  useEffect(() => { setFilterResults(state) }, [state]);

  const handleRatingFilterClick = (filterValue) => {
    setFilter(filterValue);
    if (filterValue == "none") {
      setFilterResults(state);
    } else {
      const ratingPosts = state.filter((movie) => movie.rating === filterValue);
      setFilterResults(ratingPosts);
    }
  };

  return (
    <View style={styles.backgroundContainer}>
      <View style={styles.filtersContainer}>
        {filterOptions.map((filterOption, index) => (
          <TouchableOpacity key={index}
            onPress={() => handleRatingFilterClick(filterOption.value)}
            style={[styles.buttonGeneral, filter === filterOption.value ? styles.buttonPress : styles.buttonNoPress]}>
            <Text style={filter === filterOption.value ? styles.buttonTextPressed : styles.buttonTextNopress}>{filterOption.label}</Text>
          </TouchableOpacity>
        ))}
      </View>

      <FlatList
        data={filterResults}
        keyExtractor={(post) => post.id}
        renderItem={({ item }) => (
          <TouchableOpacity
            onPress={() => navigation.navigate('View', { id: item.id })}
          >
            <View style={styles.postCard}>
              <View style={styles.postRow}>
                <View>
                  <Text style={styles.title}>{item.title}</Text>
                  <StarRatingDisplay rating={item.rating} />
                </View>
                {item.image && <Image source={{ uri: item.image }} style={styles.thumbnail} />}
                <View style={styles.iconContainer}>
                  <TouchableOpacity onPress={() => navigation.navigate('Edit', { id: item.id })}>
                    <FontAwesome style={styles.editIcon} name="edit" size={30} color="#ff6600" />
                  </TouchableOpacity>
                  <TouchableOpacity onPress={() => deleteDiaryPost(item.id)}>
                    <FontAwesome style={styles.addIcon} name="trash-o" size={30} color="#666" />
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

IndexScreen.navigationOptions = ({ navigation }) => {
  return {
    headerRight: () => (
      <TouchableOpacity onPress={() => navigation.navigate('Create')}>
        <Text style={styles.createPostButton}>Create Post</Text>
      </TouchableOpacity>
    ),
  };
};

const styles = StyleSheet.create({
  backgroundContainer: {
    backgroundColor: "#000000",
    flex: 1,
    padding: 20,
  },
  addIcon: {
    marginRight: 10,
  },
  editIcon: {
    marginRight: 10,
  },
  title: {
    fontSize: 25,
    color: "white",
    marginBottom: 5,
    fontFamily: 'PressStart2P',
  },
  filtersContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 30,
  },
  postCard: {
    backgroundColor: '#1a1a1a',
    borderRadius: 10,
    padding: 15,
    marginBottom: 15,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 5,
  },
  postRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderColor: '#303030',
    marginBottom: 5,
    padding: 20,
  },
  iconContainer: {
    flexDirection: 'row',
  },
  buttonGeneral: {
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 15,
  },
  buttonTextNopress: {
    color: "white",
    fontFamily: 'PressStart2P',
  },
  buttonTextPressed: {
    color: "black",
    fontFamily: 'PressStart2P',
  },
  buttonNoPress: {
    backgroundColor: "#2F2F2F",
  },
  buttonPress: {
    backgroundColor: "#FF6600",
  },
  createPostButton: {
    color: '#ff6600',
    fontFamily: 'PressStart2P',
    fontSize: 14,
    marginRight: 10,
  },
  thumbnail: {
    width: 50,
    height: 50,
    borderRadius: 5,
    marginLeft: 10,
  },
});

export default IndexScreen;