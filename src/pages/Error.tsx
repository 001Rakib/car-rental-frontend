import { Link } from "react-router-dom";

const Error = () => {
  return (
    <div className="h-screen w-full flex flex-col items-center justify-center bg-gray-100">
      <h1 className="text-9xl font-bold text-gray-600">404</h1>
      <p className="text-3xl text-gray-600">Page Not Found</p>
      <p className="text-lg text-gray-600">
        Sorry, the page you are looking for does not exist.
      </p>
      <div className="mt-8">
        <Link
          to="/"
          className="bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded"
        >
          Go Back Home
        </Link>
        <Link
          to="/login"
          className="bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded ml-4"
        >
          Login
        </Link>
      </div>
    </div>
  );
};

export default Error;
