import React, { useEffect } from 'react';
import { FlatList, SafeAreaView, Text } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { PlaceItem } from '../../components/index';
import { selectPlace, filterPlaces } from '../../store/actions';

import { styles } from './styles';

const Places = ({ navigation }) => {
  const dispatch = useDispatch();
  const { selectedCategory }= useSelector((state) => state.categories);
  const { filteredPlaces } = useSelector((state) => state.places);

  const onSelected = (item) => {
      dispatch(selectPlace(item.id));
      navigation.navigate('Local');
  }

  useEffect(() => {
      dispatch(filterPlaces(selectedCategory.name));
  }, []);


  const renderPlaceItem = ({ item }) => (
    <PlaceItem
      title={item.title}
      address={item.address}
      imageSrc={item.imageSrc}
      onPress={onSelected.bind(this, item)}
    />
  );

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.sectionTitle}>{selectedCategory.name}</Text>
      <FlatList
          data={filteredPlaces}
          renderItem={renderPlaceItem}
          keyExtractor={(item) => item.id}
      />
    </SafeAreaView>
  );
};
  

export default Places;