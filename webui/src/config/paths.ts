export const paths = {
  root: {
    path: "/",
    getHref: () => "/",

    home: {
      path: "",
      getHref: () => "/",
    },

    exhibitedWorksIntroduction: {
      path: "exhibited-works-introduction",
      getHref: () => "/exhibited-works-introduction",
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

    allWorks: {
      path: "all_works",
      getHref: () => "/all_works",
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
