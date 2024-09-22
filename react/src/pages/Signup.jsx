import { createRef, useState } from "react";
import { Link } from "react-router-dom";
import axiosClient from "../axios-client.js";
import { useStateContext } from "../contexts/ContextProvider.jsx";

export default function Signup() {
  const nameRef = createRef()
  const emailRef = createRef()
  const passwordRef = createRef()
  const passwordConfirmationRef = createRef()
  const {setUser, setToken} = useStateContext()
  const [errors, setErrors] = useState(null)

  const onSubmit = ev => {
    ev.preventDefault()

    const payload = {
      name: nameRef.current.value,
      email: emailRef.current.value,
      password: passwordRef.current.value,
      password_confirmation: passwordConfirmationRef.current.value,
    }
    axiosClient.post('/signup', payload)
      .then(({data}) => {
        setUser(data.user)
        setToken(data.token);
      })
      .catch(err => {
        const response = err.response;
        if (response && response.status === 422) {
          setErrors(response.data.errors)
        }
      })
  }

  return (
      <div className="min-h-screen flex">
      {/* Left side */}
      <div className="w-full md:w-1/2 bg-black flex items-center justify-center">
        <div className="max-w-md w-full bg-white p-10 rounded-md">
          <h2 className="text-2xl font-bold text-gray-800 text-center">Login into your account</h2>
          <form className="mt-8 space-y-6" onSubmit={onSubmit}>
            {errors &&
              <div className="p-4 bg-red-50 font-semibold border border-red-600 text-red-700 rounded-md">
                {Object.keys(errors).map(key => (
                <p key={key}>{errors[key][0]}</p>
              ))}
              </div>
            }

            {/* Full name field */}
            <div>
              <label className="block text-sm font-medium text-gray-700">Full Name</label>
              <input
                ref={nameRef}
                id="name"
                name="name"
                type="text"
                required
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" />
            </div>

            {/* Email Field */}
            <div>
              <label className="block text-sm font-medium text-gray-700">Email address</label>
              <input
                ref={emailRef}
                id="email"
                name="email"
                type="email"
                required
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" />
            </div>

            {/* Password Field */}
            <div>
              <label className="block text-sm font-medium text-gray-700">Password</label>
              <input
                ref={passwordRef}
                id="password"
                name="password"
                type="password" required
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" />
            </div>

            {/* Confirm password Field */}
            <div>
              <label className="block text-sm font-medium text-gray-700">Confirm Password</label>
              <input
                ref={passwordConfirmationRef}
                id="password"
                name="password"
                type="password" required
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" />
            </div>

            {/* Sign in button */}
            <div>
              <button type="submit"
                className="w-full bg-indigo-600 text-white py-2 px-4 rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">
                Sign up</button>
            </div>

            {/* Register */}
            <div className="mt-4 text-center">
              <p className="text-sm text-gray-600">
                Already registered? 
                <Link to="/login" className="font-medium text-indigo-600 hover:text-indigo-500 ml-1">Sign in</Link>
              </p>
            </div>
          </form>
        </div>
      </div>

      {/* Right side */}
      <div className="hidden md:block w-1/2 bg-black bg-contain bg-no-repeat bg-center bg-[url('./assets/banner.png')]"></div>
    </div>
  )
}
