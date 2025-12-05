import { createBrowserRouter, RouterProvider } from "react-router";
import { paths } from "@/config/paths.ts";
import { Root } from "@/app/routes/root.tsx";
import { StaffList, Abouts, Poster, Presentation, Stall, Society, Politics_and_economics, Chemistry, Engineering, Medicine, Biology } from "./routes/subpage_menu.ts";
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
        {
          path: "society",
          element: <Society />,
        },
        {
          path: "politics_and_economics",
          element: <Politics_and_economics />,
        },
        {
          path: "chemistry",
          element: <Chemistry />,
        },
        {
          path: "engineering",
          element: <Engineering />,
        },
        {
          path: "medicine",
          element: <Medicine />,
        },
        {
          path: "biology",
          element: <Biology />,
        },
      ],
    },
  ]);

export const AppRouter = () => {
  const router = createAppRouter();
  return <RouterProvider router={router} />;
};
