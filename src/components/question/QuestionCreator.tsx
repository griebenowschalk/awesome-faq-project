import { useEffect, useState } from 'react';

import Button from '@/components/common/Button';
import Checkbox from '@/components/common/Checkbox';
import TextField from '@/components/common/TextField';
import Tooltip from '@/components/common/Tooltip';

import './Question.scss';
import { strings } from '@/localisation/strings';

function QuestionCreator({
    addQuestion,
    updateModel,
}: {
    addQuestion: (label: string, answer: string, delay: boolean) => void;
    updateModel?: { label: string; answer: string }; // if specified changes the component's behaviour to support an update
}) {
    const [label, setLabel] = useState('');
    const [answer, setAnswer] = useState('');
    const [delay, setDelay] = useState(false);

    useEffect(() => {
        if (updateModel) {
            setLabel(updateModel.label);
            setAnswer(updateModel.answer);
        }
    }, [updateModel]);

    const handleCheckboxChange = (value: boolean) => {
        setDelay(value);
    };

    const handleAddQuestion = (): void => {
        if (!label || !answer) {
            return;
        }
        addQuestion(label, answer, delay);
        setLabel('');
        setAnswer('');
    };

    return (
        <div className="flex flex-column align-start gap-3">
            <Tooltip text={strings.create_tooltip}>
                <h2>{strings.create_question}</h2>
            </Tooltip>
            <TextField
                value={label}
                name="question"
                labelText="Question"
                onInputChange={setLabel}
            />
            <TextField
                value={answer}
                name="answer"
                labelText="Answer"
                type="textArea"
                onInputChange={setAnswer}
            />

            <div className="flex align-center gap-3">
                <Button
                    text={updateModel ? 'Update Question' : 'Create question'}
                    className="bg-success"
                    onClick={() => handleAddQuestion()}
                />

                <Checkbox
                    value={delay}
                    name="delayCheckbox"
                    labelText="Delay creating question"
                    onInputChange={handleCheckboxChange}
                />
            </div>
        </div>
    );
};

export default QuestionCreator;