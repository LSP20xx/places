import React from 'react';
import { View, FlatList, SafeAreaView, Image, Text, ScrollView, TouchableOpacity } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { selectPlace } from '../../store/actions';
import { selectCategory } from '../../store/actions';

import { styles } from './styles';

const Home = ({ navigation }) => {
  const { data } = useSelector((state) => state.places);
  const dispatch = useDispatch();

  const onSelectedCategory = (name) => {
    dispatch(selectCategory(name));
    navigation.navigate(name);
  };

  const onSelectedPlace = (item) => {
    dispatch(selectPlace(item.id));
    navigation.navigate('Local');
  };

  const renderHomePlaceItem = ({ item }) => (
    <TouchableOpacity style={styles.placesContainer} onPress={() => onSelectedPlace(item)}>
      <Image source={{ uri: item.imageSrc }} style={styles.image} />
      <Text style={styles.title}>{item.title}</Text>
    </TouchableOpacity>
  );

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <View style={styles.categoriesContainer}>
          <View style={styles.row}>
            <View style={styles.column}>
              <TouchableOpacity style={styles.categoryContainer} onPress={() => onSelectedCategory('Restaurantes')}>
                <Text style={styles.categoryTitle}>Restaurantes</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.column}>
              <TouchableOpacity style={styles.categoryContainer} onPress={() => onSelectedCategory('Bares')}>
                <Text style={styles.categoryTitle}>Bares</Text>
              </TouchableOpacity>
            </View>
          </View>

          <View style={styles.row}>
            <View style={styles.column}>
              <TouchableOpacity style={styles.categoryContainer} onPress={() => onSelectedCategory('Panaderías')}>
                <Text style={styles.categoryTitle}>Panaderías</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.column}>
              <TouchableOpacity style={styles.categoryContainer} onPress={() => onSelectedCategory('Cafeterías')}>
                <Text style={styles.categoryTitle}>Cafeterías</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
        <Text style={styles.sectionTitle}>Lugares cerca tuyo</Text>
        <FlatList
          style={styles.scrollContainer}
          horizontal
          data={data}
          keyExtractor={(item) => item.id.toString()}
          renderItem={renderHomePlaceItem}
        />
        <Text style={styles.sectionTitle}>Lugares destacados</Text>
        <FlatList
          style={styles.scrollContainer}
          horizontal
          data={data}
          keyExtractor={(item) => item.id.toString()}
          renderItem={renderHomePlaceItem}
        />
      </ScrollView>
    </SafeAreaView>
  );
};

export default Home;