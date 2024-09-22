import { Link } from 'react-router-dom';

const ProfileManagement = () => {
  // Example data
  const leaveBalance = {
    annual: 10,
    sick: 5,
    casual: 3,
  };

  const leaveHistory = [
    { date: '2024-08-01', type: 'Sick Leave', days: 2, status: 'Approved' },
    { date: '2024-07-15', type: 'Annual Leave', days: 5, status: 'Approved' },
    { date: '2024-06-05', type: 'Casual Leave', days: 1, status: 'Rejected' },
    { date: '2024-05-20', type: 'Sick Leave', days: 1, status: 'Approved' },
    // Add more records as needed
  ];

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      {/* Profile Management Section */}
      <div className="max-w-4xl mx-auto bg-white shadow-md rounded-md p-6 mb-6">
        <h1 className="text-3xl font-bold text-gray-900 mb-4">Profile Management</h1>
        
        {/* Profile Info */}
        <div className="flex space-x-8">
          <div className="w-1/3">
            <img
              src="./assets/avatar.png"
              alt="Profile"
              className="rounded-full border border-gray-800 p-2 h-32 w-32 object-cover mx-auto"
            />
          </div>
          <div className="w-2/3">
            <h2 className="text-2xl font-semibold text-gray-800">John Doe</h2>
            <p className="text-gray-600">john.doe@example.com</p>
            <p className="text-gray-600 mt-2">Position: Software Engineer</p>
            <p className="text-gray-600">Department: IT</p>

            <div className="mt-4">
              <button className="px-4 py-2 bg-yellow-600 text-white text-sm font-medium rounded-md hover:bg-yellow-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-yellow-500">
                Edit Profile
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Leave Balance Section */}
      <div className="max-w-4xl mx-auto bg-white shadow-md rounded-md p-6 mb-6">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">Leave Balance</h2>
        <div className="grid grid-cols-3 gap-4">
          <div className="p-4 bg-indigo-50 rounded-md text-center">
            <h3 className="text-xl font-bold text-indigo-600">Annual Leave</h3>
            <p className="text-2xl text-gray-900">{leaveBalance.annual} Days</p>
          </div>
          <div className="p-4 bg-yellow-50 rounded-md text-center">
            <h3 className="text-xl font-bold text-yellow-600">Sick Leave</h3>
            <p className="text-2xl text-gray-900">{leaveBalance.sick} Days</p>
          </div>
          <div className="p-4 bg-green-50 rounded-md text-center">
            <h3 className="text-xl font-bold text-green-600">Casual Leave</h3>
            <p className="text-2xl text-gray-900">{leaveBalance.casual} Days</p>
          </div>
        </div>
      </div>

      {/* Leave History Section */}
      <div className="max-w-4xl mx-auto bg-white shadow-md rounded-md p-6">
        <div className='flex justify-between'>
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Leave History</h2>
            <Link to="/manage-leave" className='text-right'>
                <p className='text-blue-500 hover:underline mr-4'> Manage Leaves</p>
            </Link>
        </div>
        
        <table className="min-w-full table-auto">
          <thead>
            <tr className="bg-gray-100 text-left">
              <th className="px-4 py-2">Date</th>
              <th className="px-4 py-2">Leave Type</th>
              <th className="px-4 py-2">Days</th>
              <th className="px-4 py-2">Status</th>
            </tr>
          </thead>
          <tbody className="text-gray-700">
            {leaveHistory.map((record, index) => (
              <tr key={index} className="border-t">
                <td className="px-4 py-2">{record.date}</td>
                <td className="px-4 py-2">{record.type}</td>
                <td className="px-4 py-2">{record.days}</td>
                <td className={`px-4 py-2 ${record.status === 'Approved' ? 'text-green-600' : 'text-red-600'}`}>
                  {record.status}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ProfileManagement;
