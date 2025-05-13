export interface IConnectorOptions {
    readonly serverUrl: string;
    readonly token: string;
}
export declare abstract class Connector {
    #private;
    protected serverUrl_: string;
    protected token_: string;
    constructor(options: IConnectorOptions);
    protected get_(url: string): Promise<Response>;
    protected post_(url: string, data?: unknown): Promise<Response>;
}
