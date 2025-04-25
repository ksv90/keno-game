import { type IStorer, Storer } from '@ksv90/decorators';
import type { Ticket } from '@ksv90/game-ui/keno';

export interface KenoStore {
  readonly balance: number;
  readonly totalBet: number;
  readonly win: number;
  readonly countdown: number;
  readonly tickets: Map<string, Ticket>;
  readonly roundNumbers: Set<number>;
}

export interface KenoContext extends IStorer<KenoStore> {}

export
@Storer({ balance: 0, totalBet: 0, win: 0, countdown: 0, tickets: new Map(), roundNumbers: new Set() } satisfies KenoStore)
class KenoContext {
  addTicket(ticket: Ticket): void {
    const tickets = this.get('tickets');
    tickets.set(ticket.ticketId, ticket);
  }

  removeTicket(ticketId: string): void {
    const tickets = this.get('tickets');
    tickets.delete(ticketId);
  }

  clearTickets(): void {
    const tickets = this.get('tickets');
    tickets.clear();
  }

  getTicketById(ticketId: string): Ticket {
    const tickets = this.get('tickets');
    const ticket = tickets.get(ticketId);
    if (!ticket) {
      throw new Error('ticket не найден');
    }
    return ticket;
  }

  hasRoundNumber(value: number): boolean {
    const roundNumbers = this.get('roundNumbers');
    return roundNumbers.has(value);
  }

  addRoundNumber(value: number): void {
    const roundNumbers = this.get('roundNumbers');
    roundNumbers.add(value);
  }

  clearRoundNumbers(): void {
    const roundNumbers = this.get('roundNumbers');
    roundNumbers.clear();
  }
}
