
import { createBrowserRouter, Navigate } from 'react-router-dom';
import DefaultLayout from './components/defaultLayout.jsx';
import GuestLayout from './components/GuestLayout.jsx';
import AdminDashboard from './pages/AdminDashboard.jsx';
import Dashboard from './pages/Dashboard.jsx';
import Landing from './pages/Landing.jsx';
import LeaveManagement from './pages/LeaveManagement.jsx';
import LeaveRequestForm from './pages/LeaveRequestForm.jsx';
import Login from './pages/Login.jsx';
import NotFound from './pages/NotFound.jsx';
import ProfileManagement from './pages/ProfileManagement.jsx';
import Signup from './pages/Signup.jsx';

const router = createBrowserRouter ([
    {
        path: '/',
        element: <DefaultLayout />,
        children: [
            {
                path: '/',
                element: <Navigate to="/landing"/>
            },
            {
                path: 'dashboard',
                element: <Dashboard />
            }, {
                path: '/landing',
                element: <Landing />
            },
            {
                path: 'profile',
                element: <ProfileManagement />
            },
            {
                path: 'request-leave',
                element: <LeaveRequestForm />
            },
            {
                path: 'manage-leave',
                element: <LeaveManagement />
            },
            {
                path: 'admin',
                element: <AdminDashboard />
            }
        ]
    },
    {
        path: '/',
        element: <GuestLayout />,
        children: [
            {
                path: '/login',
                element: <Login />
            },
            {
                path: '/signup',
                element: <Signup />
            }
        ]
    },
    {
        path: '*',
        element: <NotFound />
    }
]);

export default router;