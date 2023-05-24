import React from 'react';
import { FlatList, SafeAreaView } from 'react-native';
import { PlaceItem } from '../../components/index';
import { PLACES } from '../../constants';

import { styles } from './styles';


const Places = ({ navigation }) => {

    const onSelected = (item) => {
        navigation.navigate('Lugar', { placeId: item.id });
    }
  
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
        <FlatList
            data={PLACES}
            renderItem={renderPlaceItem}
            keyExtractor={(item) => item.id}
        />
      </SafeAreaView>
    );
  };
  

export default Places;