export interface WinService {
    get win(): number;
    get setWin(): (value: number) => void;
}
export declare const WinServiceContext: import("react").Context<WinService | null>;
export declare const useWinService: () => WinService;
