import { Connector } from "../base";
import { SessionResponse, TicketCancelResponse, TicketCreateResponse } from "../schemes";
import { IKenoConnector } from './keno.types';
export declare class KenoConnector extends Connector implements IKenoConnector {
    getSessionData(): Promise<SessionResponse>;
    ticketCreate(bet: number, spots: readonly number[]): Promise<TicketCreateResponse>;
    ticketCancel(ticketId: string): Promise<TicketCancelResponse>;
}
