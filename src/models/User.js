import mongoose from "mongoose";
import bcrypt from "bcrypt";

const userSchema = new mongoose.Schema({
    name: {type: String},
    email: {type: String, required: true, unique: true},
    password: {type: String, required: true, 
        validate: (pass) => {
            if (!pass?.length || pass?.length < 5) {
                new Error("Password must be at least 5 characters long.");
                return false;
            }
        }},
}, {timestamps: true});

userSchema.post("validate", function (user) {
    const pass = user.password;
    const salt = bcrypt.genSaltSync(10);
    user.password = bcrypt.hashSync(pass, salt);
})

export const User = mongoose.models?.User || mongoose.model("User", userSchema);