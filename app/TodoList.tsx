import { observer } from 'mobx-react'
import React, { Component } from 'react';
import { FlatList, AppRegistry, ScrollView } from 'react-native';
import { todoStore } from './todoStore';
import TodoItem from './TodoItem';

@observer
export class TodoList extends Component {

    render() {
        return(
            <ScrollView>
                <FlatList data={todoStore.todo}

                renderItem={
                    ({item}) => <TodoItem todo={item} />
                }
                keyExtractor={(item, index) => index.toString()}

                />
            </ScrollView>
        );
    }
}

AppRegistry.registerComponent("ReactNativeTest", () => TodoList)