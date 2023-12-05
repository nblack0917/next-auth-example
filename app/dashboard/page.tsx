'use client'
import React from "react";
import { useAuthContext } from "../context/AuthContext";
import { useRouter } from "next/navigation";

import  signOutFB  from '../firebase/auth/signout'

function Dashboard() {
    const { user } = useAuthContext()
    const router = useRouter()

    React.useEffect(() => {
        if (user == null) router.push("/")
    }, [user])

    return (
    <div className="flex flex-col w-screen h-screen justify-center items-center">
        <h1 className="text-2xl font-bold mb-6">Only logged in users can view this page</h1>
        <button className="bg-gray-500 p-6 rounded-xl hover:bg-gray-600 font-bold text-xl text-black" onClick={() => signOutFB()}>SIGN OUT</button>
    </div>
    );
}

export default Dashboard