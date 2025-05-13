import { JSX, PropsWithChildren } from 'react';
export interface WinServiceGame {
    on(eventName: 'totalWin', listener: (value: number) => void): this;
    off(eventName: 'totalWin', listener: (value: number) => void): this;
    setWin(value: number): void;
}
export interface WinProviderProps {
    readonly game: WinServiceGame;
    readonly win?: number;
}
export declare const WinServiceProvider: (props: PropsWithChildren<WinProviderProps>) => JSX.Element;
