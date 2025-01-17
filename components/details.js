import React from 'react';
import { View, Text, Image, StyleSheet, ScrollView } from 'react-native';

export default function DetailsScreen(props) {
  const { movie } = props.route.params;

  console.log(movie)

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Image source={{ uri: movie.image?.original || 'https://via.placeholder.com/300' }} style={styles.image} />
      <Text style={styles.title}>{movie.name}</Text>
      <Text style={styles.summary}>{movie.summary?.replace(/<[^>]+>/g, '')}</Text>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    padding: 10,
    backgroundColor: '#fff',
  },
  image: {
    width: '100%',
    height: 500,
    objectFit : 'contain',
    
    marginBottom: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  summary: {
    fontSize: 16,
    color: '#555',
  },
});
