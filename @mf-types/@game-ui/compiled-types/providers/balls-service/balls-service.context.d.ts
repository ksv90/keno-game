import { BallList } from "../../helpers";
export interface BallsService {
    get balls(): BallList;
    get addBalls(): (...balls: number[]) => void;
}
export declare const BallsServiceContext: import("react").Context<BallsService | null>;
export declare const useBallsService: () => BallsService;
