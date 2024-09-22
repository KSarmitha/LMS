import { createRef, useState } from "react";
import { Link } from "react-router-dom";
import axiosClient from "../axios-client.js";
import { useStateContext } from "../contexts/ContextProvider.jsx";

export default function Login() {
  const emailRef = createRef()
  const passwordRef = createRef()
  const { setUser, setToken } = useStateContext()
  const [message, setMessage] = useState(null)

  const onSubmit = ev => {
    ev.preventDefault()

    const payload = {
      email: emailRef.current.value,
      password: passwordRef.current.value,
    }
    axiosClient.post('/login', payload)
      .then(({ data }) => {
        setUser(data.user)
        setToken(data.token);
      })
      .catch((err) => {
        const response = err.response;
        if (response && response.status === 422) {
          setMessage(response.data.message)
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
            {message &&
              <div className="p-4 bg-red-50 font-semibold border border-red-600 text-red-700 rounded-md">
                <p>{message}</p>
              </div>
            }

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

            {/* Sign in button */}
            <div>
              <button type="submit"
                className="w-full bg-indigo-600 text-white py-2 px-4 rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">Sign
                in</button>
            </div>

            {/* Register */}
            <div className="mt-4 text-center">
              <p className="text-sm text-gray-600">
                Not registered?
                <Link to="/signup" className="font-medium text-indigo-600 hover:text-indigo-500 ml-1">Create an account</Link>
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