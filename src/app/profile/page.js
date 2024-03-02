"use client"
import { redirect, useRouter } from "next/navigation";
import {signIn} from "next-auth/react";
import Image from "next/image";
import { useState } from "react";
import Alert from "@/components/layout/Alert";
import Link from "next/link";
import { useSession } from "next-auth/react";

export default function ProfilePage() {
    const session = useSession();
    const sessionStatus = session?.status;
    const userData = session?.data?.user;
    const userEmail = userData?.email;
    let userName = userData?.name ?? userEmail;
    const userImage = userData?.image ?? "";
    const [editingEnabled, setEditingEnabled] = useState(false);
    if (sessionStatus && sessionStatus === "loading") { 
        return <h1 className="mt-8 text-center text-primary text-4xl">Loading...</h1>
    }
    if (sessionStatus && sessionStatus === "unauthenticated") { 
        redirect("/login");
    }
    return (
        <section className="mt-8">
            <h1 className="text-center text-primary text-4xl">My Profile</h1>
            <form className="max-w-lg mx-auto my-8">
                <div className="flex gap-6 justify-center items-center">
                    <div className="self-baseline">
                        <Image className="rounded-full" src={userImage} width={128} height={128} alt={"avatar"} />
                    </div>
                    <div className="grow">
                        <div className="mb-4">
                            <label for="user-name">Full Name:</label>
                            <input disabled={!editingEnabled} id="user-name" type="text" placeholder={userName} />
                        </div>
                        <div className="my-4">
                            <label for="user-email">Email Address:</label>
                            <input disabled={!editingEnabled} id="user-email" type="email" placeholder={userEmail} />
                        </div>
                        <div className="my-4">
                            <label for="user-password">Password:</label>
                            <input disabled={!editingEnabled} id="user-password" type="password" placeholder="******" />
                        </div>
                        <div className="flex w-full mt-6">
                            <button onClick={() => editingEnabled === true ? setEditingEnabled(false) : setEditingEnabled(true)} type="button">Edit</button>
                            <button disabled={!editingEnabled} type="submit">Save</button>
                        </div>
                    </div>
                </div>
            </form>
        </section>
    );
}