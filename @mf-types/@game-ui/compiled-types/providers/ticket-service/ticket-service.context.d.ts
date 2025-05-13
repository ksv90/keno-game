import { ITicket } from "../../helpers";
export interface TicketService {
    get tickets(): readonly ITicket[];
    get addTickets(): (...tickets: ITicket[]) => void;
    get removeTickets(): (...ticketIds: string[]) => void;
    get clearTickets(): () => void;
}
export declare const TicketServiceContext: import("react").Context<TicketService | null>;
export declare const useTicketService: () => TicketService;
