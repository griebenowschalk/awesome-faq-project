import { MouseEvent, useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
    deleteQuestion,
    SelectorState,
    showAnswer,
} from '@/redux/slices/questionsSlice';
import { strings } from '@/localisation/strings';

import './Question.css';

function QuestionList() {
    const dispatch = useDispatch();
    const { questions } = useSelector(
        (state: SelectorState) => state.questions,
    );
    const isEmpty = useMemo(() => questions.length == 0, [questions]);

    const handleDeleteClick = (event: MouseEvent<unknown>, index: number) => {
        event.stopPropagation();
        dispatch(deleteQuestion(index));
    };

    const emptyTemplate = (
        <div className="empty-card">
            <b>{strings.no_questions_yet}</b>
        </div>
    );

    const listTemplate = questions.map((q, i) => (
        <div
            key={q.id}
            onClick={() => dispatch(showAnswer(i))}
            className="question"
        >
            <div className="question-text">
                <b>{q.label}</b>
                {q.isVisible ? <div>{q.answer}</div> : <></>}
            </div>
            <button
                className="question-delete"
                onClick={(e) => handleDeleteClick(e, i)}
            >
                x
            </button>
        </div>
    ));

    return (
        <div className="question-list">
            {isEmpty ? emptyTemplate : listTemplate}
        </div>
    );
}

export default QuestionList;
