import { ChangeEvent, memo } from 'react';

import './Common.scss';

interface CheckboxProps {
    value?: boolean;
    name?: string;
    labelText?: string;
    onInputChange: (value: boolean) => void;
}

function CheckboxComponent({
    value = false,
    name = '',
    labelText = 'undefined',
    onInputChange,
}: CheckboxProps) {
    console.log('Enter Checkbox');
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
}

export const Checkbox = memo(CheckboxComponent);
