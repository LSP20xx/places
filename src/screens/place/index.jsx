import React from 'react';
import { View, Image, Text, Button } from 'react-native';
import { useSelector } from 'react-redux';
import { COLORS } from '../../constants';

import { styles } from './styles';

const Place = () => {
  const { data, selected }  = useSelector((state) => state.places);
  const place = data.find((place) => place.id === selected.id);
  return (
    <View style={styles.container}>
      <Image resizeMode="cover" source={{ uri: place.imageSrc }} style={styles.image}/>
      <View style={styles.textContainer}>
        <Text style={styles.title}>{place.title}</Text>
        <Text style={styles.address}>{place.address}</Text>
        <Text style={styles.telephone}>{place.telephone}</Text>
        <View style={styles.buttonContainer}>
          <Button style={styles.button} onPress={() => {}} title="Ubicación" color={COLORS.primary}></Button>
          <View style={{ width: 16 }}></View>
          <Button style={styles.button} onPress={() => {}} title="Cómo Llegar" color={COLORS.primary}></Button>
        </View>
      </View>
    </View>
  );
};

export default Place;