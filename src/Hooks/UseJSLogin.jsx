import { UseJSContext } from "./UseJSContext";
import { useState } from "react";

export const UseJSLogin = () => {
    const [usererror, setError] = useState(null);
    const [userisLoading, setisLoading] = useState(null);
    const { dispatch } = UseJSContext();

    const Userlogin = async (email, password) => {
        setisLoading(true);
        setError(null);

      const response = await fetch('http://localhost:4000/SIH/Job_seeker/login', {
     
      
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ email, password })
        });

        const json = await response.json();

        if (!response.ok) {
            setisLoading(false);
            setError(json.error || "Something went wrong"); // Extract the error message
        }

        if (response.ok) {
            localStorage.setItem('JS', JSON.stringify(json));
            dispatch({ type: 'LOGIN', payload: json });
            setisLoading(false);
        }
    };

    return { Userlogin, usererror, userisLoading };
};
