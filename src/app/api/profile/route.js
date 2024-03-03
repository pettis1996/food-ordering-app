import { connectMongoDB } from "../../../../lib/mongodb";
import { getServerSession } from "next-auth";
import { authOptions } from "../auth/[...nextauth]/route";
import { User } from "@/models/User";

export async function PUT(req) {
    connectMongoDB();
    const data = await req.json();
    const session = await getServerSession(authOptions);
    const email = session?.user?.email;
    const user = await User.findOne({email});

    return Response.json(
        { message: "Not Implemented Route" },
        { status: 500 }
    );
}   