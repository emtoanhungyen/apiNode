import mongoose, {Schema} from "mongoose";
const { ObjectId } = mongoose.Types;

const cartSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    user: {
        type: ObjectId,
        ref: "User"
    },
    items: [{
        item: {
            type: ObjectId,
            ref: "Product"
        },
        quantity: {
            type: Number,
            default: 1
        },
        price: {
            type: Number,
            default: 0
        }
    }]
}, { timestamps: true})

export default mongoose.model("Cart", cartSchema);