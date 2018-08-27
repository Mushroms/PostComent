import React, { Component } from 'react';
import { View, Text } from 'react-native';

export default class Post extends Component {



  getStyles() {
    const styles = {

    postContainer: {
      flex: 1,
      height: '40%',
      width : '100%',
      backgroundColor: '#e1bee7',
      alignItems: 'center',
      justifyContent: 'center',
      //marginBottom: '70%',
      borderRadius: 15,
      borderColor: '#00BFFF',
      borderWidth: 1,
      // marginLeft: 5,
      // marginRight: 5,
    },
    textContainer: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      fontSize: 34,
    },
  }
      return styles;
  }

  render() {
    const styles = this.getStyles();
    const content = this.props.children || '';
    return (
      <View style={styles.postContainer}>
        <Text style={styles.textContainer}>
          { content }
        </Text>
      </View>

      );
    }
  }
