import React, { Component } from 'react';
import { View, AppRegistry, Text, StyleSheet } from 'react-native';

interface IProps{
    title: string
}

export default class TodoItem extends Component<IProps> {
    render() {
        return(
            <View>
                <View>
                    <Text style={styles.title}>{this.props.title}</Text>
                </View>
                <View>
                    <Text>
                        Placeholder content
                    </Text>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    title: {
        fontSize: 30,
        fontWeight: 'bold'
    }
})

AppRegistry.registerComponent("ReactNativeTest", () => TodoItem)