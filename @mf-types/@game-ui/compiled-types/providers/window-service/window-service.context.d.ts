export type Orientation = 'portrait' | 'landscape';
export interface WindowService {
    get innerWidth(): number;
    get innerHeight(): number;
    get orientation(): Orientation;
    get portrait(): boolean;
    get landscape(): boolean;
    get desktop(): boolean;
    get full(): boolean;
    get toggleFullScreen(): () => void;
}
export declare const WindowServiceContext: import("react").Context<WindowService | null>;
export declare const useWindowService: () => WindowService;
