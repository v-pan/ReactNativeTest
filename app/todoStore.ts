import { observable, action, computed, flow } from "mobx";
import { Todo } from "./todo";
import { AsyncStorage } from 'react-native';

const _storageKey = "TODO_LIST"

class TodoStore {

    constructor() {
        this.todoList = []
    }

    @observable todoList: Todo[]
    @observable state = "pending"

    @action addTodo(title: string, completed: boolean) {
        this.todoList.push(new Todo(title, completed))
        this.storeData()
    }

    @action toggleCompleted(target: Todo) {
        target.completed = !target.completed
        this.storeData()
    }

    @computed get todo() {
        return this.todoList.slice()
    }

    @action
    getData = flow(function * () {
        try {
            const value = yield AsyncStorage.getItem(_storageKey)
            if(value !== null) {
                JSON.parse(value).forEach((element: Todo) => {
                    this.todoList.push(new Todo(element.title, element.completed))
                });
            }
            this.state = "done"
            console.log("Fetched:", value)
        } catch(e) {
            this.state = "error"
            console.log("Error getting data!")
        }
    })

    @action
    clearData = flow(function * () {
        try {
            yield AsyncStorage.setItem(_storageKey, "")
            this.todoList = []
            this.state = "done"
        } catch (error) {
            this.state = "error"
            console.log("Clear error!")
        }
    })

    storeData = async () => {
        try {
            await AsyncStorage.setItem(_storageKey, JSON.stringify(this.todoList))
        } catch (e) {
            console.log("Saving error!")
        }
    }
}

export const todoStore = new TodoStore
todoStore.getData()