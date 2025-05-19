import { JSX, PropsWithChildren } from 'react';
export interface ContentProps {
    readonly onRemove: (ticketId: string) => void;
}
export declare function ContentPanel({ onRemove }: PropsWithChildren<ContentProps>): JSX.Element;
