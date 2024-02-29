"use client"
import { useSession } from "next-auth/react";
import Link from "next/link"

export default function Header() {
    const session = useSession();
    const sessionStatus = session?.status;
    const userEmail = session?.data?.user?.email;

    return (
        <header className="flex items-center justify-between">
            <nav className="flex items-center gap-8 text-gray-500 font-semibold">
                <Link className="text-primary font-semibold text-2xl" href={'/'}>ST PIZZA</Link>
                <Link href={'/'}>Home</Link>
                <Link href={''}>Menu</Link>
                <Link href={''}>About</Link>
                <Link href={''}>Contact</Link>  
            </nav>
            <nav className="flex items-center gap-4 text-gray-500 font-semibold">
                {sessionStatus === "authenticated" ? (
                    <>
                        Welcome back, {userEmail}
                        <Link href={'/logout'} className="bg-primary text-white rounded-full px-8 py-2">Logout</Link>
                    </>
                ): (
                    <>
                        <Link href={'/login'}>Login</Link>
                        <Link href={'/register'} className="bg-primary text-white rounded-full px-8 py-2">Register</Link>
                    </>
                )}
            </nav>
      </header>
    );
}