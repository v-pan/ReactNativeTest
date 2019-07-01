import { createStackNavigator, createAppContainer } from 'react-navigation'
import TodoScreen from './app/TodoScreen';
import InputScreen from './app/InputScreen'
import React, { Component } from 'react';

const AppNavigator = createStackNavigator({
    Home: TodoScreen,
    Input: InputScreen
}, {
    initialRouteName: "Home"
})

const AppContainer = createAppContainer(AppNavigator)

export default class App extends Component {
    render() {
        return <AppContainer />
    }
}