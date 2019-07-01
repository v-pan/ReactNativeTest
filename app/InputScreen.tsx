import React from 'react'
import { View, StyleSheet } from 'react-native';
import { NavigationComponent } from 'react-navigation';
import { observer } from 'mobx-react';
import { TodoInput } from './TodoInput';

interface IProps {
    navigation: NavigationComponent
}

@observer
export default class InputScreen extends React.Component<IProps> {
    render() {
        return (
            <View style={styles.container}>
                <TodoInput/>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        margin: 20
    }
})