import { FC } from 'react';
import { ISpotData } from '../spots';
import { ticketVariants } from './tickets.css';
export type TicketVariant = keyof typeof ticketVariants;
export interface ITicketData {
    readonly id: string;
    readonly variant: TicketVariant;
    readonly totalBet: string;
    readonly spots: readonly ISpotData[];
}
export interface TicketProps extends ITicketData {
    readonly onClick?: (id: string) => void;
}
export declare const Ticket: FC<TicketProps>;
