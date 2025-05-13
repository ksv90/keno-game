import { IServerTicketWin } from "../../helpers";
import { StateMachine, StateMachineConfig } from '@ksv90/fsm';
import { KenoMessengerMock } from './keno.messenger';
export type KenoMachineMockStateName = 'init' | 'countdown' | 'roundStart' | 'roundProcess' | 'roundClose';
export type KenoMachineMockEventType = 'NEXT' | 'COMPLETE';
export interface KenoMachineMockContext {
    get mode(): number;
    get countdown(): number;
    get balls(): Iterable<number>;
    countdownDecrement(): void;
    addBall(): number;
    isRoundReady(): boolean;
    winsCalculate(): {
        totalWin: number;
        ticketWins: IServerTicketWin[];
    };
    roundStart(): void;
    roundClose(): void;
}
export declare const createKenoMachineMock: <TContext extends KenoMachineMockContext>(config: StateMachineConfig<KenoMachineMockStateName, KenoMachineMockEventType, TContext>) => StateMachine<KenoMachineMockStateName, KenoMachineMockEventType, TContext>;
export declare const getKenoMachineMockConfig: <TContext extends KenoMachineMockContext>(messenger: KenoMessengerMock, context: TContext) => StateMachineConfig<KenoMachineMockStateName, KenoMachineMockEventType, TContext>;
