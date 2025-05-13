import { SpotIdList } from "../../helpers";
export interface ConnectorService {
    get getSessionData(): () => void;
    get ticketCreate(): (bet: number, spots: SpotIdList) => void;
    get ticketCancel(): (ticketId: string) => void;
}
export declare const ConnectorServiceContext: import("react").Context<ConnectorService | null>;
export declare const useConnectorService: () => ConnectorService;
