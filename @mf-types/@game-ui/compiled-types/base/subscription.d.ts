import { ISubscription, ISubscriptionEvents } from "./";
import { IEmitter } from '@ksv90/decorators';
export type PublishResultMock = object;
export interface SubscribedContextMock {
    channel: string;
}
export interface UnsubscribedContextMock {
    channel: string;
}
export interface SubscriptionMockEvents extends ISubscriptionEvents {
    subscribed: [ctx: SubscribedContextMock];
    unsubscribed: [ctx: UnsubscribedContextMock];
}
export interface SubscriptionMock extends IEmitter<SubscriptionMockEvents> {
}
export declare class SubscriptionMock implements ISubscription {
    #private;
    constructor(channel: string);
    get channel(): string;
    subscribe(): void;
    unsubscribe(): void;
    publish(data: unknown): Promise<PublishResultMock>;
}
