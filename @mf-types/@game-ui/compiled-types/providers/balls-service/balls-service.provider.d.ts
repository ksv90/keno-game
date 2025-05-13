import { BallList } from "../../helpers";
import { JSX, PropsWithChildren } from 'react';
export interface BallsServiceGame {
    on(eventName: 'ballAdded', listener: (value: number) => void): this;
    on(eventName: 'ballsCleared', listener: () => void): this;
    off(eventName: 'ballAdded', listener: (value: number) => void): this;
    off(eventName: 'ballsCleared', listener: () => void): this;
    addBalls(...values: number[]): void;
}
export interface BallsServiceProviderProps {
    readonly game: BallsServiceGame;
    readonly balls?: BallList;
}
export declare const BallsServiceProvider: (props: PropsWithChildren<BallsServiceProviderProps>) => JSX.Element;
