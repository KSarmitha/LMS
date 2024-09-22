import { useState } from 'react';

const EmployeeLeaveSchedule = () => {
  const [showColleagues, setShowColleagues] = useState(false);

  const userLeaveData = [
    { name: 'John Doe', leaveType: 'Sick Leave', startDate: '2024-08-15', endDate: '2024-08-17', duration: '3 Days' },
  ];

  const colleaguesLeaveData = [
    { name: 'Jane Smith', leaveType: 'Annual Leave', startDate: '2024-08-10', endDate: '2024-08-15', duration: '6 Days' },
    { name: 'Michael Brown', leaveType: 'Casual Leave', startDate: '2024-08-12', endDate: '2024-08-12', duration: '1 Day' },
  ];

  return (
    <div className="container mx-auto p-8">
      <h2 className="text-2xl font-semibold mb-4">My Leave Schedule</h2>

      <div className="bg-white border rounded shadow-lg p-6 mb-6">
        <h3 className="text-xl font-semibold mb-4">Your Leaves</h3>
        <table className="min-w-full bg-white border rounded shadow-lg">
          <thead>
            <tr className="bg-gray-100">
              <th className="px-6 py-3 text-left">Leave Type</th>
              <th className="px-6 py-3 text-left">Start Date</th>
              <th className="px-6 py-3 text-left">End Date</th>
              <th className="px-6 py-3 text-left">Duration</th>
            </tr>
          </thead>
          <tbody>
            {userLeaveData.map((leave, index) => (
              <tr key={index} className="hover:bg-gray-50">
                <td className="px-6 py-4">{leave.leaveType}</td>
                <td className="px-6 py-4">{leave.startDate}</td>
                <td className="px-6 py-4">{leave.endDate}</td>
                <td className="px-6 py-4">{leave.duration}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="flex items-center mb-4">
        <input
          type="checkbox"
          checked={showColleagues}
          onChange={() => setShowColleagues(!showColleagues)}
          className="mr-2"
        />
        <label className="text-lg font-semibold">Show Colleagues’ Planned Leaves</label>
      </div>

      {showColleagues && (
        <div className="bg-white border rounded shadow-lg p-6">
          <h3 className="text-xl font-semibold mb-4">Colleagues` Planned Leaves</h3>
          <table className="min-w-full bg-white border rounded shadow-lg">
            <thead>
              <tr className="bg-gray-100">
                <th className="px-6 py-3 text-left">Employee Name</th>
                <th className="px-6 py-3 text-left">Leave Type</th>
                <th className="px-6 py-3 text-left">Start Date</th>
                <th className="px-6 py-3 text-left">End Date</th>
                <th className="px-6 py-3 text-left">Duration</th>
              </tr>
            </thead>
            <tbody>
              {colleaguesLeaveData.map((colleague, index) => (
                <tr key={index} className="hover:bg-gray-50">
                  <td className="px-6 py-4">{colleague.name}</td>
                  <td className="px-6 py-4">{colleague.leaveType}</td>
                  <td className="px-6 py-4">{colleague.startDate}</td>
                  <td className="px-6 py-4">{colleague.endDate}</td>
                  <td className="px-6 py-4">{colleague.duration}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default EmployeeLeaveSchedule;
