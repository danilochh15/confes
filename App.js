import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Navigation from './navigation/BottomNavigator';
import firebase from 'firebase';

var config = {
  databaseURL: 'https://confes-7a4ef.firebaseio.com',
  projectId: 'confes-7a4ef',
};

if (! firebase.apps.length) { 
  firebase.initializeApp (config); 
}

export default function App() {
  return <Navigation/>
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
