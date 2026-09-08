// src/StartupLoaderWrapper.jsx
import React, { useState } from "react";
import Loading from "./components/common/loading/Loading.jsx";
import { RouterProvider } from "react-router-dom";
import { router } from "./routes/Router.jsx";

const StartupLoaderWrapper = () => {
  const [loadingDone, setLoadingDone] = useState(false);

  return (
    <>
      {!loadingDone && <Loading onComplete={() => setLoadingDone(true)} />}
      {loadingDone && <RouterProvider router={router} />}
    </>
  );
};

export default StartupLoaderWrapper;
