'use client'
 
import { useRouter } from 'next/navigation'
import Link from 'next/link'

export default function Home() {
  const router = useRouter()

  const navigateToLogin = () => {
    router.push('/signin')
  }

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24 bg-black">
      <div className="flex-col max-w-max w-full items-center justify-between lg:flex">
        <h1 className='flex w-full justify-center align-center font-sans text-8xl'>Next.JS / Firebase Auth Example</h1>
        <div className='my-9'></div>
        <button
          type='button'
          className='p-4 bg-gray-500 rounded text-black font-bold hover:bg-gray-600 mb-3'
          onClick={() => navigateToLogin()}
        >SIGN IN</button>
        
        <Link href="/signup" className='hover:underline'>or Sign Up</Link>
      </div>
    </main>
  )
}
