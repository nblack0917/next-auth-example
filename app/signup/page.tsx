'use client'
import React, { useState, useEffect } from "react";
import signUp from "../firebase/auth/signup";
import { useRouter } from 'next/navigation'

function Page() {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPasword, setConfirmPassword] = useState('')
    const [passError, setpassError] = useState(true)
    const router = useRouter()

    const handleForm = async (event) => {
        event.preventDefault()

      if (!passError) {
        const { result, error } = await signUp(email, password);

        if (error) {
            return console.log(error)
        }

        // else successful
        console.log(result)
        return router.push("/dashboard")
      }
    }

    const checkPassword = () => {
      confirmPasword !== password ? setpassError(true) : setpassError(false)
    }

    const handlePassword = (pass: string) => {
      setPassword(pass);
    }

    const handleConfirmPassword = (pass: string) => {
      setConfirmPassword(pass);
    }

    useEffect(() => {
      password.length > 0 && confirmPasword.length > 0 && checkPassword();
    }, [password, confirmPasword])

    const goodButton = "bg-gray-500 px-6 py-4 font-bold text-xl rounded-xl mt-6 hover:bg-gray-600 text-black"
    const errorButton = "bg-gray-800 px-6 py-4 font-bold text-xl rounded-xl mt-6 text-black"

    return (<div className="flex flex-col w-screen h-screen justify-center items-center">
        <div className="flex flex-col w-full justify-center items-center">
            <h1 className="mt-6 mb-6 text-3xl font-bold">Sign up</h1>
            <form onSubmit={handleForm} className="flex flex-col w-full justify-center items-center">
                <label htmlFor="email">
                    <p>Email</p>
                    <input onChange={(e) => setEmail(e.target.value)} required type="email" name="email" id="email" placeholder="example@mail.com" className="p-3 w-80 rounded-xl text-black" />
                </label>
                <div className="mt-3"></div>
                <label htmlFor="password">
                    <p>Password</p>
                    <input onChange={(e) => handlePassword(e.target.value)} required type="password" name="password" id="password" placeholder="password" className="p-3 w-80 rounded-xl text-black" />
                </label>
                <label htmlFor="confirmPassword">
                    <p>Confirm Password</p>
                    <input onChange={(e) => handleConfirmPassword(e.target.value)} required type="password" name="confirmPassword" id="confirmPassword" placeholder="confirm password" className="p-3 w-80 rounded-xl text-black" />
                </label>
                <button type="submit" className={!passError ? goodButton : errorButton}>Sign up</button>
            </form>
        </div>
    </div>);
}

export default Page;