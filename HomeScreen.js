// In App.js in a new project
import 'react-native-gesture-handler';
import * as React from 'react';
import { useState, useEffect } from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
  FlatList,
  ActivityIndicator,
  TouchableWithoutFeedback,
} from 'react-native';
import { NavigationContainer } from '@react-navigation/native'; //Navigācijas konteineris
import { createStackNavigator } from '@react-navigation/stack'; // Izveido navigācijas steck
export const article_url = 'https://newsapi.org/v2/top-headlines';
export const source = 'techcrunch';
export const _api_key = 'bb4c01591a704b1289f11c7512265ced';

const HomeScreen = ({ navigation }) => {
  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState([]);

  const getArticles = async () => {
    try {
      const response = await fetch(
        'https://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey=bb4c01591a704b1289f11c7512265ced'
      );
      const result = await response.json();
      setData(result.articles);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getArticles();
  }, []);

  const [counter, setCounter] = useState(0);
  return (
    <View style={styles.container}>
      {isLoading ? (
        <ActivityIndicator />
      ) : (
        <FlatList
          data={data}
          keyExtractor={({ id }, index) => id}
          renderItem={({ item }) => (
            <TouchableOpacity
              onPress={() =>
                navigation.navigate('Article', {
                  title: item.title,
                  author: item.author,
                  description: item.description,
                  date: item.publishedAt,
                  article: item.content,
                  pic: item.urlToImage,
                  artUrl: item.url,
                })
              }>
              <View style={styles.item}>
                <Image
                  source={{ uri: item.urlToImage }}
                  style={styles.articlePicSmall}
                />
                <Text style={{ width: '70%' }}>
                  <Text style={styles.articletitle}>
                    {item.title}

                    <Text style={styles.articleauthor}>
                      {'\n'} {'\n'}
                      by {item.author}
                    </Text>
                  </Text>
                </Text>
              </View>
            </TouchableOpacity>
          )}
        />
      )}
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  articletitle: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  articleauthor: {
    alignItems: 'right',
    fontSize: 13,
    fontWeight: 'normal',
  },
  articlePicSmall: {
    width: 100,
    height: 100,
  },
  item: {
    backgroundColor: '#f9c2ff',
    padding: 5,
    marginVertical: 8,
    marginHorizontal: 16,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});
