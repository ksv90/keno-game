import { JSX } from 'react';
interface ITotalBetProps {
    readonly values: readonly number[];
    readonly currency: string;
    readonly initIndex: number;
    readonly onChange: (value: number) => void;
}
export declare function TotalBet(props: ITotalBetProps): JSX.Element;
export {};
