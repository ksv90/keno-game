import { JSX } from 'react';
export interface ControlsMediatorProps {
    readonly makeBet: () => void;
    readonly onClear: () => void;
    readonly onRandom: () => void;
}
export declare function ControlsPanel(props: ControlsMediatorProps): JSX.Element;
