import { JSX } from 'react';
export interface SceneProps {
    readonly onSpotsChange: (spotId: number) => void;
    readonly spotList: number[];
}
export declare function ScenePanel(props: SceneProps): JSX.Element;
