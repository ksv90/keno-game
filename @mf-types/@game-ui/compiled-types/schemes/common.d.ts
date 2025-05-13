import { InferOutput } from '@valibot/valibot';
export declare const BalanceData: import("@valibot/valibot").ObjectSchema<{
    readonly balance: import("@valibot/valibot").NumberSchema<undefined>;
}, undefined>;
export type BalanceData = InferOutput<typeof BalanceData>;
export declare const BetData: import("@valibot/valibot").ObjectSchema<{
    readonly bet: import("@valibot/valibot").NumberSchema<undefined>;
}, undefined>;
export type BetData = InferOutput<typeof BetData>;
export declare const ChannelData: import("@valibot/valibot").ObjectSchema<{
    readonly userChannel: import("@valibot/valibot").StringSchema<undefined>;
    readonly roomChannel: import("@valibot/valibot").StringSchema<undefined>;
}, undefined>;
export type ChannelData = InferOutput<typeof ChannelData>;
export declare const TicketIdData: import("@valibot/valibot").ObjectSchema<{
    readonly ticketId: import("@valibot/valibot").StringSchema<undefined>;
}, undefined>;
export type TicketIdData = InferOutput<typeof TicketIdData>;
export declare const UserNameData: import("@valibot/valibot").ObjectSchema<{
    readonly userName: import("@valibot/valibot").StringSchema<undefined>;
}, undefined>;
export type UserNameData = InferOutput<typeof UserNameData>;
export declare const TotalWinData: import("@valibot/valibot").ObjectSchema<{
    readonly totalWin: import("@valibot/valibot").NumberSchema<undefined>;
}, undefined>;
export type TotalWinData = InferOutput<typeof TotalWinData>;
export declare const WinData: import("@valibot/valibot").ObjectSchema<{
    readonly win: import("@valibot/valibot").NumberSchema<undefined>;
}, undefined>;
export type WinData = InferOutput<typeof WinData>;
export declare const CountdownData: import("@valibot/valibot").ObjectSchema<{
    readonly countdown: import("@valibot/valibot").NumberSchema<undefined>;
}, undefined>;
export type CountdownData = InferOutput<typeof CountdownData>;
export declare const AddValueData: import("@valibot/valibot").ObjectSchema<{
    readonly added: import("@valibot/valibot").NumberSchema<undefined>;
}, undefined>;
export type AddValueData = InferOutput<typeof AddValueData>;
export declare const BallListData: import("@valibot/valibot").ObjectSchema<{
    readonly balls: import("@valibot/valibot").ArraySchema<import("@valibot/valibot").NumberSchema<undefined>, undefined>;
}, undefined>;
export type BallListData = InferOutput<typeof BallListData>;
export declare const HitListData: import("@valibot/valibot").ObjectSchema<{
    readonly hits: import("@valibot/valibot").ArraySchema<import("@valibot/valibot").NumberSchema<undefined>, undefined>;
}, undefined>;
export type HitListData = InferOutput<typeof HitListData>;
export declare const SpotListData: import("@valibot/valibot").ObjectSchema<{
    readonly spots: import("@valibot/valibot").ArraySchema<import("@valibot/valibot").NumberSchema<undefined>, undefined>;
}, undefined>;
export type SpotListData = InferOutput<typeof SpotListData>;
export declare const TicketData: import("@valibot/valibot").ObjectSchema<{
    readonly ticket: import("@valibot/valibot").IntersectSchema<[import("@valibot/valibot").ObjectSchema<{
        readonly ticketId: import("@valibot/valibot").StringSchema<undefined>;
    }, undefined>, import("@valibot/valibot").ObjectSchema<{
        readonly bet: import("@valibot/valibot").NumberSchema<undefined>;
    }, undefined>, import("@valibot/valibot").ObjectSchema<{
        readonly spots: import("@valibot/valibot").ArraySchema<import("@valibot/valibot").NumberSchema<undefined>, undefined>;
    }, undefined>], undefined>;
}, undefined>;
export type TicketData = InferOutput<typeof TicketData>;
export declare const TicketListData: import("@valibot/valibot").ObjectSchema<{
    readonly tickets: import("@valibot/valibot").ArraySchema<import("@valibot/valibot").IntersectSchema<[import("@valibot/valibot").ObjectSchema<{
        readonly ticketId: import("@valibot/valibot").StringSchema<undefined>;
    }, undefined>, import("@valibot/valibot").ObjectSchema<{
        readonly bet: import("@valibot/valibot").NumberSchema<undefined>;
    }, undefined>, import("@valibot/valibot").ObjectSchema<{
        readonly spots: import("@valibot/valibot").ArraySchema<import("@valibot/valibot").NumberSchema<undefined>, undefined>;
    }, undefined>], undefined>, undefined>;
}, undefined>;
export type TicketListData = InferOutput<typeof TicketListData>;
export declare const TicketWinData: import("@valibot/valibot").ObjectSchema<{
    readonly ticketWin: import("@valibot/valibot").IntersectSchema<[import("@valibot/valibot").ObjectSchema<{
        readonly ticketId: import("@valibot/valibot").StringSchema<undefined>;
    }, undefined>, import("@valibot/valibot").ObjectSchema<{
        readonly win: import("@valibot/valibot").NumberSchema<undefined>;
    }, undefined>, import("@valibot/valibot").ObjectSchema<{
        readonly hits: import("@valibot/valibot").ArraySchema<import("@valibot/valibot").NumberSchema<undefined>, undefined>;
    }, undefined>], undefined>;
}, undefined>;
export type TicketWinData = InferOutput<typeof TicketWinData>;
export declare const TicketWinListData: import("@valibot/valibot").ObjectSchema<{
    readonly ticketWins: import("@valibot/valibot").ArraySchema<import("@valibot/valibot").IntersectSchema<[import("@valibot/valibot").ObjectSchema<{
        readonly ticketId: import("@valibot/valibot").StringSchema<undefined>;
    }, undefined>, import("@valibot/valibot").ObjectSchema<{
        readonly win: import("@valibot/valibot").NumberSchema<undefined>;
    }, undefined>, import("@valibot/valibot").ObjectSchema<{
        readonly hits: import("@valibot/valibot").ArraySchema<import("@valibot/valibot").NumberSchema<undefined>, undefined>;
    }, undefined>], undefined>, undefined>;
}, undefined>;
export type TicketWinListData = InferOutput<typeof TicketWinListData>;
export declare const UserWinData: import("@valibot/valibot").ObjectSchema<{
    readonly userWin: import("@valibot/valibot").IntersectSchema<[import("@valibot/valibot").ObjectSchema<{
        readonly userName: import("@valibot/valibot").StringSchema<undefined>;
    }, undefined>, import("@valibot/valibot").ObjectSchema<{
        readonly totalWin: import("@valibot/valibot").NumberSchema<undefined>;
    }, undefined>], undefined>;
}, undefined>;
export type UserWinData = InferOutput<typeof UserWinData>;
export declare const UserWinListData: import("@valibot/valibot").ObjectSchema<{
    readonly userWins: import("@valibot/valibot").ArraySchema<import("@valibot/valibot").IntersectSchema<[import("@valibot/valibot").ObjectSchema<{
        readonly userName: import("@valibot/valibot").StringSchema<undefined>;
    }, undefined>, import("@valibot/valibot").ObjectSchema<{
        readonly totalWin: import("@valibot/valibot").NumberSchema<undefined>;
    }, undefined>], undefined>, undefined>;
}, undefined>;
export type UserWinListData = InferOutput<typeof UserWinListData>;
