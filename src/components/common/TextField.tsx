import { ChangeEvent } from 'react';

import './Common.scss';

interface TextFieldProps {
    value?: string;
    name?: string;
    labelText?: string;
    type?: 'text' | 'textArea';
    onInputChange: (value: string) => void;
}

function TextField({
    value = '',
    name = '',
    labelText = 'undefined',
    type = 'text',
    onInputChange,
}: TextFieldProps) {
    console.log('Enter Textfield');
    const handleInputChange = (
        event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
    ) => {
        onInputChange(event.target.value);
    };

    let input = (
        <input
            id={name}
            className="input-field"
            type="text"
            value={value}
            onChange={handleInputChange}
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
                onChange={handleInputChange}
            />
        );
    }

    return (
        <div className="textfield">
            <label htmlFor={name}>{labelText}</label>
            {input}
        </div>
    );
}

export default TextField;
