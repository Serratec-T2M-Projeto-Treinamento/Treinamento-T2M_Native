import React from 'react';
import MyDrawer from './navegacao/MyDrawer';
import { NavigationContainer } from '@react-navigation/native';

export default function App() {
    return (
        <>
        <NavigationContainer>
        <MyDrawer/>
        </NavigationContainer>
        </>
    );
};