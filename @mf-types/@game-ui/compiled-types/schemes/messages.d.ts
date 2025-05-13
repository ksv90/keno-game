import { InferOutput } from '@valibot/valibot';
export declare const TicketCreateMessage: import("@valibot/valibot").IntersectSchema<[import("@valibot/valibot").ObjectSchema<{
    readonly type: import("@valibot/valibot").LiteralSchema<"ticket-create", undefined>;
}, undefined>, import("@valibot/valibot").ObjectSchema<{
    readonly ticket: import("@valibot/valibot").IntersectSchema<[import("@valibot/valibot").ObjectSchema<{
        readonly ticketId: import("@valibot/valibot").StringSchema<undefined>;
    }, undefined>, import("@valibot/valibot").ObjectSchema<{
        readonly bet: import("@valibot/valibot").NumberSchema<undefined>;
    }, undefined>, import("@valibot/valibot").ObjectSchema<{
        readonly spots: import("@valibot/valibot").ArraySchema<import("@valibot/valibot").NumberSchema<undefined>, undefined>;
    }, undefined>], undefined>;
}, undefined>], undefined>;
export type TicketCreateMessage = InferOutput<typeof TicketCreateMessage>;
export declare const TicketCancelMessage: import("@valibot/valibot").IntersectSchema<[import("@valibot/valibot").ObjectSchema<{
    readonly type: import("@valibot/valibot").LiteralSchema<"ticket-cancel", undefined>;
}, undefined>, import("@valibot/valibot").ObjectSchema<{
    readonly ticketId: import("@valibot/valibot").StringSchema<undefined>;
}, undefined>], undefined>;
export type TicketCancelMessage = InferOutput<typeof TicketCancelMessage>;
export declare const RoundStartMessage: import("@valibot/valibot").ObjectSchema<{
    readonly type: import("@valibot/valibot").LiteralSchema<"round-start", undefined>;
    readonly users: import("@valibot/valibot").NumberSchema<undefined>;
}, undefined>;
export type RoundStartMessage = InferOutput<typeof RoundStartMessage>;
export declare const RoundCompleteMessage: import("@valibot/valibot").IntersectSchema<[import("@valibot/valibot").ObjectSchema<{
    readonly type: import("@valibot/valibot").LiteralSchema<"round-complete", undefined>;
}, undefined>, import("@valibot/valibot").ObjectSchema<{
    readonly balls: import("@valibot/valibot").ArraySchema<import("@valibot/valibot").NumberSchema<undefined>, undefined>;
}, undefined>, import("@valibot/valibot").ObjectSchema<{
    readonly userWins: import("@valibot/valibot").ArraySchema<import("@valibot/valibot").IntersectSchema<[import("@valibot/valibot").ObjectSchema<{
        readonly userName: import("@valibot/valibot").StringSchema<undefined>;
    }, undefined>, import("@valibot/valibot").ObjectSchema<{
        readonly totalWin: import("@valibot/valibot").NumberSchema<undefined>;
    }, undefined>], undefined>, undefined>;
}, undefined>], undefined>;
export type RoundCompleteMessage = InferOutput<typeof RoundCompleteMessage>;
export declare const RoundProcessMessage: import("@valibot/valibot").IntersectSchema<[import("@valibot/valibot").ObjectSchema<{
    readonly type: import("@valibot/valibot").LiteralSchema<"round-process", undefined>;
}, undefined>, import("@valibot/valibot").ObjectSchema<{
    readonly balls: import("@valibot/valibot").ArraySchema<import("@valibot/valibot").NumberSchema<undefined>, undefined>;
}, undefined>, import("@valibot/valibot").ObjectSchema<{
    readonly added: import("@valibot/valibot").NumberSchema<undefined>;
}, undefined>], undefined>;
export type RoundProcessMessage = InferOutput<typeof RoundProcessMessage>;
export declare const RoundCountdownMessage: import("@valibot/valibot").IntersectSchema<[import("@valibot/valibot").ObjectSchema<{
    readonly type: import("@valibot/valibot").LiteralSchema<"round-countdown", undefined>;
}, undefined>, import("@valibot/valibot").ObjectSchema<{
    readonly countdown: import("@valibot/valibot").NumberSchema<undefined>;
}, undefined>], undefined>;
export type RoundCountdownMessage = InferOutput<typeof RoundCountdownMessage>;
export declare const BetChangeMessage: import("@valibot/valibot").IntersectSchema<[import("@valibot/valibot").ObjectSchema<{
    readonly type: import("@valibot/valibot").LiteralSchema<"bet-change", undefined>;
}, undefined>, import("@valibot/valibot").ObjectSchema<{
    readonly bet: import("@valibot/valibot").NumberSchema<undefined>;
}, undefined>], undefined>;
export type BetChangeMessage = InferOutput<typeof BetChangeMessage>;
export declare const BalanceUpdateMessage: import("@valibot/valibot").IntersectSchema<[import("@valibot/valibot").ObjectSchema<{
    readonly type: import("@valibot/valibot").LiteralSchema<"balance-update", undefined>;
}, undefined>, import("@valibot/valibot").ObjectSchema<{
    readonly balance: import("@valibot/valibot").NumberSchema<undefined>;
}, undefined>], undefined>;
export type BalanceUpdateMessage = InferOutput<typeof BalanceUpdateMessage>;
export declare const WinMessage: import("@valibot/valibot").IntersectSchema<[import("@valibot/valibot").ObjectSchema<{
    readonly type: import("@valibot/valibot").LiteralSchema<"win", undefined>;
}, undefined>, import("@valibot/valibot").ObjectSchema<{
    readonly totalWin: import("@valibot/valibot").NumberSchema<undefined>;
}, undefined>, import("@valibot/valibot").ObjectSchema<{
    readonly ticketWins: import("@valibot/valibot").ArraySchema<import("@valibot/valibot").IntersectSchema<[import("@valibot/valibot").ObjectSchema<{
        readonly ticketId: import("@valibot/valibot").StringSchema<undefined>;
    }, undefined>, import("@valibot/valibot").ObjectSchema<{
        readonly win: import("@valibot/valibot").NumberSchema<undefined>;
    }, undefined>, import("@valibot/valibot").ObjectSchema<{
        readonly hits: import("@valibot/valibot").ArraySchema<import("@valibot/valibot").NumberSchema<undefined>, undefined>;
    }, undefined>], undefined>, undefined>;
}, undefined>], undefined>;
export type WinMessage = InferOutput<typeof WinMessage>;
export declare const RoomMessage: import("@valibot/valibot").UnionSchema<[import("@valibot/valibot").IntersectSchema<[import("@valibot/valibot").ObjectSchema<{
    readonly type: import("@valibot/valibot").LiteralSchema<"ticket-create", undefined>;
}, undefined>, import("@valibot/valibot").ObjectSchema<{
    readonly ticket: import("@valibot/valibot").IntersectSchema<[import("@valibot/valibot").ObjectSchema<{
        readonly ticketId: import("@valibot/valibot").StringSchema<undefined>;
    }, undefined>, import("@valibot/valibot").ObjectSchema<{
        readonly bet: import("@valibot/valibot").NumberSchema<undefined>;
    }, undefined>, import("@valibot/valibot").ObjectSchema<{
        readonly spots: import("@valibot/valibot").ArraySchema<import("@valibot/valibot").NumberSchema<undefined>, undefined>;
    }, undefined>], undefined>;
}, undefined>], undefined>, import("@valibot/valibot").IntersectSchema<[import("@valibot/valibot").ObjectSchema<{
    readonly type: import("@valibot/valibot").LiteralSchema<"ticket-cancel", undefined>;
}, undefined>, import("@valibot/valibot").ObjectSchema<{
    readonly ticketId: import("@valibot/valibot").StringSchema<undefined>;
}, undefined>], undefined>, import("@valibot/valibot").ObjectSchema<{
    readonly type: import("@valibot/valibot").LiteralSchema<"round-start", undefined>;
    readonly users: import("@valibot/valibot").NumberSchema<undefined>;
}, undefined>, import("@valibot/valibot").IntersectSchema<[import("@valibot/valibot").ObjectSchema<{
    readonly type: import("@valibot/valibot").LiteralSchema<"round-complete", undefined>;
}, undefined>, import("@valibot/valibot").ObjectSchema<{
    readonly balls: import("@valibot/valibot").ArraySchema<import("@valibot/valibot").NumberSchema<undefined>, undefined>;
}, undefined>, import("@valibot/valibot").ObjectSchema<{
    readonly userWins: import("@valibot/valibot").ArraySchema<import("@valibot/valibot").IntersectSchema<[import("@valibot/valibot").ObjectSchema<{
        readonly userName: import("@valibot/valibot").StringSchema<undefined>;
    }, undefined>, import("@valibot/valibot").ObjectSchema<{
        readonly totalWin: import("@valibot/valibot").NumberSchema<undefined>;
    }, undefined>], undefined>, undefined>;
}, undefined>], undefined>, import("@valibot/valibot").IntersectSchema<[import("@valibot/valibot").ObjectSchema<{
    readonly type: import("@valibot/valibot").LiteralSchema<"round-process", undefined>;
}, undefined>, import("@valibot/valibot").ObjectSchema<{
    readonly balls: import("@valibot/valibot").ArraySchema<import("@valibot/valibot").NumberSchema<undefined>, undefined>;
}, undefined>, import("@valibot/valibot").ObjectSchema<{
    readonly added: import("@valibot/valibot").NumberSchema<undefined>;
}, undefined>], undefined>, import("@valibot/valibot").IntersectSchema<[import("@valibot/valibot").ObjectSchema<{
    readonly type: import("@valibot/valibot").LiteralSchema<"round-countdown", undefined>;
}, undefined>, import("@valibot/valibot").ObjectSchema<{
    readonly countdown: import("@valibot/valibot").NumberSchema<undefined>;
}, undefined>], undefined>], undefined>;
export type RoomMessage = InferOutput<typeof RoomMessage>;
export declare const UserMessage: import("@valibot/valibot").UnionSchema<[import("@valibot/valibot").IntersectSchema<[import("@valibot/valibot").ObjectSchema<{
    readonly type: import("@valibot/valibot").LiteralSchema<"bet-change", undefined>;
}, undefined>, import("@valibot/valibot").ObjectSchema<{
    readonly bet: import("@valibot/valibot").NumberSchema<undefined>;
}, undefined>], undefined>, import("@valibot/valibot").IntersectSchema<[import("@valibot/valibot").ObjectSchema<{
    readonly type: import("@valibot/valibot").LiteralSchema<"balance-update", undefined>;
}, undefined>, import("@valibot/valibot").ObjectSchema<{
    readonly balance: import("@valibot/valibot").NumberSchema<undefined>;
}, undefined>], undefined>, import("@valibot/valibot").IntersectSchema<[import("@valibot/valibot").ObjectSchema<{
    readonly type: import("@valibot/valibot").LiteralSchema<"win", undefined>;
}, undefined>, import("@valibot/valibot").ObjectSchema<{
    readonly totalWin: import("@valibot/valibot").NumberSchema<undefined>;
}, undefined>, import("@valibot/valibot").ObjectSchema<{
    readonly ticketWins: import("@valibot/valibot").ArraySchema<import("@valibot/valibot").IntersectSchema<[import("@valibot/valibot").ObjectSchema<{
        readonly ticketId: import("@valibot/valibot").StringSchema<undefined>;
    }, undefined>, import("@valibot/valibot").ObjectSchema<{
        readonly win: import("@valibot/valibot").NumberSchema<undefined>;
    }, undefined>, import("@valibot/valibot").ObjectSchema<{
        readonly hits: import("@valibot/valibot").ArraySchema<import("@valibot/valibot").NumberSchema<undefined>, undefined>;
    }, undefined>], undefined>, undefined>;
}, undefined>], undefined>], undefined>;
export type UserMessage = InferOutput<typeof UserMessage>;
