import { IServerTicket, ITicket } from "../../helpers";
import { JSX, PropsWithChildren } from 'react';
export interface TicketServiceGame {
    on(eventName: 'ticketAdded', listener: (ticket: ITicket) => void): this;
    on(eventName: 'ticketRemoved', listener: (ticketId: string) => void): this;
    on(eventName: 'ticketsCleared', listener: () => void): this;
    off(eventName: 'ticketAdded', listener: (ticket: ITicket) => void): this;
    off(eventName: 'ticketRemoved', listener: (ticketId: string) => void): this;
    off(eventName: 'ticketsCleared', listener: () => void): this;
    addTickets(...tickets: ITicket[]): void;
    removeTickets(...ticketIds: string[]): void;
    clearTickets(): void;
}
export interface TicketServiceProviderProps {
    readonly game: TicketServiceGame;
    readonly tickets?: readonly IServerTicket[];
}
export declare const TicketServiceProvider: (props: PropsWithChildren<TicketServiceProviderProps>) => JSX.Element;
