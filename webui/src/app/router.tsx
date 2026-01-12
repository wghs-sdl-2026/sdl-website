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
        {
          path: paths.root.articleSearch.path,
          lazy: async () => {
            const { ArticleSearch } = await import(
              "@/app/routes/articles/search.tsx"
            );
            return { Component: ArticleSearch };
          },
        },
        {
          path: paths.root.article.path,
          lazy: async () => {
            const { ArticleWrapper } = await import(
              "@/app/routes/articles/article"
            );
            return { Component: ArticleWrapper };
          },
        },
      ],
    },
    {
      path: "*",
      lazy: async () => {
        const { NotFound } = await import("@/app/routes/not-found");
        return { Component: NotFound };
      },
    },
  ]);

export const AppRouter = () => {
  const router = createAppRouter();
  return <RouterProvider router={router} />;
};
