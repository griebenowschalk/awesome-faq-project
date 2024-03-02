import { useState } from 'react';
import { Tooltip } from '../common/Tooltip';
import { strings } from '@/localisation/strings';
import { createQuestion } from '@/redux/slices/questionsSlice';
import { useDispatch } from 'react-redux';
import { Button } from '@/components/common/Button';
import { Checkbox } from '@/components/common/Checkbox';
import { TextField } from '@/components/common/TextField';

import './Question.scss';
import '@/scss/global.scss';

const DELAY_TIME = 5000;

function QuestionCreator() {
    const [label, setLabel] = useState('');
    const [answer, setAnswer] = useState('');
    const [delay, setDelay] = useState(false);
    const dispatch = useDispatch();

    const handleCheckboxChange = (value: boolean) => {
        setDelay(value);
    };

    const isValidString = (
        str: string,
        isQuestion: boolean = false,
    ): boolean => {
        const regex = isQuestion ? /^.{10,}\?$/ : /^.{10,}$/;
        return regex.test(str);
    };

    const handleAddQuestion = (
        labelParam: string,
        answerParam: string,
    ): void => {
        if (isValidString(labelParam, true) && isValidString(labelParam)) {
            setLabel('');
            setAnswer('');

            const callback = () => {
                dispatch(createQuestion({ labelParam, answerParam }));
            };

            if (delay) {
                setTimeout(() => {
                    callback();
                }, DELAY_TIME);
            } else callback();
        } else return;
    };

    return (
        <div className="question-creator">
            <Tooltip text={strings.create_tooltip}>
                <h2>{strings.create_question}</h2>
            </Tooltip>
            {/* <form onSubmit={handleAddQuestion}> */}
            <TextField
                value={label}
                name="question"
                labelText={strings.question_label}
                onInputChange={setLabel}
            />
            <TextField
                value={answer}
                name="answer"
                labelText={strings.answer_label}
                type="textArea"
                onInputChange={setAnswer}
            />

            <div className="button-container">
                <Button
                    text={strings.create_button}
                    className="success-bg"
                    // type="submit"
                    onClick={() => handleAddQuestion(label, answer)}
                />

                <Checkbox
                    value={delay}
                    name="delayCheckbox"
                    labelText={strings.delay_label}
                    onInputChange={handleCheckboxChange}
                />
            </div>
            {/* </form> */}
        </div>
    );
}

export default QuestionCreator;
