import { ISpotData } from "..";
import { JSX } from 'react';
export interface SpotListProps {
    readonly spots: readonly ISpotData[];
    readonly onClick?: (id: number) => void;
}
export declare function SpotList(props: SpotListProps): JSX.Element;
