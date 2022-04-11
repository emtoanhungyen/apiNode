import mongoose, {Schema} from "mongoose";
const { ObjectId } = mongoose.Types;

const cartSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    quantity: {
        type: Number,
    },
    user: {
        type: ObjectId,
        ref: "User"
    }
}, { timestamps: true})

export default mongoose.model("Cart", cartSchema);