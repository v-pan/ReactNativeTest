import React from 'react'
import { View } from 'react-native';
import { NavigationComponent } from 'react-navigation';

interface IProps {
    navigation: NavigationComponent
}

export default class TestScreen extends React.Component<IProps> {
    render() {
        return (
            <View />
        )
    }
}