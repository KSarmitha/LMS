import { CalendarIcon } from "@heroicons/react/outline";
import Calendar from 'react-calendar';
// import 'react-calendar/dist/Calendar.css';
import { Link } from "react-router-dom";
import '../custom-styles/Calendar.css';

const Landing = () => {
    const employeesOnLeave = [
        { name: 'John Doe', leaveType: 'Sick Leave', days: 2, duration: 'Full Day' },
        { name: 'Jane Smith', leaveType: 'Casual Leave', days: 1, duration: 'Half Day' },
        { name: 'Emily Johnson', leaveType: 'Annual Leave', days: 5, duration: 'Full Day' },
        { name: 'Michael Brown', leaveType: 'Sick Leave', days: 3, duration: 'Full Day' },
        { name: 'Sarah Taylor', leaveType: 'Maternity Leave', days: 30, duration: 'Full Day' },
        { name: 'Robert Wilson', leaveType: 'Emergency Leave', days: 1, duration: 'Full Day' },
        { name: 'Jessica White', leaveType: 'Sick Leave', days: 2, duration: 'Half Day' },
        { name: 'David Harris', leaveType: 'Casual Leave', days: 2, duration: 'Full Day' },
        { name: 'Sophia Miller', leaveType: 'Sick Leave', days: 4, duration: 'Full Day' },
        { name: 'James Moore', leaveType: 'Annual Leave', days: 3, duration: 'Full Day' }
    ];

    return (
        <div className="p-8">
            {/* Section for Employees on Leave Today */}
            <div className="text-right">
                <Link
                    to="/request-leave"
                    className="inline-flex items-center px-4 py-2 bg-yellow-600 text-white text-sm font-medium rounded-md hover:bg-yellow-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                >
                    <CalendarIcon className="h-5 w-5 mr-2" />
                    Request Leave
                </Link>
            </div>

            <div className="flex mt-8">
                <div className="w-full md:w-3/4 mr-8">
                    <div className="bg-white p-6 rounded-lg shadow-lg mb-6">
                        <h2 className="text-2xl font-semibold mb-4">Employees on Leave Today</h2>
                        <table className="min-w-full border-collapse bg-white shadow-sm">
                            <thead>
                                <tr className="bg-gray-100">
                                    <th className="px-6 py-4 text-left">Employee Name</th>
                                    <th className="px-6 py-4 text-left">Leave Type</th>
                                    <th className="px-6 py-4 text-left">Days of Leave</th>
                                    <th className="px-6 py-4 text-left">Leave Duration</th>
                                </tr>
                            </thead>
                            <tbody>
                                {employeesOnLeave.length > 0 ? (
                                    employeesOnLeave.map((employee, index) => (
                                        <tr key={index} className="border-b border-gray-200">
                                            <td className="px-6 py-4">{employee.name}</td>
                                            <td className="px-6 py-4">{employee.leaveType}</td>
                                            <td className="px-6 py-4">{employee.days} {employee.days > 1 ? 'days' : 'day'}</td>
                                            <td className="px-6 py-4">{employee.duration}</td>
                                        </tr>
                                    ))
                                ) : (
                                    <tr>
                                        <td colSpan="4" className="p-4 text-center text-gray-500">No employees on leave today.</td>
                                    </tr>
                                )}
                            </tbody>
                        </table>
                    </div>
                </div>

                <div className="calendar-container hidden md:block w-1/4 right-0">
                    <Calendar />

                    <div className="flex items-center justify-center mt-6">
                        <div className="p-10 bg-white rounded-lg shadow-lg space-y-6 text-center">
                            <h2 className="text-2xl font-bold text-gray-800">Select Your Dashboard</h2>
                            <p className="text-gray-600">Please choose between your personal dashboard or the admin dashboard.</p>

                            <div className="space-y-4">
                                <Link to="/dashboard">
                                    <button className="w-full py-3 bg-blue-600 text-white rounded-lg shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50">
                                        Employee Dashboard
                                    </button>
                                </Link>

                                <Link to="/admin">
                                    <button className="w-full py-3 mt-3 bg-green-600 text-white rounded-lg shadow-md hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-opacity-50">
                                        Admin Dashboard
                                    </button>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Landing;
