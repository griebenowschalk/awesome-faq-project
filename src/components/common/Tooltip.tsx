import { PropsWithChildren, ReactNode, memo } from 'react';

import './Common.scss';

interface TooltipProps {
    children: ReactNode;
    text: string;
}

function TooltipComponent({ children, text }: PropsWithChildren<TooltipProps>) {
    console.log('Enter Tooltip');
    return (
        <div className="tooltip">
            {children}
            <div className="tooltip-text">{text}</div>
        </div>
    );
}

export const Tooltip = memo(TooltipComponent);
