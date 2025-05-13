import { IServerTicket } from "../../helpers";
import { TicketWinListData, TotalWinData } from "../../schemes";
import { KenoConnectorMockServer } from './keno.connector';
import { KenoMachineMockContext } from './keno.machine';
export declare class KenoServerMock implements KenoMachineMockContext, KenoConnectorMockServer {
    #private;
    constructor(payouts: Record<number, readonly number[]>);
    get mode(): number;
    get balance(): number;
    get bet(): number;
    get countdown(): number;
    get tickets(): Iterable<IServerTicket>;
    get balls(): Iterable<number>;
    countdownDecrement(): void;
    addBall(): number;
    isRoundReady(): boolean;
    winsCalculate(): TotalWinData & TicketWinListData;
    roundStart(): void;
    roundClose(): void;
    ticketCreate(bet: number, spots: readonly number[]): IServerTicket;
    ticketCancel(ticketId: string): IServerTicket;
}
