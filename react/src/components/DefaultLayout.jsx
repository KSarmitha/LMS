import { LogoutIcon, UserCircleIcon } from '@heroicons/react/outline';
import { Link, Navigate, Outlet } from "react-router-dom";
import axiosClient from "../axios-client.js";
import { useStateContext } from "../contexts/ContextProvider.jsx";

const DefaultLayout = () => {
    const { user, token , setUser, setToken } = useStateContext();

    const logout = (ev) => {
        ev.preventDefault();

        axiosClient.post('/logout')
        .then(() => {
          setUser({});
          setToken(null)
        })
    }

    if (!token) {
        return <Navigate to="/login" />
    }
    return (
        <>
            <header>
                <div className="bg-slate-950 text-white p-4 flex items-center justify-between">
                    <Link to="/">
                        <div className="flex items-center space-x-4">
                            <img src="/assets/logo.png" alt='logo' className='h-8 w-auto rounded'/>
                        </div>
                    </Link>
                    <div className="flex items-center space-x-4">
                        <Link to="/profile" className='flex cursor-pointer'>
                            <UserCircleIcon className="h-6 w-6 text-white mr-1" /> 
                            <span>{ user.name }</span>
                        </Link>

                        <Link to="/logout" className="flex cursor-pointer items-center text-white hover:text-gray-200">
                            <LogoutIcon onClick={() => logout} className="h-6 w-6" />
                        </Link>
                    </div>
                </div>
            </header>

            <main className='bg-gray-50'>
                <Outlet />
            </main>
        </>
    );
};

export default DefaultLayout;