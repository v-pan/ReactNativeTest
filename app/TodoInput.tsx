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
        this.onDescriptionChange = this.onDescriptionChange.bind(this)
        this.onPress = this.onPress.bind(this)
    }

    @observable titleValue = ""
    @observable descriptionValue = ""

    @action onTitleChange(event) {
        this.titleValue = event.nativeEvent.text
    }

    @action onDescriptionChange(event) {
        this.descriptionValue = event.nativeEvent.text
    }

    @action onPress() {
        const titleValue = this.titleValue.trim()
        const descriptionValue = this.descriptionValue.trim()
        if(titleValue != "") {
            todoStore.addTodo(titleValue, descriptionValue, false)
            this.titleValue = ""
            this.descriptionValue = ""
        }
    }

    render() {
        return(
            <View style={styles.root}>
                <View style={styles.inputView}>
                    <TextInput
                        placeholder="Todo title"

                        value={this.titleValue}
                        onChange={this.onTitleChange}

                        style={styles.titleInput}
                    />

                    <View style={styles.divider} />

                    <TextInput
                        placeholder="Todo description"

                        value={this.descriptionValue}
                        onChange={this.onDescriptionChange}

                        multiline={true}
                        numberOfLines={3}
                        style={styles.descriptionInput}
                    >
                    </TextInput>
                </View>

                <View style={styles.divider} />

                <View style={{flex:1}}>
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
        flex: 1
    },
    divider: {
        marginBottom: 10
    },
    titleInput: {
        backgroundColor: "grey",
        maxHeight: 180,
        fontSize: 20,
        lineHeight: 30
    },
    descriptionInput: {
        backgroundColor: "grey",
        maxHeight: 180,
        lineHeight: 20
    }
})

AppRegistry.registerComponent("ReactNativeTest", () => TodoInput)