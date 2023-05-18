import { StyleSheet } from "react-native";

export const styles = StyleSheet.create(
    {
        container: {
          backgroundColor: theme.colors.white,
          borderRadius: 8,
          shadowColor: theme.colors.black,
          shadowOpacity: 0.2,
          shadowOffset: { width: 0, height: 2 },
          shadowRadius: 4,
          elevation: 2,
          marginHorizontal: 16,
          marginVertical: 8,
          flexDirection: 'row',
          alignItems: 'center',
        },
        image: {
          width: 80,
          height: 80,
          borderRadius: 8,
          margin: 8,
        },
        textContainer: {
          flex: 1,
          paddingVertical: 8,
          paddingHorizontal: 12,
        },
        title: {
          fontSize: 16,
          fontWeight: 'bold',
        },
        description: {
          fontSize: 14,
          marginTop: 4,
        },
      }
);