import React from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import Post from './components/post.js';
import Comment from './components/comments.js';

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
          <Post>Post</Post>
        <ScrollView>
          <Comment>Comment</Comment>
          <Comment>Comment</Comment>
          <Comment>Comment</Comment>
          <Comment>Comment</Comment>
          <Comment>Comment</Comment>
          <Comment>Comment</Comment>
          <Comment>Comment</Comment>
          <Comment>Comment</Comment>
          <Comment>Comment</Comment>
          <Comment>Comment</Comment>
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: 5,
    marginRight: 5,
  }

});
