// In App.js in a new project
import 'react-native-gesture-handler';
import * as React from 'react';
import { useState, useEffect } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  FlatList,
  ActivityIndicator,
  TouchableWithoutFeedback,
} from 'react-native';
import { NavigationContainer } from '@react-navigation/native'; //Navigācijas konteineris
import { createStackNavigator } from '@react-navigation/stack'; // Izveido navigācijas steck
import Article from './pages/ArticleScreen';
import HomeScreen from './pages/HomeScreen';

const Stack = createStackNavigator();

const App = () => {
  const [loading, setLoading] = useState(true);

  return (
    <NavigationContainer initialRouteName="HomeScreen">
      <Stack.Navigator>
        <Stack.Screen
          name="HomeScreen"
          component={HomeScreen}
          options={{
            title: 'Home',
            headerStyle: {
              backgroundColor: '#3d0575',
            },
            headerTintColor: 'white',
            headerTitleAlign: 'center',
          }}
        />
        <Stack.Screen
          name="Article"
          component={Article}
          options={{
            title: 'Article',
            headerStyle: {
              backgroundColor: '#3d0575',
            },
            headerTintColor: 'white',
            headerTitleAlign: 'center',
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
