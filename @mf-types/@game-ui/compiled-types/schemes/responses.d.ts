import { InferOutput } from '@valibot/valibot';
export declare const SessionResponse: import("@valibot/valibot").IntersectSchema<[import("@valibot/valibot").ObjectSchema<{
    readonly balance: import("@valibot/valibot").NumberSchema<undefined>;
}, undefined>, import("@valibot/valibot").ObjectSchema<{
    readonly userChannel: import("@valibot/valibot").StringSchema<undefined>;
    readonly roomChannel: import("@valibot/valibot").StringSchema<undefined>;
}, undefined>, import("@valibot/valibot").ObjectSchema<{
    readonly bet: import("@valibot/valibot").NumberSchema<undefined>;
}, undefined>, import("@valibot/valibot").ObjectSchema<{
    readonly tickets: import("@valibot/valibot").ArraySchema<import("@valibot/valibot").IntersectSchema<[import("@valibot/valibot").ObjectSchema<{
        readonly ticketId: import("@valibot/valibot").StringSchema<undefined>;
    }, undefined>, import("@valibot/valibot").ObjectSchema<{
        readonly bet: import("@valibot/valibot").NumberSchema<undefined>;
    }, undefined>, import("@valibot/valibot").ObjectSchema<{
        readonly spots: import("@valibot/valibot").ArraySchema<import("@valibot/valibot").NumberSchema<undefined>, undefined>;
    }, undefined>], undefined>, undefined>;
}, undefined>, import("@valibot/valibot").ObjectSchema<{
    readonly balls: import("@valibot/valibot").ArraySchema<import("@valibot/valibot").NumberSchema<undefined>, undefined>;
}, undefined>], undefined>;
export type SessionResponse = InferOutput<typeof SessionResponse>;
export declare const TicketCreateResponse: import("@valibot/valibot").IntersectSchema<[import("@valibot/valibot").ObjectSchema<{
    readonly ticket: import("@valibot/valibot").IntersectSchema<[import("@valibot/valibot").ObjectSchema<{
        readonly ticketId: import("@valibot/valibot").StringSchema<undefined>;
    }, undefined>, import("@valibot/valibot").ObjectSchema<{
        readonly bet: import("@valibot/valibot").NumberSchema<undefined>;
    }, undefined>, import("@valibot/valibot").ObjectSchema<{
        readonly spots: import("@valibot/valibot").ArraySchema<import("@valibot/valibot").NumberSchema<undefined>, undefined>;
    }, undefined>], undefined>;
}, undefined>, import("@valibot/valibot").ObjectSchema<{
    readonly balance: import("@valibot/valibot").NumberSchema<undefined>;
}, undefined>], undefined>;
export type TicketCreateResponse = InferOutput<typeof TicketCreateResponse>;
export declare const TicketCancelResponse: import("@valibot/valibot").IntersectSchema<[import("@valibot/valibot").ObjectSchema<{
    readonly ticketId: import("@valibot/valibot").StringSchema<undefined>;
}, undefined>, import("@valibot/valibot").ObjectSchema<{
    readonly balance: import("@valibot/valibot").NumberSchema<undefined>;
}, undefined>], undefined>;
export type TicketCancelResponse = InferOutput<typeof TicketCancelResponse>;
