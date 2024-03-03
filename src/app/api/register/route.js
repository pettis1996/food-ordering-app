import { User } from "@/models/User";
import { connectMongoDB } from "../../../../lib/mongodb";

export async function POST(req) {
    const { email, password } = await req.json();
    const userDetails = { email, password };
    try {
        await connectMongoDB();
        const createdUser = await User.create(userDetails);
        return Response.json(
            { message: "User Registered Successfully." },
            { status: 201 }
        );
    } catch(error) {
        return Response.json(
            { message: `An error occured while registering this user. ${error}` },
            { status: 500 }
        );
    }

}