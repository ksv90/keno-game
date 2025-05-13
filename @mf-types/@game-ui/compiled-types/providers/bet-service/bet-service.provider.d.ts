import { JSX, PropsWithChildren } from 'react';
export interface BetServiceGame {
    on(eventName: 'totalBetChanged', listener: (value: number) => void): this;
    off(eventName: 'totalBetChanged', listener: (value: number) => void): this;
    changeBet(value: number): void;
}
export interface BetProviderProps {
    readonly game: BetServiceGame;
    readonly bet?: number;
}
export declare const BetServiceProvider: (props: PropsWithChildren<BetProviderProps>) => JSX.Element;
