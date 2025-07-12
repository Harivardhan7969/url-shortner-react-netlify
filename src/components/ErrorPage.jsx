import React from 'react';
import { FaExclamationTriangle } from 'react-icons/fa';
import { useNavigate, useLocation } from 'react-router-dom';

const ErrorPage = ({ message }) => {
  const navigate = useNavigate();
  const location = useLocation();
  const query = new URLSearchParams(location.search);
  const errorType = query.get("type");

  const getMessage = () => {
    if (message) return message;

    switch (errorType) {
      case "notfound":
        return "The short link you’re trying to access does not exist.";
      case "expired":
        return "This short link has expired. Please generate a new one.";
      case "unauthorized":
        return "You’re not authorized to view this page.";
      default:
        return "An unexpected error occurred. Please try again later.";
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-[calc(100vh-64px)] bg-gray-100 p-6">
      <FaExclamationTriangle className='text-6xl text-red-500 mb-4' />
      <h1 className='text-3xl font-bold mb-2 text-gray-800'>
        Oops! Something went wrong.
      </h1>
      <p className='text-gray-600 mb-6 text-center'>
        {getMessage()}
      </p>
      <button
        onClick={() => navigate("/")}
        className='px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700 transition'
      >
        Go back to Home
      </button>
    </div>
  );
};

export default ErrorPage;
