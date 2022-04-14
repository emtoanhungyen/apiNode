import mongoose, { Schema } from "mongoose";
import { createHmac } from "crypto";
import { v4 as uuidv4 } from 'uuid'
// const { ObjectId } = mongoose.Types;

const userSchema = new Schema({
    name: {
        type: String,
        minLength: 5,
        unique: true
    },
    email: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true,
        minlength: 4
    },
    salt: {
        type: String
    },
    role: {
        type: Number,
        default: 0
    }
}, []);

userSchema.pre("save", function(next){
    this.salt = uuidv4();
    this.password = this.encryptPassword(this.password);
    next();
});
userSchema.methods = {
    authenticate(password){
        return this.password === this.encryptPassword(password)
    },
    encryptPassword(password){
        if(!password) return
        try {
            return createHmac("sha256", this.salt).update(password).digest("hex");
        } catch (error) {
            console.log(error);
        }
    }
}
export default mongoose.model("User", userSchema);