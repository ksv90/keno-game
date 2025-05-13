import { IReceiver } from "../base";
import { ITicket, IUserWin, SpotIdList } from "../helpers";
import { JSX, PropsWithChildren } from 'react';
export interface RoomMessagesProviderGame {
    addTickets(...tickets: ITicket[]): void;
    removeTickets(...ticketIds: string[]): void;
    roundStart(users: number): void;
    roundComplete(spots: SpotIdList, userWins: readonly IUserWin[]): void;
    setCountdown(countdown: number): void;
    addBalls(...values: number[]): void;
}
export interface RoomMessagesProviderProps {
    readonly game: RoomMessagesProviderGame;
    readonly receiver: IReceiver;
    readonly channel?: string;
}
export declare const RoomMessagesProvider: (props: PropsWithChildren<RoomMessagesProviderProps>) => JSX.Element;
