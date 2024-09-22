import { useState } from 'react';

// Sample data for leave requests
const initialLeaveRequests = [
  {
    id: 1,
    type: 'Vacation',
    startDate: '2024-12-20',
    endDate: '2024-12-25',
    status: 'Approved',
  },
  {
    id: 2,
    type: 'Sick Leave',
    startDate: '2024-11-16',
    endDate: '2024-11-17',
    status: 'Pending',
  },
  {
    id: 3,
    type: 'Personal Leave',
    startDate: '2024-09-30',
    endDate: '2024-09-31',
    status: 'Rejected',
  },
  {
    id: 4,
    type: 'Sick Leave',
    startDate: '2024-09-20',
    endDate: '2024-09-25',
    status: 'Pending',
  },
  {
    id: 5,
    type: 'Personal Leave',
    startDate: '2024-10-20',
    endDate: '2024-10-22',
    status: 'Rejected',
  },
];

const LeaveManagement = () => {
  const [leaveRequests, setLeaveRequests] = useState(initialLeaveRequests);

  const handleDelete = (id) => {
    const updatedLeaves = leaveRequests.filter(leave => leave.id !== id);
    setLeaveRequests(updatedLeaves);
  };

  const handleEdit = (id) => {
    const leaveToEdit = leaveRequests.find(leave => leave.id === id);
    alert(`You can edit leave request for ${leaveToEdit.type} starting on ${leaveToEdit.startDate}`);
    // Here, you'd trigger your modal or form to edit the leave request
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <h1 className="text-2xl font-semibold mb-6">Manage Your Leave Requests</h1>
      <div className="w-full max-w-4xl bg-white p-8 rounded-lg shadow-md">
        {leaveRequests.length === 0 ? (
          <p className="text-center">No leave requests available.</p>
        ) : (
          <table className="table-auto w-full">
            <thead>
              <tr className="text-left">
                <th className="px-4 py-2">Leave Type</th>
                <th className="px-4 py-2">Start Date</th>
                <th className="px-4 py-2">End Date</th>
                <th className="px-4 py-2">Status</th>
                <th className="px-4 py-2">Actions</th>
              </tr>
            </thead>
            <tbody>
              {leaveRequests.map((leave) => (
                <tr key={leave.id} className="border-t">
                  <td className="px-4 py-2">{leave.type}</td>
                  <td className="px-4 py-2">{leave.startDate}</td>
                  <td className="px-4 py-2">{leave.endDate}</td>
                  <td className={`px-4 py-2 ${leave.status === 'Approved' ? 'text-green-500' : leave.status === 'Rejected' ? 'text-red-500' : 'text-yellow-500'}`}>
                    {leave.status}
                  </td>
                  <td className="px-4 py-2">
                    <button
                      onClick={() => handleEdit(leave.id)}
                      className="text-blue-500 hover:underline mr-4"
                    >
                      Edit
                    </button>
                    <button
                      onClick={() => handleDelete(leave.id)}
                      className="text-red-500 hover:underline"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
};

export default LeaveManagement;
