import { ISpotData } from "..";
import { JSX } from 'react';
export interface SpotBoardProps {
    readonly spots: readonly ISpotData[];
    readonly onClick?: (id: number) => void;
}
export declare function SpotBoard(props: SpotBoardProps): JSX.Element;
