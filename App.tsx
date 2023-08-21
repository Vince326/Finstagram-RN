import React from "react";
import { View, ScrollView, StyleSheet, FlatList } from 'react-native';
import FeedPost from "./src/components/FeedPost/FeedPost";
import posts from './src/assets/data/posts.json';


const App = () => {
  return (
    <View style={styles.app}>
      <FlatList
        data={posts}
        showsVerticalScrollIndicator={false}
        renderItem={(data) => <FeedPost post={item} />}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  app: {
    flex: 1,

  },

});

export default App;
