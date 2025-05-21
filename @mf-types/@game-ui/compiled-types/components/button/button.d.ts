import { CSSProperties, JSX, PropsWithChildren } from 'react';
import { buttonVariants } from './button.css';
export type ButtonVariant = keyof typeof buttonVariants;
export interface IButtonProps {
    readonly variant: ButtonVariant;
    readonly onClick: null | (() => void);
    readonly text?: string;
    readonly style?: CSSProperties;
    readonly size?: number;
}
export declare function Button(props: PropsWithChildren<IButtonProps>): JSX.Element;
