import { JSX, PropsWithChildren } from 'react';
export interface ContentProps {
    readonly onRemove: (ticketId: string) => void;
}
export declare function Content({ onRemove }: PropsWithChildren<ContentProps>): JSX.Element;
