import React, { useEffect } from 'react';
import { View, FlatList, SafeAreaView, Image, Text, ScrollView, TouchableOpacity, } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { selectPlace } from '../../store/actions';
import { selectCategory } from '../../store/actions';
import { styles } from './styles';
import { getUser, addUser } from '../../store/actions';

const Home = ({ navigation }) => {

  const { data } = useSelector((state) => state.places);
  const { userId, email } = useSelector((state) => state.auth);
  const { user } = useSelector((state) => state.user);
  const dispatch = useDispatch();

  useEffect(() => {
    const getUserData = async () => {
      dispatch(getUser(userId));
    };
  
    const addUserIfNull = async () => {
      if (user === null) {
        dispatch(
          addUser({
            userId: userId,
            email: email,
            datetimeSignUp: new Date().getTime(),
            favorites: [],
            image: '',
          })
        );
      }
    };
  
    getUserData()
      .then(() => {
        addUserIfNull();
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);


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
                <Image source={require('../../../assets/restaurantes.png')} style={styles.categoryImage} resizeMode='stretch'/>
              </TouchableOpacity>
            </View>
            <View style={styles.column}>
              <TouchableOpacity style={styles.categoryContainer} onPress={() => onSelectedCategory('Bares')}>
                <Text style={styles.categoryTitle}>Bares</Text>
                <Image source={require('../../../assets/bares.png')} style={styles.categoryImage} resizeMode='stretch'/>
              </TouchableOpacity>
            </View>
          </View>

          <View style={styles.row}>
            <View style={styles.column}>
              <TouchableOpacity style={styles.categoryContainer} onPress={() => onSelectedCategory('Panaderías')}>
                <Text style={styles.categoryTitle}>Panaderías</Text>
                <Image source={require('../../../assets/panaderias.png')} style={styles.categoryImage} resizeMode='stretch'/>
              </TouchableOpacity>
            </View>
            <View style={styles.column}>
              <TouchableOpacity style={styles.categoryContainer} onPress={() => onSelectedCategory('Cafeterías')}>
                <Text style={styles.categoryTitle}>Cafeterías</Text>
                <Image source={require('../../../assets/cafeterias.png')} style={styles.categoryImage} resizeMode='stretch'/>
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