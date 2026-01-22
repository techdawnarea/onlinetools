// @mui icons
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import GitHubIcon from "@mui/icons-material/GitHub";
import LanguageIcon from "@mui/icons-material/Language";

// Techdawn.Online React components
import MKTypography from "components/MKTypography";

const date = new Date().getFullYear();

export default {
  brand: {
    name: "TechDawn.online",
    route: "/",
  },
  socials: [
    {
      icon: <LanguageIcon />,
      link: "https://techdawn.online",
    },
    {
      icon: <TwitterIcon />,
      link: "#",
    },
    {
      icon: <GitHubIcon />,
      link: "#",
    },
    {
      icon: <FacebookIcon />,
      link: "#",
    },
  ],
  menus: [
    {
      name: "tools",
      items: [
        { name: "text tools", route: "/tools/text" },
        { name: "converters", route: "/tools/converters" },
        { name: "generators", route: "/tools/generators" },
        { name: "calculators", route: "/tools/calculators" },
      ],
    },
    {
      name: "company",
      items: [
        { name: "about us", route: "/about" },
        { name: "contact us", route: "/contact" },
      ],
    },
    {
      name: "legal",
      items: [
        { name: "terms & conditions", route: "/terms" },
        { name: "privacy policy", route: "/privacy" },
      ],
    },
  ],
  copyright: (
    <MKTypography variant="button" fontWeight="regular">
      All rights reserved. Copyright &copy; {date}{" "}
      <MKTypography
        component="a"
        href="https://techdawn.online"
        target="_blank"
        rel="noreferrer"
        variant="button"
        fontWeight="regular"
      >
        TechDawn.online
      </MKTypography>
    </MKTypography>
  ),
};
