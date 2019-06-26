import React from 'react';
import { StyleSheet, View, StatusBar } from 'react-native';
import { TodoList } from './app/TodoList'
import { TodoInput } from './app/TodoInput';
import { observable } from 'mobx';

export default function App() {
  return (
    <View style={styles.container}>
      <TodoInput />
      <TodoList />
    </View>
  );
}

const styles = StyleSheet.create({
    container: {
        paddingTop: StatusBar.currentHeight,
        margin: 20
    }
});
