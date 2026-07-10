// src/StartupLoaderWrapper.jsx
import React, { useState, useEffect } from "react";
import Loading from "./components/common/loading/Loading.jsx";
import { RouterProvider } from "react-router-dom";
import { router } from "./routes/Router.jsx";


const StartupLoaderWrapper = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 3000);
    return () => clearTimeout(timer);
  }, []);

  return loading ? <Loading /> : <RouterProvider router={router} />;
};

export default StartupLoaderWrapper;
