import { IPublicationContext, IReceiver } from "../../base";
import { JSX, PropsWithChildren } from 'react';
export interface PublicationServiceProviderProps {
    readonly receiver: IReceiver;
    readonly channel?: string;
    readonly onPublication: (ctx: IPublicationContext) => void;
}
export declare const PublicationServiceProvider: (props: PropsWithChildren<PublicationServiceProviderProps>) => JSX.Element;
