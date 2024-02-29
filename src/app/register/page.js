"use client"
import { useRouter } from 'next/navigation'
import Image from "next/image";
import { useState } from "react";

export default function RegisterPage() {
    const router = useRouter();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [creatingUser, setCreatingUser] = useState(false);
    const [userCreated, setUserCreated] = useState(false);
    const [userExists, setUserExists] = useState(false);

    async function handleFormSubmit(ev) {
        ev.preventDefault();
        setCreatingUser(true);
        setUserCreated(false);
        setUserExists(false);
        const res = await fetch("/api/register", {
            method: "POST",
            body: JSON.stringify({email, password}),
            headers: {"Content-Type": "application/json"}
        });
        if (!res.ok) {
            console.log(res.status);
            setCreatingUser(false);
            setUserExists(true);
            return null;
        }
        setUserCreated(true);
        setTimeout(() => {
            setCreatingUser(false);
            router.push("/");
        }, 1750);
    };

    return (
        <section className="mt-8">
            <h1 className="text-center text-primary text-4xl">Register</h1>
            <form className="block max-w-xs mx-auto" onSubmit={handleFormSubmit}>
                {userCreated ? (
                    <div className="bg-green-300/50 rounded-md p-5 font-semibold text-center my-5 flex flex-col justify-center items-center gap-3">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 0 1-1.043 3.296 3.745 3.745 0 0 1-3.296 1.043A3.745 3.745 0 0 1 12 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 0 1-3.296-1.043 3.745 3.745 0 0 1-1.043-3.296A3.745 3.745 0 0 1 3 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 0 1 1.043-3.296 3.746 3.746 0 0 1 3.296-1.043A3.746 3.746 0 0 1 12 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 0 1 3.296 1.043 3.746 3.746 0 0 1 1.043 3.296A3.745 3.745 0 0 1 21 12Z" />
                        </svg>
                        <span className="text-sm">User Created Successfully!</span>
                        <span className="text-xs">Please wait to be redirected to homepage.</span>
                    </div>
                ): null}
                {userExists ? (
                    <div className="bg-red-300/50 rounded-md p-5 font-semibold text-center my-5 flex flex-col justify-center items-center gap-3">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-7 h-7">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126ZM12 15.75h.007v.008H12v-.008Z" />
                        </svg>
                        <span className="text-sm">User Already Exists!</span>
                        <span className="text-xs">Please try again using a different email address.</span>
                    </div>
                ): null}
                <input required disabled={creatingUser} type="email" placeholder="email" value={email} onChange={ev => setEmail(ev.target.value)} />
                <input required disabled={creatingUser} type="password" placeholder="password" value={password} onChange={ev => setPassword(ev.target.value)} />
                <button type="submit">Create Account</button>
                <div className="border-b border-gray-300 text-center text-gray-500 my-4">or login with provider</div>
                <button className="flex gap-4 justify-center">
                    <Image src={"/google.png"} width={24} height={24} alt={"Google"} />
                    Login with Google
                </button>
            </form>
        </section>
    );
}