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
                <View style={styles.aside}>
                    <Switch
                        style={{
                            flex:1
                        }}
                    ></Switch>

                    <Text style={styles.title}>
                        {this.props.title}
                    </Text>
                </View>
                <View style={styles.body}>
                    <View>
                        <Text>
                            Placeholder content
                        </Text>
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
    body: {
        flexDirection: 'column',
        flex: 4
    }
})

AppRegistry.registerComponent("ReactNativeTest", () => TodoItem)