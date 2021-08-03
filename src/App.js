import React from 'react';
import MyDrawer from './navegacao/MyDrawer';
import { NavigationContainer } from '@react-navigation/native';
import { AuthProvider } from './services/auth';

export default function App() {
    return (
        <>
        <AuthProvider>
        <NavigationContainer>
             <MyDrawer/>
        </NavigationContainer>
        </AuthProvider>
        </>
    );
};