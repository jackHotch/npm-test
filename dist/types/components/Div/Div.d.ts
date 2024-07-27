import React from 'react';
export interface DivProps {
    variant: string;
    children: string;
    onClick?: () => void;
}
declare const Div: ({ variant, children, onClick }: DivProps) => React.JSX.Element;
export default Div;
