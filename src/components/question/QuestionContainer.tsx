import { Tooltip } from '@/components/common/Tooltip';
import { strings } from '@/localisation/strings';
import { useCallback, useMemo } from 'react';
import {
    QuestionsState,
    SelectorState,
    clearQuestions,
    sortQuestions,
} from '@/redux/slices/questionsSlice';
import { useDispatch, useSelector } from 'react-redux';

import QuestionList from './QuestionList';
import { Button } from '@/components/common/Button';

import '@/scss/global.scss';
import './Question.scss';

function QuestionContainer() {
    const dispatch = useDispatch();
    const { questions } = useSelector(
        (state: any) => state.questions as QuestionsState,
    );
    const hasQuestions = useMemo(() => questions.length > 0, [questions]);

    const sort = useCallback(() => {
        dispatch(sortQuestions());
    }, []);

    const clear = useCallback(() => {
        dispatch(clearQuestions());
    }, []);

    return (
        <div className="question-container">
            <Tooltip text={strings.created_tooltip}>
                <h2>{strings.created_questions}</h2>
            </Tooltip>

            <QuestionList questions={questions} />

            {hasQuestions ? (
                <div className="button-container">
                    <Button
                        text={strings.sort_button}
                        className="info-bg"
                        onClick={sort}
                    />
                    <Button
                        text={strings.delete_button}
                        className="alert-bg"
                        onClick={clear}
                    />
                </div>
            ) : (
                <></>
            )}
        </div>
    );
}

export default QuestionContainer;
