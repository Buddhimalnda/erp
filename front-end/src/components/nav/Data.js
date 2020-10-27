import IMG1 from "../../assets/img/edutalklogo2.png";


export const topBarItems = {
  logo: {
    link1: IMG1,
    text: "EDUHR",
    link2: "",
  },
};

export const leftBarItems = [
  {
    id: 1,
    title: "Main",
    menus: [
      {
        id: 1,
        title: "Dashbord",
        icon: "/",
        linksStatus: true,
        links: [
          { id: 1, title: "admin Dashborad", link: "#" },
          { id: 2, title: "employee Dashborad", link: "#" },
        ],
      },
      {
        id: 2,
        title: "Tickets",
        icon: "/",
        linksStatus: false,
        links: [],
        link: "#",
      },
      {
        id: 3,
        title: "bb",
        icon: "/",
        linksStatus: false,
        links: [],
        link: "#",
      },
    ],
  },
];