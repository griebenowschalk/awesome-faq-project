import { PropsWithChildren, ReactNode } from 'react';

import './Common.scss';

interface TooltipProps {
    children: ReactNode;
    text: string;
}

function Tooltip({ children, text }: PropsWithChildren<TooltipProps>) {
    return (
        <div className="tooltip">
            {children}
            <div className="tooltip-text">{text}</div>
        </div>
    );
}

export default Tooltip;
