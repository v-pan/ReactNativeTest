import React, { Component } from 'react'
import { View, AppRegistry, TextInput, Text, Button, StyleSheet } from 'react-native';
import { observable, computed, action } from 'mobx';
import { observer } from 'mobx-react';
import { todoStore } from './todoStore'

@observer
export class TodoInput extends Component {

    constructor(props) {
        super(props)
        this.onTitleChange = this.onTitleChange.bind(this)
        this.onPress = this.onPress.bind(this)
    }

    @observable titleInput = ""

    @action onTitleChange(event) {
        this.titleInput = event.nativeEvent.text
    }

    @action onPress() {
        const value = this.titleInput.trim()
        if(value != "") {
            todoStore.addTodo(value, false)
            this.titleInput = ""
        }
    }

    render() {
        return(
            <View style={styles.root}>
                <View style={styles.inputView}>
                    <TextInput
                        placeholder="Todo title"
                        value={this.titleInput}
                        onChange={this.onTitleChange}
                        style={styles.input}
                    />

                    <View style={styles.divider} />

                    <TextInput
                        placeholder="Todo description"
                        multiline={true}
                        style={styles.input}
                    >
                    </TextInput>
                </View>

                <View style={styles.divider} />

                <View>
                    <Button
                        title="Add Todo"
                        onPress={this.onPress}
                    />
                </View>
                
            </View>
        )
    }
}

const styles = StyleSheet.create({
    root: {
        flex: 1
    },
    inputView: {

    },
    divider: {
        marginBottom: 10
    },
    input: {
        backgroundColor: "grey",
        maxHeight: 180
    }
})

AppRegistry.registerComponent("ReactNativeTest", () => TodoInput)