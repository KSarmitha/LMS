import { useState } from 'react';

const initialPendingRequests = [
    {
        id: 1,
        employee: 'John Doe',
        type: 'Sick Leave',
        startDate: '2024-08-10',
        endDate: '2024-08-12',
        supportingDocs: 'doctor_note.pdf',
        status: 'Pending',
      },
      {
        id: 2,
        employee: 'Jane Smith',
        type: 'Vacation',
        startDate: '2024-08-14',
        endDate: '2024-08-20',
        supportingDocs: 'travel_request.pdf',
        status: 'Pending',
      },
];

const initialLeaveTypes = ['Vacation', 'Sick Leave', 'Personal Leave'];

const initialEmployees = [
  { id: 1, name: 'John Doe', email: 'john@example.com' },
  { id: 2, name: 'Jane Smith', email: 'jane@example.com' },
];

const AdminDashboard = () => {
  const [activeTab, setActiveTab] = useState('dashboard');
  const [leaveTypes, setLeaveTypes] = useState(initialLeaveTypes);
  const [employees, setEmployees] = useState(initialEmployees);
  const [newLeaveType, setNewLeaveType] = useState('');
  const [pendingRequests, setPendingRequests] = useState(initialPendingRequests);
  const [selectedRequest, setSelectedRequest] = useState(null);

  const handleApprove = (id) => {
    const updatedRequests = pendingRequests.map(request =>
      request.id === id ? { ...request, status: 'Approved' } : request
    );
    setPendingRequests(updatedRequests);
    setSelectedRequest(null);
  };

  const handleReject = (id) => {
    const updatedRequests = pendingRequests.map(request =>
      request.id === id ? { ...request, status: 'Rejected' } : request
    );
    setPendingRequests(updatedRequests);
    setSelectedRequest(null);
  };

  const handleAddLeaveType = () => {
    if (newLeaveType && !leaveTypes.includes(newLeaveType)) {
      setLeaveTypes([...leaveTypes, newLeaveType]);
      setNewLeaveType('');
    }
  };

  const handleDeleteLeaveType = (type) => {
    setLeaveTypes(leaveTypes.filter((leaveType) => leaveType !== type));
  };

  // Functions to manage employees
  const handleDeleteEmployee = (id) => {
    setEmployees(employees.filter(employee => employee.id !== id));
  };

  return (
    <div className="flex flex-col items-center h-screen bg-gray-100 p-8">
      <h1 className="text-2xl font-semibold mb-6">Admin Dashboard</h1>
      
      {/* Tab Menu */}
      <div className="mb-6">
        <button
          onClick={() => setActiveTab('dashboard')}
          className={`px-4 py-2 mx-2 ${activeTab === 'dashboard' ? 'bg-blue-500 text-white' : 'bg-gray-300 text-black'} rounded-lg`}
        >
          Dashboard
        </button>
        <button
          onClick={() => setActiveTab('leaveTypes')}
          className={`px-4 py-2 mx-2 ${activeTab === 'leaveTypes' ? 'bg-blue-500 text-white' : 'bg-gray-300 text-black'} rounded-lg`}
        >
          Leave Types
        </button>
        <button
          onClick={() => setActiveTab('employees')}
          className={`px-4 py-2 mx-2 ${activeTab === 'employees' ? 'bg-blue-500 text-white' : 'bg-gray-300 text-black'} rounded-lg`}
        >
          Manage Employees
        </button>
      </div>

      {/* Dashboard Tab (Pending Requests) */}
      {activeTab === 'dashboard' && (
        <div className="w-full max-w-6xl bg-white p-8 rounded-lg shadow-md">
          <h2 className="text-xl font-medium mb-4">Pending Requests</h2>
          {pendingRequests.length === 0 ? (
          <p className="text-center">No pending leave requests.</p>
        ) : (
          <table className="table-auto w-full">
            <thead>
              <tr className="text-left">
                <th className="px-4 py-2">Employee</th>
                <th className="px-4 py-2">Leave Type</th>
                <th className="px-4 py-2">Start Date</th>
                <th className="px-4 py-2">End Date</th>
                <th className="px-4 py-2">Actions</th>
              </tr>
            </thead>
            <tbody>
              {pendingRequests
                .filter((leave) => leave.status === 'Pending')
                .map((leave) => (
                  <tr key={leave.id} className="border-t">
                    <td className="px-4 py-2">{leave.employee}</td>
                    <td className="px-4 py-2">{leave.type}</td>
                    <td className="px-4 py-2">{leave.startDate}</td>
                    <td className="px-4 py-2">{leave.endDate}</td>
                    <td className="px-4 py-2">
                      <button
                        onClick={() => setSelectedRequest(leave)}
                        className="text-blue-500 hover:underline mr-4"
                      >
                        Review
                      </button>
                    </td>
                  </tr>
                ))}
            </tbody>
          </table>
        )}

         {/* Modal for reviewing leave request details */}
      {selectedRequest && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
          <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-lg">
            <h2 className="text-xl font-medium mb-4">
              Review Leave Request - {selectedRequest.employee}
            </h2>
            <p><strong>Leave Type:</strong> {selectedRequest.type}</p>
            <p><strong>Start Date:</strong> {selectedRequest.startDate}</p>
            <p><strong>End Date:</strong> {selectedRequest.endDate}</p>
            <p><strong>Supporting Documents:</strong></p>
            <a
              href={`path_to_files/${selectedRequest.supportingDocs}`}
              className="text-blue-500 hover:underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              {selectedRequest.supportingDocs}
            </a>
            <div className="flex justify-end space-x-4 mt-6">
              <button
                onClick={() => handleReject(selectedRequest.id)}
                className="bg-red-500 text-white py-2 px-4 rounded-lg hover:bg-red-600"
              >
                Reject
              </button>
              <button
                onClick={() => handleApprove(selectedRequest.id)}
                className="bg-green-500 text-white py-2 px-4 rounded-lg hover:bg-green-600"
              >
                Approve
              </button>
            </div>
          </div>
        </div>
      )}
        </div>
      )}

      {/* Leave Types Configuration Tab */}
      {activeTab === 'leaveTypes' && (
        <div className="w-full max-w-6xl bg-white p-8 rounded-lg shadow-md">
          <h2 className="text-xl font-medium mb-4">Configure Leave Types</h2>
          <div className="mb-4">
            <input
              type="text"
              value={newLeaveType}
              onChange={(e) => setNewLeaveType(e.target.value)}
              placeholder="Add new leave type"
              className="border border-gray-300 p-2 rounded-lg w-full"
            />
            <button
              onClick={handleAddLeaveType}
              className="mt-2 bg-green-500 text-white py-2 px-4 rounded-lg hover:bg-green-600"
            >
              Add Leave Type
            </button>
          </div>

          <ul className="list-disc pl-6">
            {leaveTypes.map((type) => (
              <li key={type} className="flex justify-between items-center">
                <span>{type}</span>
                <button
                  onClick={() => handleDeleteLeaveType(type)}
                  className="text-red-500 hover:underline"
                >
                  Delete
                </button>
              </li>
            ))}
          </ul>
        </div>
      )}

      {/* Manage Employees Tab */}
      {activeTab === 'employees' && (
        <div className="w-full max-w-6xl bg-white p-8 rounded-lg shadow-md">
          <h2 className="text-xl font-medium mb-4">Manage Employees</h2>
          <ul className="list-disc pl-6">
            {employees.map((employee) => (
              <li key={employee.id} className="flex justify-between items-center">
                <span>{employee.name} - {employee.email}</span>
                <button
                  onClick={() => handleDeleteEmployee(employee.id)}
                  className="text-red-500 hover:underline"
                >
                  Delete
                </button>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default AdminDashboard;
