export class Question {
    readonly id: string;
    question: string;
    answer: string;
    isVisible: boolean;

    constructor(question = '', answer = '') {
        this.id = question + answer + Math.random() * 1000;
        this.question = question;
        this.answer = answer;
        this.isVisible = false;
    }
}
