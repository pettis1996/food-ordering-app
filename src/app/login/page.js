"use client"
import { useRouter } from 'next/navigation'
import {signIn} from "next-auth/react";
import Image from "next/image";
import { useState } from "react";
import Alert from "@/components/layout/Alert"
import Link from "next/link"


export default function LoginPage() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [authenticating, setAuthenticating] = useState(false);
    const [error, setError] = useState(false);

    async function handleFormSubmit(ev) {
        ev.preventDefault();
        setError(false);
        setAuthenticating(true);
        
        await signIn("credentials", {email, password, callbackUrl: '/'});

        setAuthenticating(false);
    };

    return (
        <section className="mt-8">
            <h1 className="text-center text-primary text-4xl">Login</h1>
            <form className="block max-w-xs mx-auto" onSubmit={handleFormSubmit}>
                {error && (
                    <Alert type="error" smallText="Oops, An error occured!" exSmallText="Please try again." />
                )}
                <input required disabled={authenticating} name="email" type="email" placeholder="email" value={email} onChange={ev => setEmail(ev.target.value)} />
                <input required disabled={authenticating} name="password" type="password" placeholder="password" value={password} onChange={ev => setPassword(ev.target.value)} />
                <button disabled={authenticating} type="submit">Login</button>
                <div className="border-b border-gray-300 text-center text-gray-500 my-4 text-sm">or Login with Provider</div>
                <div className="flex flex-col gap-3">
                    <button disabled={authenticating} className="flex gap-4 justify-center">
                        <Image src={"/google.png"} width={24} height={24} alt={"Google"} />
                        Login with Google
                    </button>
                    <button disabled={authenticating} className="flex gap-4 justify-center">
                        <Image src={"/github.png"} width={24} height={24} alt={"GitHub"} />
                        Login with GitHub
                    </button>
                </div>
                <div className="border-t border-gray-300 text-center text-gray-500 my-4 pt-4">Don&apos;t have an account? <Link className="underline text-gray-900" href={"/register"}>Register</Link></div>
            </form>
        </section>
    );
}