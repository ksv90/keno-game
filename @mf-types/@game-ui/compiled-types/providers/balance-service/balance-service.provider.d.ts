import { JSX, PropsWithChildren } from 'react';
export interface BalanceServiceGame {
    on(eventName: 'balanceUpdated', listener: (value: number) => void): this;
    off(eventName: 'balanceUpdated', listener: (value: number) => void): this;
    updateBalance(value: number): void;
}
export interface BalanceProviderProps {
    readonly game: BalanceServiceGame;
    readonly balance?: number;
}
export declare const BalanceServiceProvider: (props: PropsWithChildren<BalanceProviderProps>) => JSX.Element;
