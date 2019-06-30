import { observable, action, computed } from "mobx";
import { Todo } from "./todo";

class TodoStore {
    @observable todoList = [
        // new Todo("Test0", false),
        // new Todo("Test1", false),
        // new Todo("Test2", false),
        // new Todo("Test3", false)
    ]

    @action addTodo(title: string, completed: boolean) {
        this.todoList.push(new Todo(title, completed))
    }

    @computed get todo() {
        return this.todoList.slice()
    }
}

export const todoStore = new TodoStore