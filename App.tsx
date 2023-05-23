import React, {useEffect} from 'react';
import {View, Text, StyleSheet, ToastAndroid} from 'react-native';
import axios from 'axios';

// Function to make the API call
const fetchAPI = (url: any) => {
  return axios.get(url);
};

const App = () => {
  useEffect(() => {
    const api1 = fetchAPI('https://jsonplaceholder.typicode.com/posts/1');
    const api2 = fetchAPI('https://dummyjson.com/products/1/s');
    const api3 = fetchAPI('https://jsonplaceholder.typicode.com/posts/1');

    Promise.all([api1, api2, api3])
      .then(responses => {
        // Handle successful API responses
        console.log('API responses====>==>', responses);
      })
      .catch(error => {
        // Handle API errors
        ToastAndroid.show(error.message, 500);
        console.error('API error==>',error.message);
      });
  }, []);

  return (
    <View style={styles.conatiner}>
      <Text>Multi API Calls with Error Handling</Text>
    </View>
  );
};
const styles = StyleSheet.create({
  conatiner: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
export default App;
