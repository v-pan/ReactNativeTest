import { observable } from "mobx";

export class Todo {
    @observable title: string;
    @observable completed: boolean;

    constructor(title: string, completed: boolean) {
        this.title = title;
        this.completed = completed;
    }
}
