export const paths = {
  root: {
    path: "/",
    getHref: () => "/",

    home: {
      path: "",
      getHref: () => "/",
    },

    articleSearch: {
      path: "article",
      getHref: () => "/article",
    },

    article: {
      path: "article/:articleId",
      getHref: () => "/article/:articleId",
      getHrefId: (id: string) => `/article/${id}`,
    },

    about: {
      path: "about",
      getHref: () => "/about",
    },

    staff: {
      path: "staff",
      getHref: () => "/staff",
    },

    resources: {
      path: "resources",
      getHref: () => "/resources",
    },
  },
};
