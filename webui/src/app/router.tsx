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
        {
          path: paths.root.presentation.path,
          lazy: async () => {
            const { Presentation } = await import("@/app/routes/presentation");
            return { Component: Presentation };
          },
        },
        {
          path: paths.root.booth.path,
          lazy: async () => {
            const { Booth } = await import("@/app/routes/booth");
            return { Component: Booth };
          },
        },
        {
          path: paths.root.posters.path,
          lazy: async () => {
            const { Poster } = await import("@/app/routes/poster");
            return { Component: Poster };
          },
        },
        {
          path: paths.root.exhibitedWorksIntroduction.path,
          lazy: async () => {
            const { ExhibitedWorksIntroduction } = await import(
              "@/app/routes/exhibited-works-introduction"
            );
            return { Component: ExhibitedWorksIntroduction };
          },
        },
        {
          path: paths.root.allWorks.path,
          lazy: async () => {
            const { AllWorks } = await import("@/app/routes/all-works");
            return { Component: AllWorks };
          },
        },
        {
          path: paths.root.works.wrapper.path,
          lazy: async () => {
            const { WorkWrapper } = await import("./routes/works/root");
            return { Component: WorkWrapper };
          },
        },
        {
          path: paths.root.about.path,
          lazy: async () => {
            const { About } = await import("@/app/routes/about");
            return { Component: About };
          },
        },
        {
          path: paths.root.staff.path,
          lazy: async () => {
            const { Staff } = await import("@/app/routes/staff");
            return { Component: Staff };
          },
        },
        {
          path: paths.root.resources.path,
          lazy: async () => {
            const { Resources } = await import("@/app/routes/resources");
            return { Component: Resources };
          },
        },
      ],
    },
  ]);

export const AppRouter = () => {
  const router = createAppRouter();
  return <RouterProvider router={router} />;
};
