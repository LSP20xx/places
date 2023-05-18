import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { styles } from './styles';

const Card = ({ title, description, onPress }) => {
    return (
      <TouchableOpacity onPress={onPress} style={styles.container}>
        <View style={styles.textContainer}>
          <Text style={styles.title}>{title}</Text>
          <Text style={styles.description}>{description}</Text>
        </View>
      </TouchableOpacity>
    );
  };


export default Card;