import { ChangeEvent } from 'react';

import './styles.scss';

interface TextFieldProps {
    value?: string;
    name?: string;
    labelText?: string;
    type?: 'text' | 'textArea';
    onInputChange: (
        event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
    ) => void;
}

export const TextField = ({
    value = '',
    name = '',
    labelText = 'undefined',
    type = 'text',
    onInputChange,
}: TextFieldProps) => {
    let input = (
        <input
            name={name}
            className="input-field"
            type="text"
            value={value}
            onChange={onInputChange}
        />
    );

    if (type == 'textArea') {
        input = (
            <textarea
                className="input-field"
                name={name}
                rows={3}
                cols={50}
                value={value}
                onChange={onInputChange}
            />
        );
    }

    return (
        <div className="textfield">
            <label htmlFor={name}>{labelText}</label>
            {input}
        </div>
    );
};
