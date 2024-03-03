"use client"
import { redirect, useRouter } from "next/navigation";
import Image from "next/image";
import { useState, useEffect } from "react";
import { useSession, signOut } from "next-auth/react";

export default function ProfilePage() {
    const session = useSession();
    const sessionStatus = session?.status;
    const userData = session?.data?.user;
    const router = useRouter();
    const [userEmail, setUserEmail] = useState(userData?.email);
    const [userName, setUserName] = useState(userData?.name);
    const [userImage, setUserImage] = useState(userData?.image);
    const [editingEnabled, setEditingEnabled] = useState(false);
    useEffect(() => {
        if (sessionStatus === "authenticated") {
            setUserEmail(userData?.email || "");
            setUserName(userData?.name || "");
            setUserImage(userData?.image || "");
        }
    }, [session, sessionStatus, userData]);
    if (sessionStatus && sessionStatus === "loading") { 
        return <h1 className="mt-8 text-center text-primary text-4xl">Loading...</h1>
    };
    if (sessionStatus && sessionStatus === "unauthenticated") { 
        redirect("/login");
    };
    async function handleProfileInfoUpdate (event) {
        event.preventDefault();
        const res = await fetch("/api/profile", {
            method: "PUT",
            body: JSON.stringify({ email: userEmail, name: userName }),
            headers: {"Content-Type": "application/json"}
        });
        if (res.ok) { 
            signOut();
        }
    };     
    return (
        <section className="mt-8">
            <h1 className="text-center text-primary text-4xl">My Profile</h1>
            <div className="max-w-lg mx-auto my-8">
                <div className="flex gap-6 justify-center items-center">
                    <form className="self-baseline flex flex-col gap-5 items-center">
                        <Image className="rounded-full" src={userImage} width={128} height={128} alt={"avatar"} />
                        <button type="submit">Edit</button>
                    </form>
                    <form onSubmit={handleProfileInfoUpdate}>
                        <div className="grow">
                            <div className="mb-4">
                                <label htmlFor="user-name">Full Name:</label>
                                <input disabled={!editingEnabled} id="user-name" type="text" placeholder={userName}
                                    onChange={(ev) => setUserName(ev.target.value)} 
                                />
                            </div>
                            <div className="my-4">
                                <label htmlFor="user-email">Email Address:</label>
                                <input disabled={!editingEnabled} id="user-email" type="email" placeholder={userEmail} 
                                    onChange={(ev) => setUserEmail(ev.target.value)}
                                />
                            </div>
                            <div className="my-4">
                                <label htmlFor="user-password">Password:</label>
                                <input disabled={!editingEnabled} id="user-password" type="password" placeholder="******" />
                            </div>
                            <div className="mb-4">
                                <label htmlFor="user-home-address">Full Address:</label>
                                <input disabled={!editingEnabled} id="user-home-address" type="text" placeholder="154 Example Street, 10234" />
                            </div>
                            <div className="mb-4">
                                <label htmlFor="user-phone">Phone Number:</label>
                                <input disabled={!editingEnabled} id="user-phone" type="text" placeholder="+ 357 99 123 123" />
                            </div>
                            <div className="flex w-full mt-6">
                                <button onClick={() => editingEnabled === true ? setEditingEnabled(false) : setEditingEnabled(true)} type="button">Edit</button>
                                <button disabled={!editingEnabled} type="submit">Save</button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </section>
    );
}