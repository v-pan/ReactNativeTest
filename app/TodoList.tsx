import { observer } from 'mobx-react'
import React, { Component } from 'react';
import { FlatList, View, Text, AppRegistry, StyleSheet, ScrollView } from 'react-native';
import { todoStore } from './todoStore';
import TodoItem from './TodoItem';

@observer
export class TodoList extends Component {

  render() {
    return(
      <ScrollView style={{height: 200, backgroundColor: "grey"}}>
        <FlatList data={todoStore.todo}

          renderItem={
            ({item}) => <TodoItem title={item.title} />
          }
          keyExtractor={(item, index) => index.toString()}

        />
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({

})

AppRegistry.registerComponent("ReactNativeTest", () => TodoList)