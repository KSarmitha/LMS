import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50">
      <div className="text-center">
        <h1 className="text-9xl font-extrabold text-gray-700">404</h1>
        <p className="text-2xl font-semibold text-gray-800 mt-4">
          Oops! The page you are looking for does not exist.
        </p>
        <p className="text-gray-600 mt-2">
          It might have been moved or deleted.
        </p>
        <Link
          to="/"
          className="mt-6 inline-block px-5 py-3 bg-gray-700 text-white font-medium text-lg rounded-md shadow-md hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-700 focus:ring-offset-2"
        >
          Go Back Home
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
