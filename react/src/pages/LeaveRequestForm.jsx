import { useState } from 'react';

const LeaveRequestForm = () => {
  const [formData, setFormData] = useState({
    empNo: '',
    employeeName: '',
    requestDate: '',
    state: '',
    leaveType: '',
    leaveFrom: '',
    leaveTo: '',
    noOfDaysHours: '',
    reasonForLeave: '',
    attachment: null,
    coverUpID: '',
    coverUpBy: '',
  });

  const handleChange = (e) => {
    const { name, value, type, files } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'file' ? files[0] : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Submit form logic here
    console.log('Form submitted:', formData);
  };

  return (
    <div className="flex items-center justify-center p-8">
      <div className="max-w-4xl w-full bg-white p-8 rounded-lg shadow-lg">
        {/* Header */}
        <div className="mb-8 text-center">
          <h1 className="text-3xl font-bold text-gray-800">Leave Request</h1>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Row 1 */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label htmlFor="empNo" className="block text-sm font-medium text-gray-700">Emp No:</label>
              <input
                type="text"
                id="empNo"
                name="empNo"
                value={formData.empNo}
                onChange={handleChange}
                className="mt-1 p-2 border border-gray-300 rounded-md w-full"
              />
            </div>
            <div>
              <label htmlFor="employeeName" className="block text-sm font-medium text-gray-700">Employee Name:</label>
              <input
                type="text"
                id="employeeName"
                name="employeeName"
                value={formData.employeeName}
                onChange={handleChange}
                className="mt-1 p-2 border border-gray-300 rounded-md w-full"
              />
            </div>
            <div>
              <label htmlFor="requestDate" className="block text-sm font-medium text-gray-700">Request Date:</label>
              <input
                type="date"
                id="requestDate"
                name="requestDate"
                value={formData.requestDate}
                onChange={handleChange}
                className="mt-1 p-2 border border-gray-300 rounded-md w-full"
              />
            </div>
            <div>
              <label htmlFor="state" className="block text-sm font-medium text-gray-700">State:</label>
              <input
                type="text"
                id="state"
                name="state"
                value={formData.state}
                onChange={handleChange}
                className="mt-1 p-2 border border-gray-300 rounded-md w-full"
              />
            </div>
          </div>

          {/* Row 2 */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div>
              <label htmlFor="leaveType" className="block text-sm font-medium text-gray-700">Leave Type:</label>
              <input
                type="text"
                id="leaveType"
                name="leaveType"
                value={formData.leaveType}
                onChange={handleChange}
                className="mt-1 p-2 border border-gray-300 rounded-md w-full"
              />
            </div>
            <div>
              <label htmlFor="leaveFrom" className="block text-sm font-medium text-gray-700">Leave From:</label>
              <input
                type="date"
                id="leaveFrom"
                name="leaveFrom"
                value={formData.leaveFrom}
                onChange={handleChange}
                className="mt-1 p-2 border border-gray-300 rounded-md w-full"
              />
            </div>
            <div>
              <label htmlFor="leaveTo" className="block text-sm font-medium text-gray-700">Leave To:</label>
              <input
                type="date"
                id="leaveTo"
                name="leaveTo"
                value={formData.leaveTo}
                onChange={handleChange}
                className="mt-1 p-2 border border-gray-300 rounded-md w-full"
              />
            </div>
          </div>

          {/* Row 3 */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label htmlFor="noOfDaysHours" className="block text-sm font-medium text-gray-700">No of Days/Hours:</label>
              <input
                type="text"
                id="noOfDaysHours"
                name="noOfDaysHours"
                value={formData.noOfDaysHours}
                onChange={handleChange}
                className="mt-1 p-2 border border-gray-300 rounded-md w-full"
              />
            </div>
            <div>
              <label htmlFor="reasonForLeave" className="block text-sm font-medium text-gray-700">Reason For Leave:</label>
              <textarea
                id="reasonForLeave"
                name="reasonForLeave"
                value={formData.reasonForLeave}
                onChange={handleChange}
                rows="4"
                className="mt-1 p-2 border border-gray-300 rounded-md w-full"
              ></textarea>
            </div>
          </div>

          {/* Row 4 */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label htmlFor="attachment" className="block text-sm font-medium text-gray-700">Attachment:</label>
              <input
                type="file"
                id="attachment"
                name="attachment"
                onChange={handleChange}
                className="mt-1 p-2 border border-gray-300 rounded-md w-full"
              />
            </div>
          </div>

          {/* Cover Up Details */}
          <div className="border-t border-gray-200 pt-6">
            <h2 className="text-xl font-semibold text-gray-800 mb-4">Cover Up Details</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="coverUpID" className="block text-sm font-medium text-gray-700">Cover Up ID:</label>
                <input
                  type="text"
                  id="coverUpID"
                  name="coverUpID"
                  value={formData.coverUpID}
                  onChange={handleChange}
                  className="mt-1 p-2 border border-gray-300 rounded-md w-full"
                />
              </div>
              <div>
                <label htmlFor="coverUpBy" className="block text-sm font-medium text-gray-700">Cover Up By:</label>
                <input
                  type="text"
                  id="coverUpBy"
                  name="coverUpBy"
                  value={formData.coverUpBy}
                  onChange={handleChange}
                  className="mt-1 p-2 border border-gray-300 rounded-md w-full"
                />
              </div>
            </div>
          </div>

          {/* Submit Button */}
          <div className="text-right">
            <button
              type="submit"
              className="inline-block px-6 py-3 bg-blue-600 text-white font-medium rounded-md shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default LeaveRequestForm;
