import React from 'react'
import Input from '../components/Input/Input';
import Link from 'next/link';

const Authorization = () => {
  return (
    <div className="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-sm">
        <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">Sign in to your account</h2>
      </div>

      <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
        <form className="space-y-6" action="#" method="POST">
          <div>
            <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">Email address</label>
            <Input id="email" name="email" type="email" placeholder="Your e-mail" required />
          </div>

          <div>
            <div className="flex items-center justify-between">
              <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900">Password</label>
              <div className="text-sm">
                <Link href="#" className="font-semibold text-indigo-600 hover:text-indigo-500">Forgot password?</Link>
              </div>
            </div>
            <Input id="password" name="password" type="password" placeholder="Password" required />
          </div>

          <div>
            <button type="submit" className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Sign in</button>
          </div>
        </form>

        <p className="mt-10 text-center text-sm text-gray-500">
          Not a member?
          <Link href="/registration" className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500">Sign up</Link>
        </p>
      </div>
    </div>
  )
}

export default Authorization;