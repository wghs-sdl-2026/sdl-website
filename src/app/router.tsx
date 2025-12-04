import { createBrowserRouter, RouterProvider } from "react-router";
import { paths } from "@/config/paths.ts";
import { Root } from "@/app/routes/root.tsx";
import { StaffList } from "./routes/staff-list.tsx";
import { Abouts } from "./routes/Abouts.tsx";
import { Poster } from "./routes/poster.tsx";
import { Presentation } from "./routes/presentation.tsx";
import { Stall } from "./routes/stall.tsx"
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
        {
          path: "staff-list",
          element: <StaffList />,
        },
        {
          path: "abouts",
          element: <Abouts />,
        },
        {
          path: "stall",
          element: <Stall />,
        },
        {
          path: "presentation",
          element: <Presentation />,
        },
        {
          path: "poster",
          element: <Poster />,
        },
      ],
    },
  ]);

export const AppRouter = () => {
  const router = createAppRouter();
  return <RouterProvider router={router} />;
};
