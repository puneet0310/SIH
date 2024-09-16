import { UseJPContext } from "./UseJPContext";
import { useState } from "react";

export const UseJPLogin = () => {
  const [error, setError] = useState(null);
  const [isLoading, setisLoading] = useState(false); // Initialize as false
  const { dispatch } = UseJPContext();

  const JPlogin = async (email, password) => {
    setError(null);
    setisLoading(true);

    try {
      const response = await fetch('http://localhost:4000/SIH/Job_Provider/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password })
      });

      const json = await response.json();

      if (!response.ok) {
        setError(json.error || "Something went wrong"); // Handle known errors
      } else {
        localStorage.setItem('JP', JSON.stringify(json));
        dispatch({ type: 'LOGIN', payload: json });
      }
    } catch (error) {
      setError('An unexpected error occurred'); // Handle unexpected errors
      console.error('Request failed:', error);
    } finally {
      setisLoading(false); // Ensure loading state is updated in all cases
    }
  };

  return { JPlogin, error, isLoading };
};
