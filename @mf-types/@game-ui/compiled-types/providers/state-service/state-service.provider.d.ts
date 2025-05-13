import { JSX, PropsWithChildren } from 'react';
import { StateService } from './state-service.context';
export interface StateServiceGame {
    on(eventName: 'roundStarted' | 'roundCompleted', listener: () => void): this;
    off(eventName: 'roundStarted' | 'roundCompleted', listener: () => void): this;
}
export interface StateServiceProviderProps {
    readonly game: StateServiceGame;
    readonly state: StateService['state'];
}
export declare const StateServiceProvider: (props: PropsWithChildren<StateServiceProviderProps>) => JSX.Element;
