export const paths = {
  root: {
    path: "/",
    getHref: () => "/",

    home: {
      path: "",
      getHref: () => "/",
    },

    presentation: {
      path: "presentation",
      getHref: () => "/presentation",
    },

    stall: {
      path: "stall",
      getHref: () => "/stall",
    },

    posters: {
      path: "posters",
      getHref: () => "/posters",
    },

    works: {
      wrapper: {
        path: "works/:workType",
      },

      biology: {
        path: "/works/biology",
        getHref: () => "/works/biology",
      },

      chemistry: {
        path: "/works/chemistry",
        getHref: () => "/works/chemistry",
      },

      engineering: {
        path: "/works/engineering",
        getHref: () => "/works/engineering",
      },

      medicine: {
        path: "/works/medicine",
        getHref: () => "/works/medicine",
      },

      politics_and_economics: {
        path: "/works/politics_and_economics",
        getHref: () => "/works/politics_and_economics",
      },

      society: {
        path: "/works/society",
        getHref: () => "/works/society",
      },
    },

    about: {
      path: "/about",
      getHref: () => "/about",
    },

    staff: {
      path: "/staff",
      getHref: () => "/staff",
    },

    resources: {
      path: "/resources",
      getHref: () => "/resources",
    }
  },
};
