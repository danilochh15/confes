import React from 'react';
import { StyleSheet, View } from 'react-native';

export default function Card(props) {
    return (
    <View style={styles.card}>
        <View style={styles.cardContent}>
            {props.children}
        </View>
    </View>
    );
}

const styles = StyleSheet.create ({
    card: {
        borderRadius: 6,
        elevation: 3,
        backgroundColor: 'white',
        marginHorizontal: 4,
        marginVertical: 0.5
    },

    cardContent: {
        marginHorizontal: 5,
        marginVertical: 10,
    }
});