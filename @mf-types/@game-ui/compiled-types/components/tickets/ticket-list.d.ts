import { FC } from 'react';
import { ITicketData } from './ticket';
export interface TicketListProps {
    readonly tickets: readonly ITicketData[];
    readonly onClick?: (id: string) => void;
}
export declare const TicketList: FC<TicketListProps>;
