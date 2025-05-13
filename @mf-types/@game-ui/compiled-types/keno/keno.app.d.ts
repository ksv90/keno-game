import { JSX } from 'react';
import { IKenoConnector, IKenoGame, IKenoReceiver } from './keno.types';
export interface KenoProps {
    readonly game: IKenoGame;
    readonly connector: IKenoConnector;
    readonly receiver: IKenoReceiver;
    readonly ui?: JSX.Element;
    readonly rules?: JSX.Element;
}
export declare function KenoApp(props: KenoProps): JSX.Element;
