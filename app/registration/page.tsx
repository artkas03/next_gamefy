import React from 'react'
import Input from '../components/Input/Input';
import Link from 'next/link';

const Registration = () => {
  return (
    <div className="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-sm">
        <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">Sign up your account</h2>
      </div>

      <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
        <form className="space-y-6" action="#" method="POST">
          <div>
            <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">Username</label>
            <Input name="username" type="text" placeholder="Username" required />
          </div>

          <div>
            <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">Email address</label>
            <Input name="email" type="email" placeholder="example@gmail.com" required />
          </div>

          <div className="flex w-full justify-between">
            <div>
              <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900">Password</label>
              <Input name="password" type="password" placeholder="Password" required />
            </div>

            <div>
              <label htmlFor="password-confirmation" className="block text-sm font-medium leading-6 text-gray-900">Confirm password</label>
              <Input name="password-confirmation" type="password" placeholder="Confirm password" required />
            </div>
          </div>

          <div>
            <button type="submit" className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Sign up</button>
          </div>

          <p className="mt-10 text-center text-sm text-gray-500">
            Already registered?
            <Link href="/authorization" className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500">Sign in</Link>
          </p>
        </form>
      </div>
    </div>
  )
}

export default Registration;