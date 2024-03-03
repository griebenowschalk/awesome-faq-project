import { ChangeEvent, FormEvent, useMemo, useState } from 'react';
import { Tooltip, Button, Checkbox, TextField } from '@/components/common';
import { strings } from '@/localisation/strings';
import { createQuestion } from '@/redux/slices/questionsSlice';
import { useDispatch } from 'react-redux';

import './styles.scss';
import '@/scss/global.scss';

const DELAY_TIME = 5000;
const INITIAL_STATE = { question: '', answer: '' };

interface FormData {
    question: string;
    answer: string;
}
interface FormError {
    question?: string;
    answer?: string;
}

export const QuestionCreator = () => {
    const [formData, setFormData] = useState<FormData>(INITIAL_STATE);
    const [errors, setErrors] = useState<FormError>({});
    const [delay, setDelay] = useState<boolean>(false);
    const dispatch = useDispatch();
    const isFormValid = Object.keys(errors).length === 0;

    const handleInputChange = (
        e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
    ) => {
        const { name, value } = e.target;
        console.log(name, value)
        setFormData({ ...formData, [name]: value });
    };

    const handleCheckboxChange = (value: boolean) => {
        setDelay(value);
    };

    const isValidString = (
        str: string,
        isQuestion: boolean = false,
    ): boolean => {
        const regex = isQuestion ? /^.{10,}\?$/ : /^.{10,}$/;
        return regex.test(str ? str : '');
    };

    const validateForm = () => {
        let isValid = true;
        const newErrors: FormError = {};

        if (!isValidString(formData.question, true)) {
            newErrors.question = strings.error_label;
            isValid = false;
        }

        if (!isValidString(formData.answer)) {
            newErrors.answer = strings.error_answer;
            isValid = false;
        }

        setErrors(newErrors);
        return isValid;
    };

    const handleAddQuestion = (e: FormEvent<HTMLFormElement>): void => {
        e.preventDefault()
        if (validateForm()) {
            const form = { ...formData }
            setFormData(INITIAL_STATE);

            const callback = () => {
                dispatch(createQuestion(form));
            };

            if (delay) {
                setTimeout(() => {
                    callback();
                }, DELAY_TIME);
            } else callback();
        } else return;
    };
    console.log(errors)
    return (
        <div className="question-creator">
            <Tooltip text={strings.create_tooltip}>
                <h2>{strings.create_question}</h2>
            </Tooltip>
            <form className='form-container' onSubmit={handleAddQuestion}>
                <TextField
                    value={formData.question}
                    name="question"
                    labelText={strings.question_label}
                    onInputChange={handleInputChange}
                />
                <TextField
                    value={formData.answer}
                    name="answer"
                    labelText={strings.answer_label}
                    type="textArea"
                    onInputChange={handleInputChange}
                />

                <div className="button-container">
                    <Button
                        text={strings.create_button}
                        className="success-bg"
                        type="submit"
                        // disabled={!isFormValid}
                    />

                    <Checkbox
                        value={delay}
                        name="delayCheckbox"
                        labelText={strings.delay_label}
                        onInputChange={handleCheckboxChange}
                    />
                </div>
            </form>
        </div>
    );
};
