import { observable } from "mobx";

export class Todo {
    @observable title: string;
    @observable description: string;
    @observable completed: boolean;

    constructor(title: string, description: string, completed: boolean) {
        this.title = title;
        this.description = description;
        this.completed = completed;
    }
}
