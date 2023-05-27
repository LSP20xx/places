import { StyleSheet } from 'react-native';

import { COLORS } from '../../constants';

export const styles = StyleSheet.create(
    {
        container: {
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: COLORS.white,
        },
        title: {
            fontSize: 22,
            fontWeight: 'normal',
            color: COLORS.texts,
        },
    }
);