import { JSX } from 'react';
import { spotVariants } from './spot.css.ts';
export type SpotVariant = keyof typeof spotVariants;
export interface ISpotData {
    readonly id: number;
    readonly variant: SpotVariant;
}
export interface SpotProps extends ISpotData {
    readonly onClick?: (id: number) => void;
}
export declare function Spot(props: SpotProps): JSX.Element;
