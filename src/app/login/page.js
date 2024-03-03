"use client"
import { useRouter } from "next/navigation";
import { signIn } from "next-auth/react";
import Image from "next/image";
import { useState } from "react";
import Link from "next/link";
import { useSession } from "next-auth/react";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function LoginPage() {
    const router = useRouter();
    const session = useSession();
    const sessionStatus = session?.status;
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [authenticating, setAuthenticating] = useState(false);
    const [error, setError] = useState(false);

    if (sessionStatus === "authenticated") {
        router.push("/");
        return null;
    }

    async function handleFormSubmit(ev) {
        ev.preventDefault();
        setError(false);
        setAuthenticating(true);
        
        const result = await signIn("credentials", {email, password, callbackUrl: "/", redirect: false});

        if (result?.error) {
            toast.error(`Authentication error: ${result.error}`, {
                position: "top-right",
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                theme: "light",
            });
            setError(true);
        } 

        setAuthenticating(false);
    };
    return (
        <section className="mt-8">
            <h1 className="text-center text-primary text-4xl">Login</h1>
            <form className="block max-w-xs mx-auto" onSubmit={handleFormSubmit}>
                <input disabled={authenticating} name="email" type="email" placeholder="email" value={email} onChange={ev => setEmail(ev.target.value)} />
                <input disabled={authenticating} name="password" type="password" placeholder="password" value={password} onChange={ev => setPassword(ev.target.value)} />
                <button className="w-full" disabled={authenticating} type="submit">Login</button>
                <div className="border-b border-gray-300 text-center text-gray-500 my-4 text-sm">or Login with Provider</div>
                <div className="flex flex-col gap-3">
                    <button disabled={authenticating} onClick={() => signIn("google", {callbackUrl: "/"})} className="flex gap-4 justify-center w-full">
                        <Image src={"/google.png"} width={24} height={24} alt={"Google"} />
                        Login with Google
                    </button>
                    <button disabled className="flex gap-4 justify-center w-full">
                        <Image src={"/github.png"} width={24} height={24} alt={"GitHub"} />
                        Login with GitHub
                    </button>
                </div>
                <div className="border-t border-gray-300 text-center text-gray-500 my-4 pt-4">Don&apos;t have an account? <Link className="underline text-gray-900" href={"/register"}>Register</Link></div>
            </form>
            <ToastContainer />
        </section>
    );
}