import React from 'react';
import MyDrawer from './navegacao/MyDrawer';
import { NavigationContainer } from '@react-navigation/native';
import Escolha from './teste';


export default function App() {
    return (
        // <Escolha/>
        <>
        <NavigationContainer>
             <MyDrawer/>
        </NavigationContainer>
        </>
    );
};