import { IBroadcaster, IEmitter } from '@ksv90/decorators';
import { IReceiver, IReceiverEvents, ReceiverState } from './interfaces';
import { SubscriptionMock } from './subscription';
export interface MessengerMock<TBroadcastEvents extends object = object> extends IEmitter<IReceiverEvents>, IBroadcaster<TBroadcastEvents> {
}
export declare abstract class MessengerMock implements IReceiver {
    #private;
    protected subscriptionMap_: Map<string, SubscriptionMock>;
    get state(): ReceiverState;
    connect(): void;
    disconnect(): void;
    newSubscription(channel: string): SubscriptionMock;
    removeSubscription(subscription: SubscriptionMock): void;
    protected sendMessage_(channel: string, data: unknown): void;
}
