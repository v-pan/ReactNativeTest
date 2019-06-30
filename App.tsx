import { createStackNavigator, createAppContainer } from 'react-navigation'
import TodoScreen from './app/TodoScreen';
import TestScreen from './app/TestScreen'
import React, { Component } from 'react';

const AppNavigator = createStackNavigator({
    Home: TodoScreen,
    Test: TestScreen
}, {
    initialRouteName: "Home"
})

const AppContainer = createAppContainer(AppNavigator)

export default class App extends Component {
    render() {
        return <AppContainer />
    }
}