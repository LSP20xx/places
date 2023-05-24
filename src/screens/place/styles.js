import { StyleSheet } from 'react-native';

import { COLORS } from '../../constants';

export const styles = StyleSheet.create(
    {
        container: {
            flex: 1,
        },
        textContainer: {
            flex: 1,
            paddingVertical: 8,
            paddingHorizontal: 12,
        },
        buttonContainer: {
            flexDirection: 'row',
            justifyContent: 'center',
            marginTop: 16,
        },
        button: {
            width: 150,
        },
        image: {
            width: "100%",
            height: 260,
        },
        title: {
            fontSize: 22,
            fontWeight: 'normal',
            color: COLORS.texts,
        },
        address: {
            fontSize: 14,
            marginTop: 4,
            color: COLORS.texts,
        },
    }
);