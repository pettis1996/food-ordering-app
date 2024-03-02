"use client"
import { redirect, useRouter } from "next/navigation";
import Image from "next/image";
import { useState, useEffect } from "react";
import Alert from "@/components/layout/Alert";
import Link from "next/link";
import { useSession } from "next-auth/react";

export default function ProfilePage() {
    const session = useSession();
    const sessionStatus = session?.status;
    const userData = session?.data?.user;
    const [userEmail, setUserEmail] = useState(userData?.email);
    const [userName, setUserName] = useState(userData?.name);
    const [userImage, setUserImage] = useState(userData?.image);
    const [editingEnabled, setEditingEnabled] = useState(false);
    useEffect(() => {
        setUserEmail(userData?.email || '');
        setUserName(userData?.name || '');
        setUserImage(userData?.image || '');
    }, [userData]);
    if (sessionStatus && sessionStatus === "loading") { 
        return <h1 className="mt-8 text-center text-primary text-4xl">Loading...</h1>
    };
    if (sessionStatus && sessionStatus === "unauthenticated") { 
        redirect("/login");
    };
    const handleFormSubmit = (event) => {
        event.preventDefault();
    };     
    return (
        <section className="mt-8">
            <h1 className="text-center text-primary text-4xl">My Profile</h1>
            <form className="max-w-lg mx-auto my-8" onSubmit={handleFormSubmit}>
                <div className="flex gap-6 justify-center items-center">
                    <div className="self-baseline flex flex-col gap-5 items-center">
                        <Image className="rounded-full" src={userImage} width={128} height={128} alt={"avatar"} />
                        <button type="button">Change Avatar</button>
                    </div>
                    <div className="grow">
                        <div className="mb-4">
                            <label for="user-name">Full Name:</label>
                            <input disabled={!editingEnabled} id="user-name" type="text" placeholder={userName}
                                onClick={ev => setUserName(ev.target.value)} 
                            />
                        </div>
                        <div className="my-4">
                            <label for="user-email">Email Address:</label>
                            <input disabled={!editingEnabled} id="user-email" type="email" placeholder={userEmail} 
                                onClick={ev => setUserEmail(ev.target.value)}
                            />
                        </div>
                        <div className="my-4">
                            <label for="user-password">Password:</label>
                            <input disabled={!editingEnabled} id="user-password" type="password" placeholder="******" />
                        </div>
                        <div className="mb-4">
                            <label for="user-home-address">Full Address:</label>
                            <input disabled={!editingEnabled} id="user-home-address" type="text" placeholder="154 Example Street, 10234" />
                        </div>
                        <div className="mb-4">
                            <label for="user-phone">Phone Number:</label>
                            <input disabled={!editingEnabled} id="user-phone" type="text" placeholder="+ 357 99 123 123" />
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