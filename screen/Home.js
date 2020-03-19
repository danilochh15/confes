import React, { useState } from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';
import Card from '../card';

export default function Home() {
    const [reviews, setReviews] = useState([
        {title: 'App en desarrollo, proximamente operativa pa los cabres'},
        {title: 'App en desarrollo, proximamente operativa pa los cabres'},
        {title: 'App en desarrollo, proximamente operativa pa los cabres'},
        {title: 'App en desarrollo, proximamente operativa pa los cabres'},
        {title: 'App en desarrollo, proximamente operativa pa los cabres'},
        {title: 'App en desarrollo, proximamente operativa pa los cabres'},
        {title: 'App en desarrollo, proximamente operativa pa los cabres'},
        {title: 'App en desarrollo, proximamente operativa pa los cabres'},
        {title: 'App en desarrollo, proximamente operativa pa los cabres'},
    ]);

    return (
        <View style={styles.container}>
            <FlatList
            data={reviews}
            renderItem={({ item }) =>(
                <Card>
                <Text>{item.title}</Text>
                </Card>
            )}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#F19A3E',
      alignItems: 'center',
      justifyContent: 'center',
    },
  });