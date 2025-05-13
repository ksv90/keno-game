import { ITicket } from "../../helpers";
export interface AddTicketAction {
    readonly type: 'add';
    readonly payload: {
        readonly ticket: ITicket;
    };
}
export interface RemoveTicketAction {
    readonly type: 'remove';
    readonly payload: {
        readonly ticketId: string;
    };
}
export interface UpdateTicketsAction {
    readonly type: 'update';
    readonly payload: {
        readonly tickets: readonly ITicket[];
    };
}
export type TicketReducerState = readonly ITicket[];
export type TicketReducerAction = AddTicketAction | RemoveTicketAction | UpdateTicketsAction;
export declare function ticketServiceReducer(tickets: TicketReducerState, action: TicketReducerAction): TicketReducerState;
