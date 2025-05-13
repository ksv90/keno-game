export interface StateService {
    get state(): 'pending' | 'process';
}
export declare const StateServiceContext: import("react").Context<StateService | null>;
export declare const useStateService: () => StateService;
