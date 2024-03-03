import './styles.scss';

export interface ButtonProps {
    text?: string;
    className?: string;
    onClick?: () => void;
    type?: 'button' | 'submit' | 'reset';
}

export const Button = ({
    text = '',
    className,
    onClick = () => {},
    type = 'button',
}: ButtonProps) => {
    return (
        <button type={type} className={className} onClick={onClick}>
            {text}
        </button>
    );
};
