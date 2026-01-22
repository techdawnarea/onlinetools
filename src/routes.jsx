// @mui material components
import Icon from "@mui/material/Icon";

// Routes for navigation only (no component imports to avoid circular deps)
const routes = [
  {
    name: "home",
    icon: <Icon>home</Icon>,
    route: "/",
  },
  {
    name: "tools",
    icon: <Icon>build</Icon>,
    collapse: [
      {
        name: "text tools",
        description: "Text manipulation tools",
        route: "/tools/text",
      },
      {
        name: "converters",
        description: "Convert between formats",
        route: "/tools/converters",
      },
      {
        name: "generators",
        description: "Generate content",
        route: "/tools/generators",
      },
      {
        name: "calculators",
        description: "Online calculators",
        route: "/tools/calculators",
      },
    ],
  },
  {
    name: "about",
    icon: <Icon>info</Icon>,
    route: "/about",
  },
  {
    name: "contact",
    icon: <Icon>mail</Icon>,
    route: "/contact",
  },
];

export default routes;
