export default class Task {
    id: number;
    isCompleted: boolean;

    constructor(public title: string) {
        this.id = Date.now();
        this.isCompleted = false;
    }
};