import { Question } from '@/models/question';
import reducer, {
    initialState,
    createQuestion,
    showAnswer,
    sortQuestions,
    deleteQuestion,
    clearQuestions,
    QuestionsState,
} from '@/redux/slices/questionsSlice';
import { describe, expect, test } from 'vitest';

describe('questionsSlice', () => {
    let currentState: QuestionsState = initialState;

    test('initialize slice with initialValue', () => {
        expect(reducer(undefined, { type: 'unknown' })).toEqual(initialState);
    });

    test('should remove all questions for the list', () => {
        expect(reducer(currentState, clearQuestions())).toEqual({ questions: [] })
    });

    test('should add a new question to the list', () => {
        const newQuestion = new Question('What is your name?', 'My name is John Doe');

        expect(currentState.questions).toHaveLength(1);

        currentState = reducer(currentState, createQuestion(newQuestion));

        expect(currentState.questions).toHaveLength(2);
        expect(currentState.questions[1].question).toEqual(newQuestion.question);
        expect(currentState.questions[1].answer).toEqual(newQuestion.answer);
    });

    test('should delete a question from the list', () => {
        currentState = reducer(currentState, deleteQuestion({ index: 1 }));
        expect(currentState).toEqual(initialState)
    });

    test('should sort the questions by question', () => {
        const newQuestion = new Question('What is your name?', 'My name is John Doe');
        const newQuestion2 = new Question('Are you old enough?', 'Yes, I am 30 years old');

        currentState = reducer(currentState, createQuestion(newQuestion));
        currentState = reducer(currentState, createQuestion(newQuestion2));

        expect(currentState.questions).toHaveLength(3);
        
        const oldState = currentState;
        currentState = reducer(currentState, sortQuestions());

        expect(currentState.questions[0].question).toEqual(oldState.questions[2].question);
        expect(currentState.questions[1].question).toEqual(oldState.questions[0].question);
        expect(currentState.questions[2].question).toEqual(oldState.questions[1].question);
    })

    test('should show the answer for a question', () => {
        expect(reducer(currentState, showAnswer(currentState.questions[0])).questions[0].isVisible).toBeTruthy();
        expect(reducer(currentState, showAnswer(currentState.questions[0])).questions[0].isVisible).toBeFalsy();
    })
});
