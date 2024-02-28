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

    async function handleFormSubmit(ev) {
        ev.preventDefault();
        setCreatingUser(true);
        setUserCreated(false);
        const res = await fetch("/api/register", {
            method: "POST",
            body: JSON.stringify({email, password}),
            headers: {"Content-Type": "application/json"}
        });
        if (!res.ok) {
            console.log(res.status);
            return null;
        }
        setUserCreated(true);
        setCreatingUser(false);
        router.push("/");
    };

    return (
        <section className="mt-8">
            <h1 className="text-center text-primary text-4xl">Register</h1>
            <form className="block max-w-xs mx-auto" onSubmit={handleFormSubmit}>
                <input required type="email" placeholder="email" value={email} onChange={ev => setEmail(ev.target.value)} />
                <input required type="password" placeholder="password" value={password} onChange={ev => setPassword(ev.target.value)} />
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