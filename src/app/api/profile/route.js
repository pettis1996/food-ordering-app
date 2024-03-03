import { connectMongoDB } from "../../../../lib/mongodb";

export async function PUT(req) {
    connectMongoDB();
    const data = await req.json();
    console.log("data", data)
    return Response.json(
        { message: "Not Implemented Route" },
        { status: 500 }
    );
}   