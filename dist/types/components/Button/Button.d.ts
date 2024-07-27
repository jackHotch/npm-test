import React from 'react';
interface ButtonProps {
    variant: string;
    children: string;
    onClick?: () => void;
}
declare const Button: ({ variant, children, onClick }: ButtonProps) => React.JSX.Element;
export default Button;
