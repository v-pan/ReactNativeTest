import React, { Component } from 'react';
import { View, AppRegistry, Text, StyleSheet, Switch } from 'react-native';
import { observer } from 'mobx-react';
import { Todo } from './todo';
import { action } from 'mobx';
import { todoStore } from './todoStore';

interface IProps{
    todo: Todo
}

@observer
export default class TodoItem extends Component<IProps> {

    constructor(props) {
        super(props)
        this.onValueChange = this.onValueChange.bind(this)
    }

    @action onValueChange() {
        todoStore.toggleCompleted(this.props.todo)
    }

    render() {
        return(
            <View style={styles.root}>
                <View style={styles.header}>
                    <Switch 
                        style={styles.aside}
                        value={this.props.todo.completed}
                        onValueChange={this.onValueChange}
                    />

                    <Text style={styles.title}>
                        {this.props.todo.title}
                    </Text>
                </View>
                <View style={styles.body}>
                    <View style={styles.aside}>{/* Hacky solution to implement a <span> like element */}</View>

                    <View style={styles.content}>
                        <Text>{this.props.todo.description}</Text>
                    </View>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    root:{
        flexDirection: 'column',
        padding: 5
    },
    header: {
        flexDirection: 'row'
    },
    body: {
        flexDirection: 'row'
    },
    title: {
        flex: 4,
        fontSize: 30,
        fontWeight: 'bold'
    },
    aside: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    },
    content: {
        flexDirection: 'column',
        flex: 4
    }
})

AppRegistry.registerComponent("ReactNativeTest", () => TodoItem)