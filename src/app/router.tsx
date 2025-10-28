import { createBrowserRouter, RouterProvider } from "react-router";

const createAppRouter = () => createBrowserRouter([]);

export const AppRouter = () => {
  const router = createAppRouter();
  return <RouterProvider router={router} />;
};
