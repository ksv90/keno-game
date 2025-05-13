import { IServerTicket, SpotIdList } from "../../helpers";
import { SessionResponse, TicketCancelResponse, TicketCreateResponse } from "../../schemes";
import { IKenoConnector } from '../keno.types';
import { KenoMessengerMock } from './keno.messenger';
export interface KenoConnectorMockServer {
    get balance(): number;
    get bet(): number;
    get tickets(): Iterable<IServerTicket>;
    get balls(): Iterable<number>;
    ticketCreate(bet: number, spots: SpotIdList): IServerTicket;
    ticketCancel(ticketId: string): IServerTicket;
}
export declare class KenoConnectorMock implements IKenoConnector {
    #private;
    constructor(messenger: KenoMessengerMock, server: KenoConnectorMockServer);
    getSessionData(): Promise<SessionResponse>;
    ticketCreate(bet: number, spots: SpotIdList): Promise<TicketCreateResponse>;
    ticketCancel(ticketId: string): Promise<TicketCancelResponse>;
}
