import React, { useEffect, useState } from "react";
import { Navigate } from "react-router-dom";

const NotFound = () => {
  const [redirect, setRedirect] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setRedirect(true);
    }, 1000);

    return () => clearTimeout(timeout);
  }, []);

  return (
    <>
      <h1>Not found</h1>
      <p>Navigating to home page</p>
      {redirect && <Navigate to="/" replace={true} />}
    </>
  );
};

export default NotFound;
