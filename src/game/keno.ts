import { Emitter, type IEmitter } from '@ksv90/decorators';
import type { KenoGame, KenoGameEvents, Ticket, TicketWinData, WinData } from '@ksv90/game-ui/keno';

import { KenoContext } from './context';

export interface KenoEvents extends KenoGameEvents {
  ticketWin: [Ticket: Ticket];
}

export interface Keno extends IEmitter<KenoEvents> {}

export
@Emitter()
class Keno implements KenoGame {
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

  addTickets(...tickets: Ticket[]): void {
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

  ticketWins(...ticketWins: TicketWinData[]): void {
    for (const { ticketId, win, coincidences } of ticketWins) {
      const ticket = this.#context.getTicketById(ticketId);
      const winTicket = { ...ticket, win, coincidences } satisfies Ticket;
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

  roundComplete(roundNumbers: readonly number[], wins: readonly WinData[]): void {
    this.clearTickets();
    this.clearRoundNumbers();
    this.emit('roundCompleted', { roundNumbers, wins });
  }

  addRoundNumbers(...values: number[]): void {
    for (const value of values) {
      if (this.#context.hasRoundNumber(value)) continue;
      this.#context.addRoundNumber(value);
      this.emit('roundNumberAdded', value);
    }
  }

  clearRoundNumbers(): void {
    this.#context.clearRoundNumbers();
    this.emit('roundNumberCleared');
  }

  setWin(value: number): void {
    this.#context.set('win', value);
    this.emit('totalWin', value);
  }
}
