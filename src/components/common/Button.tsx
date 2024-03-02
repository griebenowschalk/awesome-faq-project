import { memo } from 'react';
import './Common.scss';

export interface ButtonProps {
    text?: string;
    className?: string;
    onClick?: () => void;
    type?: 'button' | 'submit' | 'reset';
}

function ButtonComponent({
    text = '',
    className,
    onClick = () => {},
    type = 'button',
}: ButtonProps) {
    return (
        <button type={type} className={className} onClick={onClick}>
            {text}
        </button>
    );
}

export const Button = memo(ButtonComponent);
