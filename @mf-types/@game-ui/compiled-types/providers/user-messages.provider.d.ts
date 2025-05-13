import { IReceiver } from "../base";
import { ITicketWin } from "../helpers";
import { JSX, PropsWithChildren } from 'react';
export interface UserMessagesProviderGame {
    changeBet(value: number): void;
    updateBalance(value: number): void;
    ticketWins(...ticketWins: ITicketWin[]): void;
    setWin(value: number): void;
}
export interface UserMessagesProviderProps {
    readonly game: UserMessagesProviderGame;
    readonly receiver: IReceiver;
    readonly channel?: string;
}
export declare const UserMessagesProvider: (props: PropsWithChildren<UserMessagesProviderProps>) => JSX.Element;
