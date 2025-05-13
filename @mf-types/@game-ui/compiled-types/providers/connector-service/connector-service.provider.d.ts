import { ITicket, SpotIdList } from "../../helpers";
import { SessionResponse, TicketCancelResponse, TicketCreateResponse } from "../../schemes";
import { JSX, PropsWithChildren } from 'react';
export interface ConnectorServiceConnector {
    getSessionData(): Promise<SessionResponse>;
    ticketCreate(bet: number, spots: SpotIdList): Promise<TicketCreateResponse>;
    ticketCancel(ticketId: string): Promise<TicketCancelResponse>;
}
export interface ConnectorServiceGame {
    updateBalance(value: number): void;
    changeBet(value: number): void;
    addTickets(...tickets: ITicket[]): void;
    removeTickets(...ticketIds: string[]): void;
    addBalls(...values: number[]): void;
}
export interface IConnectorServiceData {
    readonly userChannel: string;
    readonly roomChannel: string;
}
export interface ConnectorServiceProviderProps {
    readonly connector: ConnectorServiceConnector;
    readonly game: ConnectorServiceGame;
    readonly onDataChange?: (connectorServiceData: IConnectorServiceData) => void;
}
export declare const ConnectorServiceProvider: (props: PropsWithChildren<ConnectorServiceProviderProps>) => JSX.Element;
