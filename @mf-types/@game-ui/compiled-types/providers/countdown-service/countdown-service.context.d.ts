export interface CountdownService {
    get countdown(): number;
    get setCountdown(): (value: number) => void;
}
export declare const CountdownServiceContext: import("react").Context<CountdownService | null>;
export declare const useCountdownService: () => CountdownService;
