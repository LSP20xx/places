import { StyleSheet } from 'react-native';

import { COLORS } from '../../constants';

export const styles = StyleSheet.create(
    {
        container: {
            flex: 1,
            backgroundColor: COLORS.white,
            paddingTop: 20,
        },
        title: {
            marginTop: 12,
            marginLeft: 12,
            fontSize: 20,
            fontWeight: 'normal',
            color: COLORS.titles,
        },
        sectionTitle: {
            textAlign: 'center',
            fontSize: 24,
            fontWeight: 'normal',
            color: COLORS.black,
            marginTop: 8,
            marginBottom: 8,
        },
        categoriesContainer: {
            flex: 1,
            flexDirection: 'column',
            marginBottom: 20,
            marginLeft: 20,
            marginRight: 20,
            marginTop: 0,
            
        },
        row: {
            flex: 1,
            flexDirection: 'row',
          },
        column: {
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
          },

        categoryContainer: {
            width: 160,
            height: 130,
            margin: 10,
            backgroundColor: COLORS.white,
            borderRadius: 5,
            shadowColor: COLORS.black,
            shadowOffset: {
                width: 0,
                height: 1,
            },
            shadowOpacity: 0.20,
            shadowRadius: 1.41,
            elevation: 2,
        },
        categoryImage: {
            width: 160,
            height: 165,
            resizeMode: 'cover',
            borderRadius: 5,
        },
        categoryTitle: {
            fontSize: 16,
            fontWeight: 'bold',
            color: COLORS.accent,
            textAlign: 'center',
            marginTop: 8,
            marginLeft: 8,
        },
        scrollContainer: {
            flex: 1,
            marginTop: 10,
            marginLeft: 10,
            marginBottom: 36,
            marginRight: 10,
            borderRadius: 5,

        },
        placesContainer: {
            width: 160, 
            height: 216,
            margin: 2, 
            backgroundColor: COLORS.white,
            borderRadius: 5,
            shadowColor: COLORS.black,
            shadowOffset: {
                width: 0,
                height: 1,
            },
            shadowOpacity: 0.20,
            shadowRadius: 1.41,
            elevation: 2,
        },
        image: {
            width: 160,
            height: 165,
            resizeMode: 'cover',
            borderRadius: 5,
        }
    }
);
