import { JSX, PropsWithChildren } from 'react';
export interface CountdownServiceGame {
    on(eventName: 'countdown', listener: (value: number) => void): this;
    off(eventName: 'countdown', listener: (value: number) => void): this;
    setCountdown(value: number): void;
}
export interface CountdownProviderProps {
    readonly game: CountdownServiceGame;
    readonly countdown?: number;
}
export declare const CountdownServiceProvider: (props: PropsWithChildren<CountdownProviderProps>) => JSX.Element;
