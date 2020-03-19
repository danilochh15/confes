import React from 'react';
import { StyleSheet, View, Text, TextInput, Button, Dimensions } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';

function writeUserData(email, fname, lname) { 
    firebase.database (). ref ('UsersList/'). push ({ 
        email, 
        fname, 
        lname 
    }). then ((data) => { 
        // éxito callback 
        console.log ( 'data', data) 
    }). catch ((error) => { 
        // error callback 
        console.log ('error', error) 
    }) 
}

export default function NewPost() {

    return (
        <View style={styles.container}>

            <View style={styles.formContent}>
                <ScrollView>
                    <TextInput
                        style={styles.input}
                        placeholder='Título de tu confesión'
                        clearButtonMode
                        maxLength={10}
                    />
                    <TextInput
                        style={{
                            borderColor: 'black',
                            padding: 3,
                            marginTop: 20,
                            marginBottom: 20,
                            height: 200,
                            width: 280,
                            fontSize: 18
                        }}
                        placeholder='Contenido de tu confesión'
                        multiline
                    />
                </ScrollView>
                <Button
                    color='orange'
                    title='Publicar'
                />
            </View>

        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'orange',
        justifyContent: 'center',
        alignItems: 'center'
    },
    formContent: {
        backgroundColor: 'white',
        borderRadius: 20,
        margin: 10,
        padding: 10,
    },
    input: {
        borderColor: 'black',
        padding: 3,
        marginTop: 20,
        marginBottom: 20,
        height: 40,
        width: 280,
        fontSize: 18
    }
})