'use client'
import React from "react";
import signIn from "../firebase/auth/signin";
import { useRouter } from 'next/navigation'

function Page() {
    const [email, setEmail] = React.useState('')
    const [password, setPassword] = React.useState('')
    const router = useRouter()

    const handleForm = async (event) => {
        event.preventDefault()

        const { result, error } = await signIn(email, password);

        if (error) {
            return console.log(error)
        }

        // else successful
        console.log(result)
        return router.push("/dashboard")
    }
    return (
        <div className="flex flex-col w-screen h-screen justify-center items-center">
            <div className="flex flex-col w-full justify-center items-center">
                <h1 className="mt-6 mb-6 text-3xl font-bold">Sign in</h1>
                <form onSubmit={handleForm} className="flex flex-col w-full justify-center items-center">
                    <label htmlFor="email">
                        <p>Email</p>
                        <input onChange={(e) => setEmail(e.target.value)} required type="email" name="email" id="email" placeholder="example@mail.com" className="p-3 w-80 rounded-xl" />
                    </label>
                    <div className="mt-3"></div>
                    <label htmlFor="password">
                        <p>Password</p>
                        <input onChange={(e) => setPassword(e.target.value)} required type="password" name="password" id="password" placeholder="password" className="p-3 w-80 rounded-xl" />
                    </label>
                    <button className="bg-gray-500 px-6 py-4 font-bold text-xl rounded-xl mt-6 hover:bg-gray-600 text-black" type="submit">Sign in</button>
                </form>
            </div>

        </div>
    );
}

export default Page;