export interface BalanceService {
    get balance(): number;
    get updateBalance(): (value: number) => void;
}
export declare const BalanceServiceContext: import("react").Context<BalanceService | null>;
export declare const useBalanceService: () => BalanceService;
