import React from 'react';
import { TodoInput } from './TodoInput';
import { TodoList } from './TodoList';
import { View, StyleSheet } from 'react-native';

export default class TodoScreen extends React.Component {
    render() {
        return (
            <View style={styles.container}>
                <TodoInput />
                <View style={{padding:5}} />
                <TodoList />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        margin: 20
    }
});