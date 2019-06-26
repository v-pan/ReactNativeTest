import { observable, action, computed } from "mobx";
import { Todo } from "./todo";

class TodoStore {
    @observable todoList = []

    @action addTodo(title: string, completed: boolean) {
        this.todoList.push(new Todo(title, completed))
        console.log("Added todo:", this.todoList)
    }

    @computed get todo() {
        console.log("Returning:", this.todoList)
        return this.todoList.slice()
    }
}

export const todoStore = new TodoStore