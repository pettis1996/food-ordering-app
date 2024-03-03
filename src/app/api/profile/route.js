import { connectMongoDB } from "../../../../lib/mongodb";
import { getServerSession } from "next-auth";
import { authOptions } from "../auth/[...nextauth]/route";
import { User } from "@/models/User";

export async function PUT(req) {
    connectMongoDB();
    const data = await req.json();
    const session = await getServerSession(authOptions);
    const email = session?.user?.email;
    const res = await User.updateOne({email}, {name:data.name, email:data.email});
    if (!res) {
        return Response.json(
            { message: "Error: Unable to update data." },
            { status: 500 }
        );
    }
    return Response.json(
        { message: "User info updated successfully!" },
        { status: 200 }
    );
}   