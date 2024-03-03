import { ChangeEvent } from 'react';

import './styles.scss';

interface CheckboxProps {
    value?: boolean;
    name?: string;
    labelText?: string;
    onInputChange: (value: boolean) => void;
}

export const Checkbox = ({
    value = false,
    name = '',
    labelText = 'undefined',
    onInputChange,
}: CheckboxProps) => {
    const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
        onInputChange(event.target.checked);
    };

    return (
        <div className="checkbox">
            <input
                type="checkbox"
                name={name}
                checked={value}
                onChange={handleInputChange}
            />
            <label htmlFor={name}>{labelText}</label>
        </div>
    );
};
