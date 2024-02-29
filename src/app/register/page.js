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
    const [redirectSeconds, setRedirectSeconds] = useState(5);

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
            setCreatingUser(false);
            return null;
        }
        setUserCreated(true);
        setCreatingUser(false);
        setTimeout(() => {
            const interval = setInterval(() => {
                console.log(redirectSeconds);
                if (redirectSeconds > 0) {
                    setRedirectSeconds(redirectSeconds - 1);
                } else {
                    clearInterval(interval);
                    router.push("/");
                }
            }, 1000)
        }, 1000);
    };

    return (
        <section className="mt-8">
            <h1 className="text-center text-primary text-4xl">Register</h1>
            <form className="block max-w-xs mx-auto" onSubmit={handleFormSubmit}>
                {userCreated ? (
                    <div className="bg-green-300/50 rounded-md p-5 font-semibold text-center my-5 flex justify-center items-center gap-3">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 0 1-1.043 3.296 3.745 3.745 0 0 1-3.296 1.043A3.745 3.745 0 0 1 12 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 0 1-3.296-1.043 3.745 3.745 0 0 1-1.043-3.296A3.745 3.745 0 0 1 3 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 0 1 1.043-3.296 3.746 3.746 0 0 1 3.296-1.043A3.746 3.746 0 0 1 12 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 0 1 3.296 1.043 3.746 3.746 0 0 1 1.043 3.296A3.745 3.745 0 0 1 21 12Z" />
                        </svg>
                        <h6 className="text-sm">User Created Successfully!</h6>
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