export class Question {
    readonly id: string;
    label: string;
    answer: string;
    isVisible: boolean;

    constructor(label = '', answer = '') {
        this.id = label + answer + Math.random() * 1000;
        this.label = label;
        this.answer = answer;
        this.isVisible = false;
    }
}
