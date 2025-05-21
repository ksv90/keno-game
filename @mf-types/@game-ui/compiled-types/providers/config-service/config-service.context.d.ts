export interface ConfigService {
    get topNumber(): number;
    get totalBalls(): number;
    get minSpotsNum(): number;
    get maxSpotsNum(): number;
    get bets(): readonly number[];
}
export declare const ConfigServiceContext: import("react").Context<ConfigService | null>;
export declare const useConfigService: () => ConfigService;
