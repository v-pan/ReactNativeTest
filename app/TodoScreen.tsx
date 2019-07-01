import React from 'react';
import { TodoInput } from './TodoInput';
import { TodoList } from './TodoList';
import { View, StyleSheet, Button } from 'react-native';
import { NavigationComponent } from 'react-navigation';
import { todoStore } from './todoStore';

interface IProps {
    navigation: NavigationComponent
}

export default class TodoScreen extends React.Component<IProps> {
    render() {
        return (
            <View style={styles.container}>
                <View style={styles.inputContainer}>
                    <View style={styles.input}>
                        <Button
                            title="Add a todo"
                            onPress={() => {this.props.navigation.navigate('Input')}}
                        />
                    </View>

                    <View style={styles.divider} />

                    <View style={styles.clearButton}>
                        <Button 
                            title="Clear all todos"
                            onPress={() => {todoStore.clearData()}}
                        />
                    </View>
                </View>
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
    },
    inputContainer: {
        flexDirection: 'row'
    },
    input: {
        flex: 1
    },
    clearButton: {
        justifyContent: 'center',
        flex: 1
    }
});