// src/routes/Router.jsx
import { lazy, Suspense } from "react";
import { createBrowserRouter } from "react-router-dom";

const Home = lazy(() => import("../pages/Home.jsx"));
const Main = lazy(() => import("../layouts/Main.jsx"));

const repoName = import.meta.env.VITE_REPO_NAME || "";

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
  { basename: `/${repoName}` }
);
