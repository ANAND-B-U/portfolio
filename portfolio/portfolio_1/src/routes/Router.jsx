// src/routes/Router.jsx
import { lazy, Suspense } from "react";
import { createBrowserRouter } from "react-router-dom";
import Loading from "../components/common/loading/Loading.jsx";

const Home = lazy(() => import("../pages/Home.jsx"));
const Main = lazy(() => import("../layouts/Main.jsx"));

const repoName = import.meta.env.VITE_REPO_NAME || "";

export const router = createBrowserRouter(
  [
    {
      path: "/",
      element: (
        <Suspense fallback={<Loading />}>
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
