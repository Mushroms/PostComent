import React, { Component } from 'react';
import { View, Text, TouchableHighlight } from 'react-native';

export default class AddComment extends Component {



  getStyles() {
    const styles = {

      commentContainer:{
        flex: 1,
        height: 50,
        width : 350,
        flexDirection: 'column',
        borderRadius: 10,
        borderColor: '#00BFFF',
        borderWidth: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#f3e5f5',
      },
    textContainer: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      fontSize: 34,
    }
  }
      return styles;
  }

  render() {
    const styles = this.getStyles();
    const content = this.props.children || '';
    return (
      <TouchableHighlight>
       <View style={styles.commentContainer}>
         <Text style={styles.textContainer}>
           { content }
         </Text>
       </View>
      </TouchableHighlight>

      );
    }
  }
