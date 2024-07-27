import React from 'react';

interface ButtonProps {
    variant: string;
    children: string;
    onClick?: () => void;
}
declare const Button: ({ variant, children, onClick }: ButtonProps) => React.JSX.Element;

interface DivProps {
    variant: string;
    children: string;
    onClick?: () => void;
}
declare const Divider: ({ variant, children, onClick }: DivProps) => React.JSX.Element;

export { Button, Divider };
