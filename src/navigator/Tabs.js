import React from 'react';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import Icon from 'react-native-vector-icons/Ionicons';
import { Inicio } from '../screens/Inicio';
import { Genero } from '../screens/Genero';
import { MiBiblioteca } from '../screens/MiBiblioteca';
import { Entrega } from '../screens/Entrega';
import { Platform, Text } from 'react-native'


export const Tabs = () => {
    return Platform.OS === 'ios' ? <TabsIOS /> : <TabsAndroid />
}

const BottomTabAndroid = createMaterialBottomTabNavigator();


function TabsAndroid() {
    return (

        <BottomTabAndroid.Navigator
         barStyle={{ backgroundColor: '#000000' }}
            sceneAnimationEnabled={true}
            
            screenOptions={({ route }) => ({

                tabBarIcon: () => {

                    let iconName = '';
                    switch (route.name) {
                        case 'Inicio':
                            iconName = 'home-outline';
                            break;

                        case 'Genero':
                            iconName = 'newspaper-outline';
                            break;

                        case 'MiBiblioteca':
                            iconName = 'book-outline';
                            break;

                            case 'Entrega':
                            iconName = 'hourglass-outline';
                            break;

                       
                    }
                    return <Icon name={iconName} size={22} color={"#fff"} />;
                }
            })
            }

        >
            <BottomTabAndroid.Screen name="Inicio" component={Inicio} />
            <BottomTabAndroid.Screen name="Genero" component={Genero} />
            <BottomTabAndroid.Screen name="MiBiblioteca" component={MiBiblioteca} />
            <BottomTabAndroid.Screen name="Entrega" component={Entrega} />
        </BottomTabAndroid.Navigator>
    );
}

