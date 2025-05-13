import { MessengerMock } from "../../base";
import { IServerTicket, IServerTicketWin, IServerUserWin } from "../../helpers";
import { IKenoReceiver } from '../keno.types';
export declare const ROOM_CHANNEL = "room-channel";
export declare const USER_CHANNEL = "user-channel";
export interface KenoMessengerMockBroadcastEvents {
    balanceUpdated: number;
    totalBetChanged: number;
}
export interface KenoMessengerMock extends MessengerMock<KenoMessengerMockBroadcastEvents> {
}
export declare class KenoMessengerMock extends MessengerMock<KenoMessengerMockBroadcastEvents> implements IKenoReceiver {
    #private;
    constructor();
    sendBalanceUpdate(value: number): void;
    sendBetChange(value: number): void;
    sendWin(totalWin: number, ticketWins: IServerTicketWin[]): void;
    sendCreatedTicket(ticket: IServerTicket): void;
    sendCancelledTicket(ticketId: string): void;
    sendRoundStart(users: number): void;
    sendRoundComplete(balls: number[], userWins: IServerUserWin): void;
    sendRoundProcess(added: number, balls: number[]): void;
    sendRoundCountdown(countdown: number): void;
}
