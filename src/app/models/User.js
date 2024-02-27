import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    email: {type: String, required: true, unique: true},
    password: {type: String, required: true, 
        validate: (pass) => {
            if (!pass?.length || pass?.length < 5) {
                new Error("Password must be at least 5 characters long.");
            }
        }},
}, {timestamps: true});

export const User = mongoose.model("User", userSchema);