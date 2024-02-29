"use client"
import { useRouter } from 'next/navigation'
import Image from "next/image";
import { useState } from "react";
import Alert from "@/components/layout/Alert"
import Link from "next/link"

export default function RegisterPage() {
    const router = useRouter();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [creatingUser, setCreatingUser] = useState(false);
    const [userCreated, setUserCreated] = useState(false);
    const [error, setError] = useState(false);

    async function handleFormSubmit(ev) {
        ev.preventDefault();
        setUserCreated(false);
        setError(false);
        setCreatingUser(true);
        const res = await fetch("/api/register", {
            method: "POST",
            body: JSON.stringify({email, password}),
            headers: {"Content-Type": "application/json"}
        });
        if (!res.ok) {
            console.log(res.statusText);
            setCreatingUser(false);
            setError(true);
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
                {userCreated && (
                    <Alert type="success" smallText="User Created Successfully!" exSmallText="Please wait to be redirected to homepage." />
                )}
                {error && (
                    <Alert type="error" smallText="Error Registering User!" exSmallText="Please try again using a different email address." />
                )}
                <input required disabled={creatingUser} type="email" placeholder="email" value={email} onChange={ev => setEmail(ev.target.value)} />
                <input required disabled={creatingUser} type="password" placeholder="password" value={password} onChange={ev => setPassword(ev.target.value)} />
                <button disabled={creatingUser} type="submit">Create Account</button>
                <div className="border-b border-gray-300 text-center text-gray-500 my-4 text-sm">or Login with Provider</div>
                <div className="flex flex-col gap-3">
                    <button className="flex gap-4 justify-center">
                        <Image src={"/google.png"} width={24} height={24} alt={"Google"} />
                        Login with Google
                    </button>
                    <button className="flex gap-4 justify-center">
                        <Image src={"/github.png"} width={24} height={24} alt={"GitHub"} />
                        Login with GitHub
                    </button>
                </div>
                <div className="border-t border-gray-300 text-center text-gray-500 my-4 pt-4">Already have an account? <Link className="underline text-gray-900" href={"/login"}>Login</Link></div>
            </form>
        </section>
    );
}