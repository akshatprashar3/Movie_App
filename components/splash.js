import React, { useEffect } from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import logo from '../assets/images/movie.png.jpg'

export default function Splash({ navigation }) {
  useEffect(() => {
    setTimeout(() => {
      navigation.replace('Home');
    }, 3000);
  }, []);

  return (
    <View style={styles.container}>
      <Image source={logo} style={styles.image} />
      <Text style={styles.text}>Welcome to Movie Time</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f2f2f2',
  },
  image: {
    width: 250,
    height: 250,
    marginBottom: 20,
  },
  text: {
    fontSize: 24,
    fontWeight: 'bold',
  },
});