import React from 'react';
import { Header } from 'react-native-elements';

interface AppHeaderProps {
    title: string,
}

export const AppHeader = ({ title }: AppHeaderProps) => {
    return (
        <Header centerComponent={{ text: title, style: { color: '#fff' } }} />
    );
};