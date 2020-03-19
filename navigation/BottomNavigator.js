import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import { MaterialCommunityIcons } from 'react-native-vector-icons';

import HomeScreen from '../screen/Home';
import NewPostScreen from '../screen/NewPost';
import AboutScreen from '../screen/About';

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

function HomeStack() {
    return (
        <Stack.Navigator>
            <Stack.Screen name='Muro de confesiones' component={HomeScreen} />
        </Stack.Navigator>
    );
}

function NewPostStack() {
    return (
        <Stack.Navigator>
            <Stack.Screen name='Nueva confesión' component={NewPostScreen} />
        </Stack.Navigator>
    );
}

function AboutStack() {
    return (
        <Stack.Navigator>
            <Stack.Screen name='¿Quiénes somos?' component={AboutScreen}/>
        </Stack.Navigator>
    );
}

export default function Navigation() {
    return (
        <NavigationContainer>
            <Tab.Navigator>
                <Tab.Screen 
                //título del menu inferior(bottomNavigator)
                name='Home'
                //componente al que se dirige
                component={HomeStack}
                //icono
                options={{
                    tabBarIcon: ({ color, size }) => (
                        <MaterialCommunityIcons name='home' color={'#F19A3E'} size={size}/>
                    )
                }}
                />
                <Tab.Screen
                name='Nueva'
                component={NewPostStack}
                options={{
                    tabBarIcon: ({ color, size }) => (
                        <MaterialCommunityIcons name='plus-box' color={'#F19A3E'} size={size} />
                    )
                }}
                />
                <Tab.Screen
                name='Nosotros'
                component={AboutStack}
                options={{
                    tabBarIcon: ({ color, size }) => (
                        <MaterialCommunityIcons name='information' color={'#F19A3E'} size={size} />
                    )
                }}
                />
            </Tab.Navigator>
        </NavigationContainer>
    )
}






