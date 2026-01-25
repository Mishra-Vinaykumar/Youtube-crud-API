import { Schema, model } from "mongoose";

const SubscriptionSchema = new Schema({
    subscriber: {
        type: Schema.Types.ObjectId, // one who is subscribing
        ref: "user"
    },
    channel: {
        type: Schema.Types.ObjectId, // one to whome 'subscriber' is Subscribing
        ref: "user"
    },
}, { timestamps: true });

export const Subscription = model("subscription",SubscriptionSchema)