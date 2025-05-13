import type { ITicket } from '@game-ui/keno';
import { type IStorer, Storer } from '@ksv90/decorators';

export interface KenoStore {
  readonly balance: number;
  readonly totalBet: number;
  readonly win: number;
  readonly countdown: number;
  readonly tickets: Map<string, ITicket>;
  readonly balls: Set<number>;
}

export interface KenoContext extends IStorer<KenoStore> {}

export
@Storer({ balance: 0, totalBet: 0, win: 0, countdown: 0, tickets: new Map(), balls: new Set() } satisfies KenoStore)
class KenoContext {
  addTicket(ticket: ITicket): void {
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

  getTicketById(ticketId: string): ITicket {
    const tickets = this.get('tickets');
    const ticket = tickets.get(ticketId);
    if (!ticket) {
      throw new Error('ticket не найден');
    }
    return ticket;
  }

  hasBall(value: number): boolean {
    const balls = this.get('balls');
    return balls.has(value);
  }

  addBalls(value: number): void {
    const balls = this.get('balls');
    balls.add(value);
  }

  clearBalls(): void {
    const balls = this.get('balls');
    balls.clear();
  }
}
