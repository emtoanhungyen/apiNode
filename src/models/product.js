import mongoose, { Schema } from "mongoose";
const { ObjectId } = mongoose.Types;

const productSchema = new Schema({
    name: {
        type: String,
        minLength: 5,
        required: true,
        unique: true,
    },
    price: {
        type: Number,
        required: true,
    },
    details: {
        type: String,
        minlength: 5,
    },
    // color: {
    //     type: String
    // },
    category: {
        type: ObjectId,
        ref: "Category",
    },
}, { timestamps: true });

export default mongoose.model("Product", productSchema);