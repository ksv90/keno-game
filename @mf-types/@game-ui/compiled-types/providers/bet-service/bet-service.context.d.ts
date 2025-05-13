export interface BetService {
    get bet(): number;
    get changeBet(): (value: number) => void;
}
export declare const BetServiceContext: import("react").Context<BetService | null>;
export declare const useBetService: () => BetService;
