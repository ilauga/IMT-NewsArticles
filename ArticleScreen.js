// In App.js in a new project
import 'react-native-gesture-handler';
import * as React from 'react';
import { useState, useEffect } from 'react';
import { enableScreens } from 'react-native-screens';
import {
  View,
  Text,
  Image,
  Linking,
  StyleSheet,
  TouchableOpacity,
  FlatList,
  ActivityIndicator,
  TouchableWithoutFeedback,
} from 'react-native';
import { NavigationContainer } from '@react-navigation/native'; //Navigācijas konteineris
import { createStackNavigator } from '@react-navigation/stack'; // Izveido navigācijas steck

const Article = ({ route }) => {
  return (
    <View style={styles.container}>
      <Image
        source={{ uri: route.params.pic }}
        style={styles.circleImageLayout}
      />
      <Text style={styles.item}>Title: {route.params.title}</Text>
      <Text style={styles.item}>Author: {route.params.author}</Text>
      <Text style={styles.item}>Published : {route.params.date}</Text>
      <Text style={styles.item}>Article : {route.params.article}</Text>
      <Text
        style={styles.itemUrl}
        onPress={() => Linking.openURL(route.params.artUrl)}>
        Read full article here
      </Text>
    </View>
  );
};

export default Article;

const styles = StyleSheet.create({
  container: {
    margin: 20,
    padding: 20,
  },
  item: {
    marginVertical: 8,
    marginHorizontal: 16,
  },
  itemUrl: {
    color: 'blue',
    marginVertical: 8,
    marginHorizontal: 16,
  },
  circleImageLayout: {
    width: '80%',
    height: 200,
    borderRadius: 20,
    margin: 20,
  },
});
