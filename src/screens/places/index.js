import React from 'react';
import { View, Button, FlatList } from 'react-native';
import { Card } from '../../components/index';
import { PLACES } from '../../constants';


const Places = ({ navigation }) => {

  
    const renderCard = ({ item }) => (
      <Card
        title={item.title}
        description={item.address}
        onPress={() => navigation.navigate('Lugar')}
      />
    );
  
    return (
        <FlatList
            data={PLACES}
            renderItem={renderCard}
            keyExtractor={(item) => item.id}
        />
    );
  };
  

export default Places;