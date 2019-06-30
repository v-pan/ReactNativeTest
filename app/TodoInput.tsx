import React, { Component } from 'react'
import { View, AppRegistry, TextInput, Text, Button, StyleSheet } from 'react-native';
import { observable, computed, action } from 'mobx';
import { observer } from 'mobx-react';
import { todoStore } from './todoStore'

@observer
export class TodoInput extends Component {

    constructor(props) {
        super(props)
        this.onChange = this.onChange.bind(this)
        this.onPress = this.onPress.bind(this)
    }

    @observable titleInput = ""

    @action onChange(event) {
        this.titleInput = event.nativeEvent.text
    }

    @action onPress() {
        if(this.titleInput != "") {
            todoStore.addTodo(this.titleInput, false)
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
                        onChange={this.onChange}
                    />
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
        width: "50%"
    },
    inputView: {
        backgroundColor: "grey"
    },
    divider: {
        paddingVertical: 5
    }
})

AppRegistry.registerComponent("ReactNativeTest", () => TodoInput)