export interface StateService {
    get state(): 'pending' | 'process';
    get spots(): readonly number[];
    get addSpots(): (...spotIds: number[]) => void;
    get removeSpots(): (...spotIds: number[]) => void;
    get clearSpots(): () => void;
}
export declare const StateServiceContext: import("react").Context<StateService | null>;
export declare const useStateService: () => StateService;
