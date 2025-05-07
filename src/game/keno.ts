import { Emitter, type IEmitter } from '@ksv90/decorators';
import type { IKenoGame, IKenoGameEvents, ITicket, ITicketWin, IUserWin } from '@ksv90/game-ui/keno';

import { KenoContext } from './context';

export interface IKenoEvents extends IKenoGameEvents {
  ticketWin: [ticket: ITicket];
}

export interface Keno extends IEmitter<IKenoEvents> {}

export
@Emitter()
class Keno implements IKenoGame {
  #context: KenoContext;

  constructor(context?: KenoContext) {
    this.#context = context ?? new KenoContext();
  }

  start(): void {
    //
  }

  stop(): void {
    //
  }

  updateBalance(value: number): void {
    this.#context.set('balance', value);
    this.emit('balanceUpdated', value);
  }

  changeBet(value: number): void {
    this.#context.set('totalBet', value);
    this.emit('totalBetChanged', value);
  }

  addTickets(...tickets: ITicket[]): void {
    for (const ticket of tickets) {
      this.#context.addTicket(ticket);
      this.emit('ticketAdded', ticket);
    }
  }

  removeTickets(...ticketIds: string[]): void {
    for (const ticketId of ticketIds) {
      this.#context.removeTicket(ticketId);
      this.emit('ticketRemoved', ticketId);
    }
  }

  clearTickets(): void {
    this.#context.clearTickets();
    this.emit('ticketsCleared');
  }

  ticketWins(...ticketWins: ITicketWin[]): void {
    for (const { ticketId, win, hits } of ticketWins) {
      const ticket = this.#context.getTicketById(ticketId);
      const winTicket = { ...ticket, win, hits } satisfies ITicket & ITicketWin;
      this.#context.addTicket(winTicket);
      this.emit('ticketWin', winTicket);
    }
  }

  setCountdown(value: number): void {
    this.#context.set('countdown', value);
    this.emit('countdown', value);
  }

  roundStart(users: number): void {
    this.emit('roundStarted', { users });
  }

  roundComplete(balls: readonly number[], userWins: readonly IUserWin[]): void {
    this.clearTickets();
    this.clearBalls();
    this.emit('roundCompleted', { balls, userWins });
  }

  addBalls(...values: number[]): void {
    for (const value of values) {
      if (this.#context.hasBall(value)) continue;
      this.#context.addBalls(value);
      this.emit('ballAdded', value);
    }
  }

  clearBalls(): void {
    this.#context.clearBalls();
    this.emit('ballsCleared');
  }

  setWin(value: number): void {
    this.#context.set('win', value);
    this.emit('totalWin', value);
  }
}
