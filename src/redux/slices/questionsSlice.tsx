import { createSlice } from '@reduxjs/toolkit';
import { Question } from '@/models/question';
import { strings } from '@/localisation/strings';

export interface QuestionsState {
    questions: Question[];
}

interface QuestionPayload {
    label: string;
    answer: string;
    id: string;
    index: number;
}

export interface SelectorState {
    [key: string]: QuestionsState;
}

export const initialState: QuestionsState = {
    questions: [
        new Question(
            strings.initial_question_label,
            strings.initial_question_answer,
        ),
    ] as Question[],
};

/**
 * Question slice and actions
 */
const questionsSlice = createSlice({
    name: 'questions',
    initialState,
    reducers: {
        createQuestion: (state, action) => {
            const { label, answer } = action.payload as QuestionPayload;
            state.questions.push(new Question(label, answer));
        },
        deleteQuestion: (state, action) => {
            const { index } = action.payload as QuestionPayload;
            state.questions.splice(index, 1);
        },
        sortQuestions: (state) => {
            state.questions = state.questions.sort((a, b) => {
                return a.label.localeCompare(b.label);
            });
        },
        clearQuestions: (state) => {
            state.questions = [];
        },
        showAnswer: (state, action) => {
            const { id } = action.payload as Question;
            state.questions = state.questions.map((question) => {
                if (question.id === id) {
                    question.isVisible = !question.isVisible;
                }
                return question;
            });
        },
    },
});

export const {
    createQuestion,
    deleteQuestion,
    sortQuestions,
    clearQuestions,
    showAnswer,
} = questionsSlice.actions;
export default questionsSlice.reducer;
