import React from 'react';
import { TodoInput } from './TodoInput';
import { TodoList } from './TodoList';
import { View, StyleSheet, Button } from 'react-native';
import { NavigationComponent } from 'react-navigation';

interface IProps {
    navigation: NavigationComponent
}

export default class TodoScreen extends React.Component<IProps> {
    render() {
        return (
            <View style={styles.container}>
                <Button
                    title="Go to test screen"
                    onPress={() => this.props.navigation.navigate('Test')}
                />
                <TodoInput />
                <View style={styles.divider} />
                <TodoList />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        margin: 20
    },
    divider: {
        padding: 5
    }
});