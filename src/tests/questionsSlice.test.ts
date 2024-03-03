import questionsSlice, {
    initialState,
    createQuestion,
} from '@/redux/slices/questionsSlice';
import { afterEach, describe, expect, test } from 'vitest';
import { act } from '@testing-library/react';

describe('questionsSlice', () => {
    test('initialize slice with initialValue', () => {
        const questionSliceInit = questionsSlice(initialState, {
            type: 'unknown',
        });
        expect(questionSliceInit).toBe(initialState);
    });

    afterEach(() => {});

    test('should create a question', () => {
        const question = {
            question: 'What is the capital of France?',
            answer: 'Paris',
        };
        const state = questionsSlice(initialState, createQuestion(question));
        expect(state.questions.length).toBe(1);
        expect(state.questions[0].question).toBe('What is the capital of France?');
    });
});
