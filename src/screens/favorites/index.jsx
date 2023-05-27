import React from 'react';
import { FlatList, SafeAreaView, Text } from 'react-native';
import { FavoriteItem } from '../../components/index';
import { FAVORITES } from '../../constants';

import { styles } from './styles';

const Favorites = () => {

  
    const renderFavoriteItem = ({ item }) => (
      <FavoriteItem
        title={item.title}
        address={item.address}
        imageSrc={item.imageSrc}
      />
    );
  
    return (
      <SafeAreaView style={styles.container}>
        <Text style={styles.sectionTitle}>Favoritos</Text>
        <FlatList
            data={FAVORITES}
            renderItem={renderFavoriteItem}
            keyExtractor={(item) => item.id}
        />
      </SafeAreaView>
    );
  };
  

export default Favorites;