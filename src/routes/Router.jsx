// src/routes/Router.jsx
import { lazy, Suspense } from "react";
import { createBrowserRouter } from "react-router-dom";

const Home = lazy(() => import("../pages/Home.jsx"));
const Main = lazy(() => import("../layouts/Main.jsx"));

// We removed the env variable since we deleted .env.local!

export const router = createBrowserRouter(
  [
    {
      path: "/",
      element: (
        <Suspense fallback={null}>
          <Main />
        </Suspense>
      ),
      children: [
        {
          path: "/",
          element: <Home />,
        },
      ],
    },
  ],
  { basename: '/portfolio' } // 👈 HARDCODED! (No trailing slash here)
);