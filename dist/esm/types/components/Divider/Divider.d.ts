import React from 'react';
interface DivProps {
    variant: string;
    children: string;
    onClick?: () => void;
}
declare const Divider: ({ variant, children, onClick }: DivProps) => React.JSX.Element;
export default Divider;
