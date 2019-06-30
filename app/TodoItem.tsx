import React, { Component } from 'react';
import { View, AppRegistry, Text, StyleSheet, Switch } from 'react-native';
import { observer } from 'mobx-react';

interface IProps{
    title: string
}

@observer
export default class TodoItem extends Component<IProps> {
    render() {
        return(
            <View style={styles.root}>
                <View style={styles.header}>
                    <Switch style={styles.aside} />

                    <Text style={styles.title}>
                        {this.props.title}
                    </Text>
                </View>
                <View style={styles.body}>
                    <View style={styles.aside}>{/* Hacky solution to implement a <span> like element */}</View>

                    <View style={styles.content}>
                        <Text>Placeholder textPlaceholder textPlaceholder textPlaceholder textPlaceholder textPlaceholder textPlaceholder textPlaceholder textPlaceholder textPlaceholder textPlaceholder text</Text>
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
        alignItems: "center",
        width: "100%"
    },
    content: {
        flexDirection: 'column',
        flex: 4
    }
})

AppRegistry.registerComponent("ReactNativeTest", () => TodoItem)