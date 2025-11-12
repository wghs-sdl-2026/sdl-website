import { createBrowserRouter, RouterProvider } from "react-router";
import { paths } from "@/config/paths.ts";
import { Root } from "@/app/routes/root.tsx";

const createAppRouter = () =>
  createBrowserRouter([
    {
      path: paths.root.path,
      Component: Root,
      hydrateFallbackElement: <div>Loading...</div>,
      children: [
        {
          path: paths.root.home.path,
          lazy: async () => {
            const { Home } = await import("@/app/routes/home");
            return { Component: Home };
          },
        },
        
      ],
    },
  ]);

export const AppRouter = () => {
  const router = createAppRouter();
  return <RouterProvider router={router} />;
};
