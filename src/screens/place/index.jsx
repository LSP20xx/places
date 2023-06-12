import React, { useState } from 'react';
import Ionicons from "@expo/vector-icons/Ionicons";
import { useDispatch, useSelector } from 'react-redux';
import { View, Image, Text, Button, Alert } from 'react-native';
import { getCurrentPositionAsync, requestForegroundPermissionsAsync } from 'expo-location'; 

import { COLORS } from '../../constants';
import { addToFavorites } from '../../store/actions';
import { styles } from './styles';
import { MapPreview } from '../../components';

const Place = () => {
  const [pickedLocation, setPickedLocation] = useState(null);
  const dispatch = useDispatch();
  const { data, selected }  = useSelector((state) => state.places);
  const place = data.find((place) => place.id === selected.id);

  const onAddToFavorites = () => {
    dispatch(addToFavorites(place));
  };

  const verifyPermissions = async () => {
    const { status } = await requestForegroundPermissionsAsync();
    if (status !== 'granted') {
      Alert.alert(
        'Permisos insuficientes',
        'Necesitás dar permisos de localización para usar esta app',
        [{ text: 'Ok' }]
      );
      return false;
    }
    return true;
  };

  const onHandlerGetLocation = async () => {
    const hasPermission = await verifyPermissions();
    if (!hasPermission) {
      return;
    }
    try {
      const location = await getCurrentPositionAsync({
        timeout: 5000,
      });
      const { latitude, longitude } = location.coords;
      setPickedLocation({
        lat: latitude,
        lng: longitude,
      });
    } catch (err) {
      Alert.alert(
        'No se pudo obtener la ubicación',
        'Intente nuevamente más tarde o elija una ubicación en el mapa',
        [{ text: 'Ok' }]
      );
    }
  };

  return (
    <View style={styles.container}>
      <Image resizeMode="cover" source={{ uri: place.imageSrc }} style={styles.image}/>
      <View style={styles.textContainer}>
        <View style={styles.headerTextContainer}>
          <Text style={styles.title}>{place.title}</Text>
          <Ionicons onPress={onAddToFavorites} name="heart" size={24} color={COLORS.primary} />
        </View>
        <Text style={styles.address}>{place.address}</Text>
        <Text style={styles.telephone}>{place.telephone}</Text>
        <View style={styles.buttonContainer}>
          <Button style={styles.button} onPress={onHandlerGetLocation} title="Ubicación" color={COLORS.primary}></Button>
          <View style={{ width: 16 }}></View>
          <Button style={styles.button} onPress={() => {}} title="Cómo Llegar" color={COLORS.primary}></Button>
        </View>
        <MapPreview location={pickedLocation} style={styles.mapPreview}>
          <Text style={styles.noLocationText}>No se pudo obtener la ubicación</Text>
        </MapPreview>
      </View>
    </View>
  );
};

export default Place;