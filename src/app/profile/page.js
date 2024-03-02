"use client"
import { useRouter } from "next/navigation";
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
    let userName = userData?.name || userData?.email;
    return (
        <section className="mt-8">
            <h1 className="text-center text-primary text-4xl">My Profile</h1>
        </section>
    );
}