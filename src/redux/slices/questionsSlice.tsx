import { createSlice } from '@reduxjs/toolkit';
import { Question } from '@/models/question';
import { strings } from '@/localisation/strings';

const DELAY_TIME = 5000;

export interface QuestionsState {
    questions: Question[];
}

interface QuestionPayload {
    label: string;
    answer: string;
    delay: boolean;
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
            const { label, answer, delay } = action.payload as QuestionPayload;
            const callback = () => {
                state.questions.push(new Question(label, answer));
            };

            if (delay) {
                setTimeout(() => {
                    callback();
                }, DELAY_TIME);
            } else callback();
        },
        deleteQuestion: (state, action) => {
            const { index } = action.payload as QuestionPayload;
            state.questions.splice(index, 1);
        },
        sortQuestions: (state) => {
            state.questions.sort((a, b) => {
                return a.label.localeCompare(b.label);
            });
        },
        clearQuestions: (state) => {
            state.questions = [];
        },
        showAnswer: (state, action) => {
            const { id } = action.payload as QuestionPayload;
            const question = state.questions.find(
                (question) => question.id === id,
            );
            if (question) {
                question.isVisible = true;
            }
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
