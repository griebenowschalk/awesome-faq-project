import './styles.scss';

export interface ButtonProps {
    text?: string;
    className?: string;
    onClick?: () => void;
    type?: 'button' | 'submit' | 'reset';
    disabled?: boolean;
}

export const Button = ({
    text = '',
    className,
    onClick = () => {},
    type = 'button',
    disabled = false,
}: ButtonProps) => {
    return (
        <button
            type={type}
            className={className}
            onClick={onClick}
            disabled={disabled}
        >
            {text}
        </button>
    );
};
