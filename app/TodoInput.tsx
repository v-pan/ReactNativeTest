import React, { Component } from 'react'
import { View, AppRegistry, TextInput, Text, Button } from 'react-native';
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

    @observable titleInput: string

    @action onChange(event) {
        this.titleInput = event.nativeEvent.text
    }

    @action onPress() {
        todoStore.addTodo(this.titleInput, false)
        this.titleInput = ""
    }

    render() {
        return(
            <View style={{width: "50%"}}>
                <View style={{
                    backgroundColor: "grey"
                }}>
                    <TextInput
                        placeholder="Todo title"
                        value={this.titleInput}
                        onChange={this.onChange}
                    />
                </View>

                <View style={{paddingVertical: 5}} />

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

AppRegistry.registerComponent("ReactNativeTest", () => TodoInput)