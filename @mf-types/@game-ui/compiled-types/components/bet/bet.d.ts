import { JSX } from 'react';
export interface BetProps {
    readonly bet: number;
    readonly presets: readonly number[];
    readonly onChangeBet: (bet: number) => void;
    readonly onBet: () => void;
}
export declare function Bet(props: BetProps): JSX.Element;
