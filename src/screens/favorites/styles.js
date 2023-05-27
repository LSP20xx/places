import { StyleSheet } from 'react-native';

import { COLORS } from '../../constants';

export const styles = StyleSheet.create(
    {
        container: {
            flex: 1,
            backgroundColor: COLORS.white,
            paddingTop : 20,
        },
        sectionTitle: {
            textAlign: 'center',
            fontSize: 24,
            fontWeight: 'normal',
            color: COLORS.black,
            marginTop: 8,
            marginBottom: 8,
        },
        
    }
);
