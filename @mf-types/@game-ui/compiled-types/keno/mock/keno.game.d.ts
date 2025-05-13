import { BallList, ITicket, ITicketWin, IUserWin } from "../../helpers";
import { type IEmitter } from '@ksv90/decorators';
import { IKenoGame, IKenoGameEvents } from '../keno.types';
export interface IKenoGameMockEvents extends IKenoGameEvents {
    ticketWin: [ticket: ITicket & ITicketWin];
}
export interface KenoGameMock extends IEmitter<IKenoGameMockEvents> {
}
export declare class KenoGameMock implements IKenoGame {
    #private;
    start(): void;
    stop(): void;
    updateBalance(value: number): void;
    changeBet(value: number): void;
    addTickets(...tickets: ITicket[]): void;
    removeTickets(...ticketIds: string[]): void;
    clearTickets(): void;
    roundStart(users: number): void;
    roundComplete(balls: BallList, userWins: readonly IUserWin[]): void;
    setCountdown(value: number): void;
    addBalls(...values: number[]): void;
    clearBalls(): void;
    ticketWins(...ticketWins: ITicketWin[]): void;
    setWin(value: number): void;
}
