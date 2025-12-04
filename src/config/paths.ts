export const paths = {
  root: {
    path: "/",
    getHref: () => "/",

    home: {
      path: "",
      getHref: () => "/",
    },
    StaffList: {
      getHref: () => "/staff-list",
    },
    Abouts: {
      getHref: () => "/abouts",
    },
    Presentation: {
      getHref: () => "/presentation",
    },
    Stall: {
      getHref: () => "/stall",
    },
    Poster: {
      getHref: () => "/poster",
    },
  },
};
