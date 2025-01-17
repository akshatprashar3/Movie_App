import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, TextInput, TouchableOpacity, Image, StyleSheet } from 'react-native';

export default function HomeScreen({ navigation }) {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    fetch('https://api.tvmaze.com/search/shows?q=all')
      .then((response) => response.json())
      .then((data) => setMovies(data))
      .catch((error) => console.error(error));
  }, []);

  const renderItem = ({ item }) => (
    <TouchableOpacity style={styles.item} onPress={() => navigation.navigate('Details', { movie: item.show })}>
      <Image source={{ uri: item.show.image?.medium || 'https://via.placeholder.com/100' }} style={styles.thumbnail} />
      <View style={styles.info}>
        <Text style={styles.title}>{item.show.name}</Text>
        <Text numberOfLines={3} style={styles.summary}>{item.show.summary?.replace(/<[^>]+>/g, '')}</Text>
      </View>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      
      <FlatList
        style = {{height : '150px', marginBottom: '10px'}}
        data={movies}
        renderItem={renderItem}
        keyExtractor={(item) => item.show.id.toString()}
      />

      <TextInput
        style={styles.searchBar}
        placeholder="Search Movies"
        onFocus={() => navigation.navigate('Search')}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#403636',
  },
  searchBar: {
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    margin: 10,
    borderRadius: 5,
    paddingHorizontal: 10,
  },
  
  item: {
    flexDirection: 'row',
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  thumbnail: {
    width: 100,
    height: 150,
    marginRight: 10,
  },
  info: {
    flex: 1,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#fff'
  },
  summary: {
    fontSize: 14,
    color: '#fff',
  },
});
