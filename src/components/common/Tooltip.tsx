import { PropsWithChildren, ReactNode } from 'react';

import './styles.scss';

interface TooltipProps {
    children: ReactNode;
    text: string;
}

export const Tooltip = ({
    children,
    text,
}: PropsWithChildren<TooltipProps>) => {
    return (
        <div className="tooltip">
            {children}
            <div className="tooltip-text">{text}</div>
        </div>
    );
};
